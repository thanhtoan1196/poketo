var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:19 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d8a32540de711c587f27abfa65aef6ddb1534133118; expires=Tue, 13-Aug-19 04:05:18 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 05:05:19 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d79494f1e65-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeWpqYoyZYfsaVO3sncNk2P3czt6XQ0ELkUEYEAC4CSdc70v99ZvkQ9HaVxj+69VWZiEgT2CSx2F0teP37x4/PbX96/hMjGYvDomv6AYHLcd1A61IAsGDwCALiO0TLwI6YN2r6T2tC9cIpHlluBg6dwqxkXoEJ4JpQKoNMDF35gcszgxmpk8bWX96wBlCzGvjPlOEuUtg74SlqUtu/MeGCjfoBT7qOb3RwDl9xyJlzjM4H9TqvtrIMK0PiaJ5YrWYP2D2QBhBoR4oweJQWXCIJPEN4xnVp1DM8EMj86hh8lwnuOPh7Dm1Ra1HBXXjAZEIA5xEpjq8QuuJxApDHsO5G1iXnieTG78wPZGilljdUsoRtfxV6opHXZDI2K0Tttnbfanm/MUnMr5rLlG+OARtF3jJ0LNBGidYBLi2PN7bzvmIidXJy6s2n438nvyT//+eGn1/91dvs06r3/IF7/GP707s2NetG9G7389qfJ+7vnT1+Jdy9xql6+ObkRbcNHH/wff/og3znga2WM0nzMZd9hUsl5rFLjDB7VeMsI4T5JNGfTC9mU7lvcVw7YeYJ9h8dsjN6dm/fzBqvjTaS09VMLewPKIJW/urQ9Zgxak4kw06vJphlJ77vLy5OLzmW3fXrZWZdkTlxO4WPXhTe3P3zfAxPx+BhCpeHtyzP3Akya0KSkCZ13QIExSmvAdQfV4F95CMLC25dw+VvRms9AMNpf0PjReLS6eibi09ZH4wyuvbxbCelXlAEPfyPQS1ByoVi8s95HNmV5a8EB/WZcBmrW8uPkNsIYoQ//XhLYiPmTsVapDJ7A0VfhCf07Ol7qkmgeMz2n5ycX55e+v/n5Ld7ZDEYYrnQw6CsZFCB6vd62xyUEfw0F8fc9lxN6en5+vvI04FMeoC6HVs/+yCVVSXJ5ptTVUC5M05LcapWwebYeWWDck9ZH8920f9bpONuEvaIrLzeLj65HKpjT34A=", "base64"));
  res.write(new Buffer("T4EHfUcjC1C7kk1L20BPfMGM6TuSTUdMQ/7HDTBkqbDlbT6yptb1kW5U73M9Sq1VsqA4v3FWBlg1HgsEXwnBEoOBAwGzrGjuO2V72cz0mEz7V7FxcwAOMM2Zi3cJkwEGfSdkwmCdSJMwWSI12lVSzJ3BbY5WsikfMzLE1x712zKMlrlLyAYP1+3aywVU3LEVOY00k0FlkmgoGzy69gI+LZVb9C8lVmptIUHS/kJuBZ5U1BCVYxaTozBng2u2QP1GxUjorz3Bl3qVkAKtkkDNZA1GwVMO4ytntWeh7xXlL+Bke2O+TV+PKk6Zxmzij3JpLOFa8FXhiFGmKySts5fZaI9Zy/zJUMmh5ZZJZ/A0awAl4ZYa1tnfBW2E2qCeOINn+cV+owPNxkoOR0yIoUkTWl0vsiZ4xoSAG2raD2LE+GSeps7gTX7x+PG+4z/yGIdSDXmSKAJD9yAVvE0StR+seD6MUKsh81mAMWfO4Ic5vEGt4GnRsh88JXGYkGfkDConaW8ISSr9aBiT4jMgdEvTbz9AEqeoBS3bwXutYm4wgHdl236gTKQm6RgnnIRuVBozZ3BTtpHgb6htP5g2wqHBKcphgCwQ86Hh0jiD2wjhhprhRdYMN1yaPSGryVwNx5FKhUaytZO5gtd0+0TvVka1ZvPN1Pl0pM7gVSoEfM+N3Yzh2ktFzVqt2q4avMIj91iSCO5nuwNZIF+n3JJvtdH2bRjvK6G0M3hOf+A9G+OKGBcUbbXC1dbLx5HdapILJzCTVyXCkEHI3JH1SYh8AC+UZHa33WapjdxxisauGOJYBUysbsFCjbl080cLYhYuyZMrZ/A99fmCODWOubGo70H7j6LbJ+1SkJFA/6G0pG8M1jeuYgysbVjVjrZl51ra+YepQU0xYLX1P/R2ZtBaLsfGGdwUV5+4lJcEWuIWaqxSm6lVpZ+3zpb0PkXNQ75J3juIkMrysFiXpRo2MLO6EFAIV8HSYGor/MeIBwHKvmN1ivmCWYeI8UYSfJXKTG8Yr0qCbRJELqDcdcsiO68l2bTy0xaBW+7cbfLxYsalS4495T9q7SYdbfbr8wfuTLMk2erCk93SSphVbdS6jKx0KVBLgK6KUMKPWGKXoK4vnJGV2ZAypPhEx69aXuuw19zqXIXunYHiysTOWsKnXHad3r3wqvW47Mpv1O5nrNN9f8vrWntsaImzoQqHI+LMOznxet1ez+usGJ1KLs7g5ARceAuBkkcWJGIAc5UWDC6NmXLDRwKLQWWPrZbjS/7u57Pr9brdzk4+u+DCB8V9BC7BRgg24v4E7b28dg+M147X65x3d/LaAReeakXu3z3MdQ6MubbX6/R2K7JNE1YGmKAMUJIrfw+P7cPisXvp9TqdnYuye0kKDCl3e+NHSgl4GiiBxid+v7uP4e7lgTF84fXaZxc7Gb4ghsFwSSkYYzG5l8mLA2Py3Ou1e+2dTJ6DCy+U0vfydn5gvJ15vXZ3p8npnoELz1D60b3MnR0Ycz2v126f7WSOToSea06hgID3Go1J9b12p9s7MEZPvdPL3ulORk/BhVfsfpvaPX0Q3j493IdtWboVru/NAcBafAILR3up6T6fN2Fj/CSHtziX+EIOL2URoLNRPgfsuj7YLO/0vNOz3Fa94trYXD6NTvOvWYV709l1BhmF3QOl76Sg7+RA6Tst6Ds9UPp6BX29A6XvrKDv7EDpOy/oOz9Q+i4K+i4OlL7Lgr7LA6Wv0y4I7LQPlcJOSWHnUCksN5HOoe4inXIb6RzqPtIpN5LOoe4knXIr6RzqXtIpN5POX7yb/P37+/enZ2/3zBl8z6qIoQ==", "base64"));
  res.write(new Buffer("e7ZnyHBvFLl6u4iuKHTUO6KqWlycaJzyrNRxN1On3mnvou11T53BN4JpfUV5i+n+y7KGWuKddT45qnmHdxa+0YR6N9bamffy8RasRN2xYRAb5p53L4aX7bJ4iZXxN7MhxbeVjOkgbRMMt3Y2XhH0hlkEFhgYpRaM5ULAjEkLVkGEIoHUfAfP0FcxAoONx+zVJXH7+NGKwrP6yDohWs3cUKQ8AFJ+dgy34ZBuS04B6iei9+jhmsfjXFSUIMmzFFAUeXo8HreWSlBV7PmBLJIpndPLHEy700rkmKpal/IEm+naoLGTdnt41l5XmeEBLulsZalsPOjcMgtCpagKYFSbBY+2lbSOUi6ClXLW+wpXv244X9VE2GwpiQ1HKBY4xxCm0qeT30azKGOdMg0qDA1a6MPXjaPa0KNmK3/SaLYEhha+Xe+QVY43mvAtdNpXj/5otqjGu7GGhYcNG3FDaksEWmzC11lDs0V0NZo09OrRo68bebVts6XR8H9hYyO5s02UFoRcfXmmVvG2yrPmVawrz5i1unGUVUUfHR/FTFPJCaF84h5925h53ea3R8ndUck76a1VHII3WwmXEoNGzvSIqovNEzhtH4PnwSxCSet9lC9zY7k/mWcdja+VEFyOn0DeNVGGk/wgSDWX46JD1jdWIy7wCWQ1p9TXUJFTUFVl589z2moVwEsznApZIGQBOmDZiMsA7/qOSwXhKssMcibUOJ/5SxU369aO2t2yfzFa+SmVLG058c+HFPVKO479837Rav1v1XVXna8vVFW+G3AT8wpgUXoh2IhK359n/Yos9IaajG8sj9FcVanoerXsEjHR6TLZ2fscWc0KvZyg8jLS/GUPYH5WvXHtRad75YRzyEUFxhoFSVXpK0O1xaK/yM7gIzZFIH5zOmCO9rtt5S+LGWCVWxZCOYPnGmk7UzKr7QKpZsfA7ZHJXyWht0F+T7k/ebwhC5ysVKNnraHSca3eh0uXWhyQasoED5hFqn8pr7ftVzVZ0fA8gb7T6aFZQC829B2MGRfO4CX9ufayBzsGcpmkpSHPRy4hLoxJXXxFr0QwHyMlAtR95xeVaiiFigFkfYAFAZ3/0MsZv6ec2r0dlNQz8AUmrZVeQ+2W0JxBhjbHxU2F5RgSgcwghOSaKGIv4gZCjiJobUvqb5m1X0QjCTNmpjQVshZX++mlGn+fahYdl7Tzvmr+UoooEdV0USL5kpq4VxXb5knWkNXiZrPDK+mlgh1AmU/SQKEhKxIz60fA5NxGtEFxCfls9pUOzDH4EfoTGqghQMu4MK2d5C1Zc5OOYm6dLXVcdZpHVpZWdmGdd3uzOwxcqPRYWWfwFvIriOeQVJNv0/mVR5NqoxXfasbxzlI9pth5kjdWaizQFYyqwHMqV5o2laCu1h/mQ4pa3NfZzWY22GKcjyOlJnuhKQcViF4Vt/egsjNuyZ/eB1MxpkB0m9+tF65ujYqXvf7PdYlWC4L/9or284qeFo5HXjGti1eh/nJv6Ac2IctV84SUXHLUyOhSuob8GWRm3oJs6yx7C7QmM42+ikmzNFxjZroNfMPi5AokzszxRuQEMxvLJDnws9xUlj78aA4mHdE6GBGJDRa4mWdVo+5xswVPBYW581WPbqc3V01eq9zM8DmDYrsRmRnNDuqBS2ORBa1PdeAWL/oV0HdYOfr9olJgGoGNsv1NQfb2KqOdTlPCQts5GOVzJiDGgLNK6FYBI7Fu8qhb8KP0kSS5EWfMJpjVZRbdjysFpAYL+W9BWYiGpMKkFfOywjNMbaqxBW/DrVjZko42kX1cgqc5kcmBQG8kJdQqLigtKus3aQ==", "base64"));
  res.write(new Buffer("aPM2u+RkV3r6q/3sxcsIPxdX+3l1lDbZ4tHF7E6gHNuo73Qv8sleYVt27V6gyfy58jE0knQkuC/mQG/cs5HA5me4fYvJv3CtShRuKvnvZDxvI2YXiLmpJohlE5QteJ8vRirKNDQLYswdrICHIWqUdqcLuB9NCz/05xpBf9oP3Y+Isa1NBohTY2GEwMi+kvE9yb6twHyL2oBQcvwFUYsl1D6TUmXI6SsGYCMmoXvxgOiZSCIm03iZBvoGwzz7QgMjm1D0Qc39OikN5v4rMxht97L5H4nPHi5i3hQrfyCb9FkRcuUKUJrdHQnlT+gVjWkNYG3SQ2Ou0iMhaBoY2tQZ5C8M5S/eZPaZ5J38iQmQB+RLBqGio7QGzGQbgMUAZtxGwBYGoNru/vRMXM0MbJXK/8fkwJdPC2xSwUPnBPYjIrPFFf41W7yfMXxo3Q99JcMauc+VDLmOi3DigWZDjnTzlIAGGzMum196asTcZNmWPDdTNpuVtEyVlPn8HNHeSZiK7CwPU2SFn5b57a1x4fasyYPF7HlC5++I/c9F7JTem6Ke/wei9TzE2hFGZQfrtHlPsUjfWZR5sFQumcqKZqsmf5bvdSMUarY1UJ8heQQGi5idnPIsFtRpdshpKEQsRAPctj7n1KOYn/93jj0Khv6Kc48S1cJ01pE/+MnHF7KlBc2ZJX2GYy5rq+0ALalJfR+N+dui/q+1qK9pu35MhtUuQpDMg0CzPSt6DHiXoG8Lm4c8s8cxGkNFbVmCKjVFfmwjWiryghBnEHOZWjR5fBOm2kZkPmtmdYsh/ZzJTi2175EtfUvBRCxQs6qmZ3OnkbrbUvVTfkGNJdy08hOXrMrpo6GmJ77glLTZWAqU01V8qC4cPTVz6b+VnIpf1gpo6PfqWYs+9dhY/pAdS5K3QX75BI46F+dnp73zy5Peebt32jtd+WKcr9SEY9GZpvLy47twFAvY+niK2lAUnKOadlsXtW/OFdU0f+R/FiVAwTGYY+BBc0E2VeV8NMcQfjTQh6A1Rvuy+Ibgs/ktG79jMTZM89f2b1fVGB5Co97z2fxt0OBBswn/1mhTLa/+qPoWYP3MIS36N0zzCj6aFg+gDzy4qnVuGe1DHypV+kpK9G2rPNhqSbQeyuHPN54JJqTLxejwo2kljOLydyrAFpcGtX2GodLYKFgsBdMo7d8xHOUT4OgYjqojt4/GBJOjZvPq0XrN2Gp92RRloDR9oK/+PcfB/QNZknzCqF3fViQIFARxKuzjcphqAX048o6uVh/nNXg7OrCEl09rq2itXnB9IDfDvMyJVgrVQS165EjzdXK0u3CVpL+ztpFqvIoKsVJ1zQzBvJrdsLRAqZJs5aXLo2bVUtab/bGk4kUNopd/NvHay786+z8AAAD//wMADsXdaoZWAAA=", "base64"));
  res.end();

  return __filename;
};
