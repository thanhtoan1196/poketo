var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/19
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:20 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d68e63b5997502258f01fd0b1d98be4d61534133120; expires=Tue, 13-Aug-19 04:05:20 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 05:05:20 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d804c529619-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8+3PbNtK/56/YsJ1ampqiJFt+xJY6zqvJXJumZzdzvU5HA5FLEREIsAAoWXfT//1m+RL1tJXGPX/fVZmJSRDYNxa7wJKXT1/+8OLm5/evILKxGDy5pD8gmBz3HZQONSALBk8AAC5jtAz8iGmDtu+kNnTPnOKR5Vbg4ApuNOMCVAjPhVIBdHrgwns2RuicgwvfMzlmcG01svjSy8fUQEsWY9+ZcpwlSlsHfCUtStt3ZjywUT/AKffRzW4OgUtuOROu8ZnAfqfVdtZBBWh8zRPLlaxB+zuyAEKNCHFGj5KCSwTBJwjvmE6tOoTnApkfHcIPEuE9Rx8P4U0qLWq4LS+YDAjAHGKlsVViF1xOINIY9p3I2sQ887yY3fqBbI2UssZqltCNr2IvVNK6bIZGxegdt05bbc83Zqm5FXPZ8o1xQKPoO8bOBZoI0TrApcWx5nbed0zEjs6O3dk0/EfyW/LPf3748du/ndxcRb33H8S3P4Q/vntzrV52b0evvv5x8v72xdVr8e4VTtWrN0fXom346IP/w48f5DsHfK2MUZqPuew7TCo5j1VqnMGTGm8ZIdwnieZseiGb0n2L+8oBO0+w7/CYjdG7dfN+3mB1vImUtn5qYW9AGaTyV5e2x4xBazIRZno1mZmR9L45Pz8665x328fnnXVJ5sTlFD51XXhz8/13PTARjw8hVBrevjpxz8CkCRklmXbeAQXGKK0B1x1Ug3/hIQgLb1/B+a9Fa26BYLS/oPGj8Wie9UzEp62Pxhlcenm3EtIvKAMe/kqgl6DkQrF4a72PbMry1oID+s24DNSs5cfJTYQxQh/+vSSwEfMnY61SGTyDgy/CI/p3cLjUJdE8ZnpOz4/OTs99f/PzG7y1GYwwXOlg0FcyKED0er1tj0sI/hoK4u87Lif09PT0dOVpwKc8QF0OrZ79nkuqkuSypdTVUE5M05LcapWweTYfWWDco9ZH8820f9LpONuEvaIrL3eQTy4=", "base64"));
  res.write(new Buffer("RyqY09+AT4EHfUcjC1C7kk1L30BPfMGM6TuSTUdMQ/7HDTBkqbDlbT6yptb1kW5U73M5Sq1VsqA4v3FWBlg1HgsEXwnBEoOBAwGzrGjuO2V72cz0mJz8F7FxcwAOMM2Zi7cJkwEGfSdkwmCdSJMwWSI12lVSzJ3BTY5WsikfM3LElx712zKMprlLyAYP1+3SywVU3LEVOY00k0HlkmgoGzy59AI+LZVb9C8lVmptIUHS/kJuBZ5U1BCVYxbGUbizwSVboH6jYiT0l57gS71KSIFWSaBmsgaj4CmH8YWz2rPQ94ryF3CytTFfpi9HFadMY2b4o1waS7gWfFU4YpTpCknr7GU+2mPWMn8yVHJouWXSGVxlDaAk3FDDOvu7oI1QG9QTZ/A8v9hvdKDZWMnhiAkxNGlCs+tl1gTPmRBwTU37QYwYn8zT1Bm8yS+ePt13/Ece41CqIU8SRWDoHqSCt0mi9oMVz4cRajVkPgsw5swZfD+HN6gVXBUt+8FTEocJRUbOoAqS9oaQpNKPhjEpPgNCt2R++wGSOEUtaNoO3msVc4MBvCvb9gNlIjVJxzjhJHSj0pg5g+uyjQR/TW37wbQRDg1OUQ4DZIGYDw2XxhncRAjX1Awvs2a45tLsCVlN5mo4jlQqNJKvncwVfEu3z/RuZVRzNl9MnfsjdQavUyHgO27sZgyXXipq3mrVd9XgFRG5x5JEcD9bHcgD+TrllmKrjb5vw3hfCaWdwQv6k2UbK2JcULTVC1dLLx9HdqtLLoLATF6VCEMGIXNH1ich8gG8VJLZ3X6bpTZyxykau+KIYxUwsboECzXm0s0fLYhZhCTPLpzBd9TnM+LUOObGor4D7d+LbvdapSAjgf5DaUnfGKwvXMUYWFuwqhVty8q1tPIPU4OacsBq6X/o5cygtVyOjTO4Lq7uOZWXBFriFmqsUpupVaWfNs+W9D5FzUO+Sd47iJDK8rCYl6UaNjCzOhFQCFfB0mBqK+LHiAcByr5jdYr5hFmHiPFGEnyVykxvGK9Kgm0SRC6gPHTLMjuvJdm0itMWiVse3G2K8WLGpUuBPe2E1NpNOtoc1+cP3JlmSbI1hCe/pZUwq9qodRlZ6VKilgBdFamEH7HELkFdnzgjK7MhZUpxz8Cvml7rsNfC6lyF7q2B4srEztrWTzntOr074VXzcTmU36jdT5in+/6W57X22NASZ0MVDkfEmXd05PW6vZ7XWXE6lVycwdERuPAWAiUPLEjEAOYqLRhcGjPlho8EFoPKHls9x+f83c1n1+t1u52dfHbBhQ+K+whcgo0QbMT9Cdo7ee0+Ml47Xq9z2t3JawdcuNKKwr87mOs8MubaXq/T263INhmsDDBBGaCkUP4OHtuPi8fuudfrdHZOyi5tQV+FtHd77UdKCbgKlEDjE7/f3MVw9/yRMXzm9donZzsZPiOGwXBJWzDGYnInk2ePjMlTr9futXcyeQouvFRK38nb6SPj7cTrtbs7XU73BFx4jtKP7mTu5JEx1/N67fbJTubobOiF5pQKCHiv0ZhU3+l3ur1Hxuixd3zeO97J6DG48Jrd7VO7xw/C2/3Tfdi2S7fC9Z17ALCWn8Ai0F5quivmTdgY7xXwFucSnyngLc8sNwnoEceuD2bmnZ53fJI7q9dcG5sLqNFp/jnT8K/f/8bv/nZ47AzyOXr851rg/SnslRT2HiuFJyWFJ4+VwtOSwtPHSuFZSeHZY6XwvKTw/JFS2G0XFHbbj5XCTklh57FS2C0p7D5WCo9KCo8eK4XlmtJ9rGtKt1xTuo91TemeOIPvWBUfdk/2DBDvTBpWbxexNGUKeg==", "base64"));
  res.write(new Buffer("RwxdS4MSjVOeVbbd28l/JZjWF5SmTvcXfQ21xFvr3N8vvsNbC19pwr0bbe2Mc/k4A1ayrNgwiA1zT7tnw/N2WazCynyL2ZDSmUrIdHCyCYZbOwutCHrDLAILDIxSC8ZyIWDGpAWrIEKRQGq+gefoqxiBwcZj1eqSuH36ZEXjWT1cnRCtZm4oUh4AaT87dtlwKLMlh4T6Cdhdirjk8TiXFWXEeVoKRVWfx+Nxa6nmUMWeH8gie+4cn5dLcSuRYypjXMoLNxO2QWVH7fbwpL2uM8MDXFLaymTZeLK1xQxCpejYd1QzgyfbahhHKRfBSv3iXZWKXzacL2oibLaUxIYjFAucQwhT6dNRX6NZ1C1OmQYVhgYt9OHLxkFt6EGzlT9pNFsCQwtfr3fISoUbTfgaOu2LJ783W1TU21jDwsOGjbghtSUCLTbhy6yh2SK6Gk0aevHkyZeNvLyy2dJo+L+wsZHc2SZKC0IuPj9Tq3hb5eHiKtaVZ8xa3TjIymAPDg9ipqnGgFA+cw++bsy8bvPrg+T2oOSd9NYqTj2brYRLiUEjZ3pE5aTmGRy3D8HzYBahpAk/yue5sdyfzLOOxtdKCC7HzyDvmijDSX4QpJrLcdEh6xurERf4DLIiQ+prqKolqMpw8+c5bbWSzyULp8oFCFmADlg24jLA277jUgWwyraCOBNqnFv+UonFurujdrfsX4xWfko1KluOePMhRYHKjnPevF+0WvBZdd1V2OkLVdVrBtzEvAJYnLULNqJa5xdZv2LbccMh/FeWx2guqr3HennkEjHR8TLZWQF/VqRA1egqrxvMq/uB+dlx/aUXHe+1CZhDLo7c1yhIqtJOGaotLv1ldugasSkC8ZvTAXO032yrd1hYgFVuWfniDF5opPVMyayYB6SaHQK3ByZ/d4DK/39LuT95umHXL1kpP85aQ6XjWoEHly61OCDVlAkeMItU8FBeb1uwarKi4fmO6c6wh6yAKtn7DsaMC2fwiv5cetmDHQO5TNLSkecjlxAXzqQuvqJXIpiPkRIB6r7zs0o1lELFALI+wIKANvypGv+3lFO7t4OS+o5rgUlrpddQuyU0Z5ChzXFxU2E5hEQgMwghxSaK2Iu4gZCjCFrbNnG3WO1n0UjCjJkpTZWLxdV+eqnG36WaRccl7byvmj+XIkpENV2USD6nJu5UxTY7yRqy4svMOrySXqrQAJS5kQYKDXmRmFk/AibnNqIFikvIrdlXOjCH4EfoT2ighgAt48K0dpK35M1NOoq5dbYU7tRpHllZetmFd94dzu5wcKHSY2WdwVvIryCeQ1IZ36bzCo+MaqMX3+rG8dZSAZ7YeXQzVmos0BWMyn5zKleaNtUcrhac5UOK4stvs5vNbLDFOB9HSk32QlMOKhC9Lm7vQGVn3FI8vQ+mYkyB6Ca/W69U3JoXL0f9nxoSrVaA/hUV7RcVXRWBR14iq4t3X/70aOh7NiHPVYuElFwK1Mjp0oYNxTPIzLwF2dJZ9hZoTeYafRWTZmm4xsx1G/iKxckFSJyZw43ICWY2lkkK4Ge5qyxj+NEcTDqieTAiEhsscLPIqkbd02YLrgSlufPViG5nNFcZr1Vu5vicQbHciMyNZgezwKWxyILWfQO4xZtdBfQdXo5+P6sUmEZgo2x9U5C9rshopdO0Y6HtHIzyORMQY8BZJXSrgJFYN0XULfhB+kiS3IgzZhPMCvGK7oeVAlKDhfy3oCxEQ1Jh0op5WdIXpjbV2IK34VasbElHm8g+LMGTTWRyINAbSQm1igtKi1LqTRravMwuBdmVnv7sOHtRff5TcbVfVEfbJlsiupjdCg==", "base64"));
  res.write(new Buffer("lGMb9Z3uWW7sFbbl0O4lmiyeKx9DI0lHgvtiDvSKNRsJbH5C2Lcw/kVoVaJwU8l/I+d5EzG7QMxNZSCWTVC24H0+GakKz5AVxJgHWAEPQ9Qo7c4QcD+aFnHoTzWC/nAcuh8RY1szBohTY2GEwMi/kvM9yl6rZ75FbUAoOf6MqMUSap9JqTLk9No62IhJ6J49IHomkojJNF6mgV66n2ev5DPyCUUf1Nyvk9Jg7r8yh9F2z5v/lfzs4TLmTbnyB/JJn5QhV6EA7bO7I6H8CdXkT2sAa0YPjblKD4QgMzC0qDPI3xDJ37TI/DPJO/kDBpAn5EsOoaKj9AbMZAuAxQBm3EbAFg6gWu7+sCWu7gxslcr/4ubA598W2KSCh94T2I+IzBdX+Nd88X7O8KF1P/SVDGvkvlAy5Dou0okHsoYc6WaTgAYbMy6bn9s0Ym6y3ZZ8b6ZsNivbMtWmzKfvEe29CVORne3DFLvCV+X+9ta8cPuuyYPl7PmGzl8Z+x/L2Gl7b4p6/l/I1vMUa0calZ2s0+I9xWL7zqLMk6VyylReNJs1+bN8rRuhULOtifoMKSIwWOTsFJRnuaBOs0NOQyliIRrgtvUppx6Fff7/OfYoGPozzj1KVAvXWUf+4Ccfn8mXFjRnnvQ5jrmszbZH6ElN6vtozF8e9f+sR/2Wluun5FjtIgXJIgg023dFDwFvE/Rt4fOQZ/44RmOorC3boEpNsT+2ES2VeUGIM4i5TC2aPL8JU20jcp81t7rFkX6KsVNL7QNUSy/Pm4gFalbV9GzuNFK3W6p+yk9msYSbVn7iklU5fTTU9MwXnDZtNpYC5XQVXyYLR1dmLv23klPxy1oBDf1eP2/Rt/0ay18uY0nyNsgvn8FB5+z05Lh3en7UO233jnvHK58I85WacCw6kykvP74NR7GArY+nqA1lwTmqabd1VvvIWFFN83v+Z1ECFByCOQQeNBdkU1XOR3MI4UcDfQhaY7Svio/GPZ/fsPE7FmPDNH9p/3pRjeEhNOo9n8/fBg0eNJvwb4021fLi96pvAdbPAtKif8M0L+CjafEA+sCDi1rnltE+9KFSpa+kRN+2yoOtlkTroRz+dO2ZYEK6XIwOP5pWwigvf6cCbHFpUNvnGCqNjYLFUjCN0v8dwkFuAAeHcFAduX00JpgcNJsXT9Zrxlbry6YoA6Xpi2z1D/gN7h7IkuQeo3Z9TI8gUBLEqbCPy2GqBfThwDu4WH2c1+Dt6MASXj6tzaK1esH1gdwM8zInmilUB7XokSPN58nB7tJVkv7u4kYq8ipKxErdNTMM88q8YWmGUinZymt2B82qpSw4+31Jx4siRC//UN6ll39x9D8AAAD//wMATX9n9IJUAAA=", "base64"));
  res.end();

  return __filename;
};
