// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { SiteAdapter } from '../types';

// Helper function to get trimmed text, since we use it throughout the adapter.
const t = d => d.text().trim();

const MangaUpdatesAdapter: SiteAdapter = {
  id: 'manga-updates',
  name: 'MangaUpdates',

  supportsUrl(url) {
    return utils.compareDomain(url, 'http://mangaupdates.com');
  },

  supportsReading() {
    return false;
  },

  parseUrl(url) {
    const matches = utils.parseUrl(url).searchParams;

    invariant(/\/series.html\?id=/.test(url), new errors.InvalidUrlError(url));

    const seriesSlug = matches.has('id') ? matches.get('id') : null;
    const chapterSlug = null;

    invariant(seriesSlug, new errors.InvalidUrlError(url));

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug) {
    invariant(
      typeof seriesSlug === 'string',
      new TypeError(`'seriesSlug' must be a string, not ${typeof seriesSlug}`),
    );

    return utils.normalizeUrl(
      `${this._getHost()}/series.html?id=${seriesSlug}`,
    );
  },

  _getHost() {
    return `https://www.mangaupdates.com`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await utils.getPage(
      `${this._getHost()}/series.html?id=${seriesSlug}`,
    );
    const dom = cheerio.load(html);

    const $content = dom('#main_content');
    const $metadataColumnA = $content.find('.sContainer[text] .sContent');
    const $metadataColumnB = $content.find(
      '.sContainer + .sContainer .sContent',
    );

    const title = $content.find('.releasestitle.tabletitle').text();

    const description = t($metadataColumnA.first());
    const author = utils.formatAuthors([
      t($metadataColumnB.eq(5)), // Author
      t($metadataColumnB.eq(6)), // Artist
    ]);
    const status = utils.parseStatus(t($metadataColumnA.eq(6)));
    const coverImageUrl = $metadataColumnB
      .find('center img[width][height]')
      .attr('src');

    const $updatedAt = $metadataColumnA.last();
    const updatedAt = moment
      .tz(t($updatedAt), 'MMMM Do YYYY, h:mma zz', 'America/Los_Angeles')
      .unix();

    return {
      slug: seriesSlug,
      title,
      description,
      author,
      status,
      coverImageUrl,
      url,
      updatedAt,
    };
  },

  async getChapter() {
    throw new errors.UnsupportedOperationError(this.name, 'fetching chapters');
  },
};

export default MangaUpdatesAdapter;
