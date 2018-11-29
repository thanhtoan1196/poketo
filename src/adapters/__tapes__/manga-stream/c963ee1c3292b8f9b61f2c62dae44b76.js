var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/9
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:26 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d800e08a6cbf92253aacf690dcb1ff1ea1541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:26 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520c0df52e15-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqZoyZYfsaWO82iSOW2aNm7m9nQ6GohcirBAgAVAyTpn+t/vLF+ino7SpNW59zgzEQkC+wR2F4slrx8//+HZ7S9vX0BkYzF4dE0/IJgc9x2UDjUgCwaPAACuY7QM/Ihpg7bvpDZ0L5zikeVW4OAGbjXjAlQIT4VSAXR64MJbNka4BBe+Z3LM4J3VyOJrLx9SgyxZjH1nynGWKG0d8JW0KG3fmfHARv0Ap9xHN7s5Ai655Uy4xmcC+532sbMOKkDja55YrmQN2k/IAgg1IsQZPUoKLhEEnyC8YTq16gieCmR+dAQ/SIS3HH08gleptKjhvrxgMiAAc4iVxnaJXXA5gUhj2HciaxPzxPNidu8Hsj1SyhqrWUI3voq9UEnrshkaFaN32j5vH3u+MUvN7ZjLtm+MAxpF3zF2LtBEiNYBLi2ONbfzvmMidnJx6s6m4f8kvyf//Of7H1/+4+z2Juq9fS9e/hD++ObVO/W8ez968fWPk7f3z26+FW9e4FS9eHXyThwbPnrv//Dje/nGAV8rY5TmYy77DpNKzmOVGmfwqMZbRgj3SaI5m17IpnTf5r5ywM4T7Ds8ZmP07t28nzdYHW8ipa2fWtgbUAap/KtL22PGoDWZCDO9mmyakfS+6XYvj7uX60LM6cqJe+y68Or2++96YCIeH0GoNLx+ceZegEkTmo80qfMOKDBGaQ247qAa/CsPQVh4/QIufyta88kHRvsL8u6MRyusZyI+bd8ZZ3Dt5d1KSL+iDHj4G4FegpLLw+K99e7YlOWtBQf0N+MyULO2Hye3EcYIffj3kqxGzJ+MtUpl8AQaX4Qn9K9xtNQl0Txmek7PTy7OL31/8/NbvLcZjDBc6WDQVzIoQPR6vW2PSwj+Ggri7zsuJ/T0/Px85WnApzxAXQ6tnv2RS6qS5Lr4y7Vo2pJbrRI2z5YgC4x7QmrYJt4V7eynCzay0IcGa1yt0Hft5Ub10fU=", "base64"));
  res.write(new Buffer("SAVz+g34FHjQdzSyALUr2bQ0KPTEF8yYviPZdMQ05D9ugCFLhS1v85E1ItZHulG9z/UotVbJgpn8xlkZYNV4LBB8JQRLDAYOBMyyornvlO1lM9NjcgxfxMbNATjANGcu3idMBhj0nZAJg3UiTcJkidRoV0kxdwa3OVrJpnzMyHpfe9RvyzCyDS4hG3y+btdeLqDijq3IaaSZDCo7RkMZaTng01K5Rf9SYqXWFhIk7S/kVuBJRQ1ROWYxOQobOLhmC9SvVIyE/toTfKlXCSnQKgnUTNZgFDzlML5wVnsW+l5R/gJO5lBz3349qjhlGrMFNMqlsYRrwVeFI0aZrpC0zl5m2D1mLfMnQyWHllsmncFN1gBKwi01rLO/C9oItUE9cQZP84v9RgeajZUcjpgQQ5MmtLqeZ03wlAkB76hpP4gR45N5mjqDV/nF48f7jr/jMQ6lGvIkUQSG7kEqeJ0kaj9Y8XwYoVZD5rMAY86cwfdzeIVawU3Rsh88JXGYUDjlDKrIam8ISSr9aBiT4jMgdEvTbz9AEqeoBS3bwVutYm4wgDdl236gTKQm6RgnnIRuVBozZ/CubCPBv6O2/WDaCIcGpyiHAbJAzIeGS+MMbiOEd9QMz7NmeMel2ROymszVcBypVGgkWzuZK3hJt0/0bmVUazZ3w86HI3UG36ZCwHfc2M0Yrr1U1KzVqu2qwSvCeI8lieB+5h3IAvk65Zaiso22b8N4XwmlncEz+sl2KCtiXFC01QpXrpePI7vVJBfhYyavSoQhg5C5I+uTEPkAnivJ7G67zVIbueMUjV0xxLEKmFh1wUKNuXTzRwtiFtHKkytn8B31+YQ4NY65sagfQPtT0e2DvBRkJNB/KC3pG4N1x1WMgTWHVXm0LZ5ryfMPU4OaNo6V6//c7sygtVyOjTN4V1x94FJeEmiJW6ixSm2mVpV+3Dpb0vsUNQ/5JnnvIEIqy8NiXZZq2MDM6kJAIVwFS4OprYgfIx4EKPuO1SnmC2YdIsYbSfBVKjO9YbwqCbZJELmA8tAt2xN6bcmmVZy22PLlwd2mGC9mXLoU2FP2pNZu0tHmuD5/4M40S5KtITzZLa2EWdVGrcvISpe2eAnQVbGV8COW2CWo6wtnZGU2pNxSfGDgVy2vddhrYXWuQvfeQHFlYmctXVQuu07vQXjVelwO5Tdq9yPW6b5/y+tae2xoibOhCocj4sw7Ofd6p2fHXmfF6FRycQYn5+DCzYxNUHI5Ljhb6jzlho8EFr3LHltNxqf8e5jBM693erybwTNicKwRc0f9AINnB8Zgz+uddLs7GaRs5w285Fo0DPykVPwgk70DY/LU63XPL3YyeUpMjpgMqn35dvZOD4y9E6/X7fV2sncCLryGQMmGBYkYwFylD/J5cmB8dr1et9vZyWcXXHivuI/AJdgIwUbcn+DD67J7YLx2vF7nfPe67NCU1Yo2YQ8w1zkw5o69Xqe3W5HHNGFlgAnKACVtqB/g8fiweOxeer1OZ+ei7NLp0U1Ixy7v/EgpATeBEmh84vebhxjuXh4Ywxde7/hsp5HtXmSexHBJiVBjMXmQyYvPwuSHb/thW7Zuhf0HcwGwtk+BRcC91PRQ7JuwMX5Q4FucbHyiwLc479wknwMOYT/bdO/0vNOzPHD6lmtjc/k0O62/Zjn+7XyfOoOM49O/lt8Ppq9X0Nc7UPrOCvrODpS+84K+8wOl76Kg7+JA6bss6Ls8UPo6xwWBneNDpbBTUtg5VAq7JYXdQ6XwpKTw5FApLB1J51A9Sad0JZ1D9SWd0pl0DtWbdEp30jlUf9IpHUrnUD1Kp3QpnUP1KQ==", "base64"));
  res.write(new Buffer("3dKndA/Vp3RLn9I9VJ/SLX1K91B9Srf0Kd1D9Snd0qd0T/9zdmMfzt2ZM/iOVTvO7tmeW84HsxCrt4vdOaUe9I5deS2vkmic8qzO9kPD+a8E0/oK3mqc7q+1GmaJ99b58CD4Dd5b+EoT7t1oa7UTy8eksJK1iQ2D2DD3vHsxvDwui+BYmb9hNqT8SCVjOpDdBMOt1VhUBL1iFoEFBkapBWO5EDBj0oJVEKFIIDXfwFP0VYzAYGO5RnVJ3D5+tKLwrEK3TohWMzcUKQ+AlJ8d52447N2Sk4L6yfpDirjm8TiXFWXY8jQXFHXGHo/H7aUCaBV7fiCLbFzn9DKHc3zRTuSYaqqXEk2bCdugspPj4+HZ8brODA9wSWkra2XjifmWaRAqReUko9o0eLStqnqUchGsVFQ/VK/7ZdP5oibCVltJbDpCscA5gjCVPpUQNFtFJfWUaVBhaJCqer9sNmpDG612/qTZagsMLXy93iF7b6HZgq+hc3z16I9Wm94waK5h4WHTRtyQ2hKBFlvwZdbQahNdzRYNvXr06MtmXmTcams0/F/Y3EjubBOlBSFXn56pVbztsmhhFevKM2atbjaywvzGUSNmmmqXCOUTt/F1c+Z1W183kvtGyTvprV1UU7TaCZcSg2bO9IgK3M0TOD0+As+DWYSSFvwoX+fGcn8yzzoaXyshuBw/gbxrogwn+UGQai7HRYesb6xGXOATyIqXqa+harmgejEgf57TVitCX5rhVBEFIQvQActGXAZ433fcjgNaZallzoQa5zN/qXRr3dxRu1v2L0YrP6Uj9S2lI/mQovBtR/1I3i9aLSSvuu4qGPeFqurAA25iXgEsangEG9HbF8+yfsUxxobinq8sj9FcVWcZ9bLrJWKi02Wys7eJsuInejVG5fXI+atGwPysDOjai073OlTIIRelPGsUJFXJuAzVFpP+PDtGjtgUgfjN6YA52m+21VEtZoBVbllR5wyeaSR/pmRWJAhSzY6A24bJX2Sid5F+T7k/ebzhGCFZeWsmaw2VjmuFY1y61OKAVFMmeMAsUiFVeb3NYdVkRcPzE5idUQ/NAnq3pu9gzLhwBi/o59rLHuwYyGWSloY8H7mEuDAmdfEVvRLBfIyUCFD3nV9UqqEUKgaQ9QEWBBrzl6x+Tzm1ezsoqR/hFJi0VnoNtVtCcwYZ2hwXNxWWI0gEMoMQUmyiiL2IGwg5iqC97VRoy6z9JBpJmDEzpakiurjaTy/V+IdUs+i4pJ23VfOnUkSJqKaLEsmn1MSDqtg2T7KGrKg7mx1eSS/VnADKfJIGCg1ZkZhZPwIm5zYiB8Ul5LPZVzowR+BH6E9ooIYALePCtHeSt2TNTTqKuXW2FATWaR5ZWVrZhXXeHc7uMHCh0mNlncFryK8gnkNSTb5NB6AeTaqNVnyrGcd7S4W9YudR8FipsUBXMHqdIKdypWlTLfNqIWs+pCjqfpndbGaDLcb5OFJqsheaclCB6Nvi9gFUdsYtxdP7YCrGFIhu87v1Cuit2+LlqP9jQ6LVyvL/RkX7RUU3ReCRl97r4p26vzwa+p5NyHLVIiEllwI1MrqUr6F4BpmZtyFznWVvgdZkptFXMWmWhmvMTLeBr1icXIHEmTnaiJxgZmOZpAB+lpvKMoYfzcGkI1oHIyKxyQI3i6xq1D1uteFG0DZ3vhrR7YzmqslrlZsZPmdQuBuRmdGs0gO4NBZZ0P7QAG7xxmgBfYeVo79fVApMI7BR5t8UZO9OM/J0mjIW2s7BKJ8zATEGnFVCtwoYiXVTRN2GH6SPJMmNOGM2way0sOh+VCkgNVjIfwvKQjQkFQ==", "base64"));
  res.write(new Buffer("Jq2Yl0WKYWpTjW14HW7FypZ0tInsoxI8zYlMDgR6IymhVnFBafGKxiYNbXazS0F2pae/Os5evNXyc3G1X1RHaZMtEV3M7gXKsY36Tvcin+wVtuXQ7jmaLJ4rH0MzSUeC+2IO9L0HNhLY+oiwbzH5F6FVicJNJf+djOdtxOwCMTfVBLFUat+Gt/lipLpCQ7MgxjzACngYokZpd4aA+9G0iEN/rhH0p+PQ/YgY29pkgDg1FkYIjOwrGd+T7BMfzLeoDQglx58QtVhC7TMpVYacvqEBNmISuhefET0TScRkGi/TQF8AmWffB2FkE4o+qLlfJ6XJ3H9lBuPYvWz9Lfuzz7dj3rRXfk826aN2yFUoQHl2dySUP6F3faY1gLVJD825ShtC0DQw5NQZ5G+e5W9wZfaZ5J38iQmQb8iXDEJFR2kNmMkcgMUAZtxGwBYGoHJ3f3omrmYGtkrl/2Ny4NOnBTap4HPnBPYjIrPFFf41W7yfMfzcuh/6SoY1cp8pGXIdF9uJzzQbcqSbpwQ02Zhx2frUUyPmJsu25LmZstmspGWqpMzH54j2TsJUZGd5mCIrfFPmt7fuC7dnTT7bnj1P6Px3x/7nduyU3puinv8Nu/V8i7VjG5WdrJPznmKRvrMo881SuWQqK5qtmvxZ7utGKNRs60Z9hhQRGCz27BSUZ3tBnWaHnIa2iIVogNv2x5x6FPPz/86xR8HQX3HuUaJamM468s9+8vGJbGlBc2ZJn+KYy9pqO0BLalLfR2P+a1H/Yy3qS3LXj8mw2sUWJIsg0GzPih4B3ifo28LmIc/scYzGUFVblqBKTZEf24iWyrwgxBnEXKYWTb6/CVNtIzKfNbO6xZB+zGSnltqH7ZY+ymEiFqhZVdOzudNI3W+p+ik/5scSbtr5iUtW5XRnqOmJLzglbTaWAuV0Fd/nC0c3Zi7915JT8ctaAQ39ffu0TR8abS5/S5Elyesgv3wCjc7F+dlp7/zypHd+3Dvtna58tNBXasKx6ExTefnxfTiKBWx9PEVtaBeco5p22xe1zx4W1TR/5D+LEqDgCMwR8KC1IJuqcu7MEYR3BvoQtMdoXxSfsXw6v2XjNyzGpmn9evzbVTWGh9Cs93w6fx00edBqwb812lTLqz+qvgVYPwtIi/5N07qCO9PmAfSBB1e1zm2jfehDpUpfSYm+bZcHW22J1kM5/PmdZ4IJ6XIxOrwz7YTRvvyNCrDNpUFtn2KoNDYLFkvBNEv7dwSNfAI0jqBRHbndGRNMGq3W1aP1mrHV+rIpykDp9l31NdHBw2NYkuwesOtDkjSYtj6cyvm4HKZa0NckveJrkrXHeeXdjg4s4eXT2tpZqxJcH8jNMC9uovVB1U+LHjnSfHU0dtarksh3VzRSZVdRF1YqrJUhmFdzGpaWJdWPrbyr22hVLWWV2R9Lil1UHnr5VzevvfyTx/8LAAD//wMAPY8vNgNZAAA=", "base64"));
  res.end();

  return __filename;
};