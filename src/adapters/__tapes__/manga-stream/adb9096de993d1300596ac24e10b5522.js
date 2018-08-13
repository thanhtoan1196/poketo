var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/9
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
  res.setHeader("set-cookie", ["__cfduid=db0879b9ddfc4f405af77af5c851c65f41534133119; expires=Tue, 13-Aug-19 04:05:19 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 05:05:19 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d7c39486c70-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeWpqYoyZYfsaWO82oyp03TEzdzezodDUQuRUQgwAKgZJ0z/e93li9RT1tp0urcW2cmIkFgn8DuYrHk9ePnPzy7/fntC4hsLAaPrukHBJPjvoPSoQZkweARAMB1jJaBHzFt0Pad1IbuhVM8stwKHNzArWZcgArhqVAqgE4PXHjLxgiX4ML3TI4ZvLMaWXzt5UNqkCWLse9MOc4Spa0DvpIWpe07Mx7YqB/glPvoZjfHwCW3nAnX+Exgv9NqO+ugAjS+5onlStag/RNZAKFGhDijR0nBJYLgE4Q3TKdWHcNTgcyPjuEHifCWo4/H8CqVFjXclRdMBgRgDrHS2CqxCy4nEGkM+05kbWKeeF7M7vxAtkZKWWM1S+jGV7EXKmldNkOjYvROW+ettucbs9Tcirls+cY4oFH0HWPnAk2EaB3g0uJYczvvOyZiJxen7mwa/k/yW/Kvf73/8dt/nN3eRL2378W3P4Q/vnn1Tj3v3o1efP3j5O3ds5uX4s0LnKoXr07eibbho/f+Dz++l28c8LUyRmk+5rLvMKnkPFapcQaParxlhHCfJJqz6YVsSvct7isH7DzBvsNjNkbvzs37eYPV8SZS2vqphb0BZZDKv7q0PWYMWpOJMNOryaYZSe+by8uTi85lt3162VmXZE5cTuFj14VXt99/1wMT8fgYQqXh9Ysz9wJMmtCkpJmdd0CBMUprwHUH1eBfeAjCwusXcPlr0ZrPQDDaX9D4wXi0zHom4tPWB+MMrr28WwnpF5QBD38l0EtQcqFYvLPeBzZleWvBAf3NuAzUrOXHyW2EMUIf/rMksBHzJ2OtUhk8gaMvwhP6d3S81CXRPGZ6Ts9PLs4vfX/z81u8sxmMMFzpYNBXMihA9Hq9bY9LCP4aCuLvOy4n9PT8/HzlacCnPEBdDq2e/Z5LqpLk8kypq6FcmKYludUqYfNsPbLAuCetD+abaf+s03G2CXtFV15uHx8=", "base64"));
  res.write(new Buffer("XY9UMKffgE+BB31HIwtQu5JNS9tAT3zBjOk7kk1HTEP+4wYYslTY8jYfWVPr+kg3qve5HqXWKllQnN84KwOsGo8Fgq+EYInBwIGAWVY0952yvWxmekw2/ovYuDkAB5jmzMW7hMkAg74TMmGwTqRJmCyRGu0qKebO4DZHK9mUjxkZ4muP+m0ZRsvcJWSDz9ft2ssFVNyxFTmNNJNBZZJoKBs8uvYCPi2VW/QvJVZqbSFB0v5CbgWeVNQQlWMWk6MwZ4NrtkD9SsVI6K89wZd6lZACrZJAzWQNRsFTDuMLZ7Vnoe8V5S/gZL4xd9PXo4pTpjGb+KNcGku4FnxVOGKU6QpJ6+xlNtpj1jJ/MlRyaLll0hncZA2gJNxSwzr7u6CNUBvUE2fwNL/Yb3Sg2VjJ4YgJMTRpQqvredYET5kQ8I6a9oMYMT6Zp6kzeJVfPH687/gPPMahVEOeJIrA0D1IBa+TRO0HK54PI9RqyHwWYMyZM/h+Dq9QK7gpWvaDpyQOE4qMnEEVJO0NIUmlHw1jUnwGhG5p+u0HSOIUtaBlO3irVcwNBvCmbNsPlInUJB3jhJPQjUpj5gzelW0k+HfUth9MG+HQ4BTlMEAWiPnQcGmcwW2E8I6a4XnWDO+4NHtCVpO5Go4jlQqNZGsncwXf0u0TvVsZ1ZrNnanzcKTO4GUqBHzHjd2M4dpLRc1ardquGrwiIvdYkgjuZ96BLJCvU24pttpo+zaM95VQ2hk8o59ss7EixgVFW61w5Xr5OLJbTXIRBGbyqkQYMgiZO7I+CZEP4LmSzO622yy1kTtO0dgVQxyrgIlVFyzUmEs3f7QgZhGSPLlyBt9Rn0+IU+OYG4v6HrT/LLo9yEtBRgL9h9KSvjFYd1zFGFhzWJVH2+K5ljz/MDWoaQ9Yuf7P7c4MWsvl2DiDd8XVA5fykkBL3EKNVWoztar049bZkt6nqHnIN8l7BxFSWR4W67JUwwZmVhcCCuEqWBpMbUX8GPEgQNl3rE4xXzDrEDHeSIKvUpnpDeNVSbBNgsgFlIdu2c7Oa0k2reK0xcYtD+42xXgx49KlwJ4SIbV2k442x/X5A3emWZJsDeHJbmklzKo2al1GVrq0UUuAroqthB+xxC5BXV84IyuzIeWW4oGBX7W81mGvhdW5Ct07A8WViZ21zE+57Dq9e+FV63E5lN+o3Y9Yp/v+La9r7bGhJc6GKhyOiDPv5MTrdXs9r7NidCq5OIOTE3DhNQRKHlmQiAHMVVowuDRmyg0fCSwGlT22Wo5P+Xc/n12v1+12dvLZBRfeK+4jcAk2QrAR9ydo7+W1e2C8drxe57y7k9cOuHCjFYV/9zDXOTDm2l6v09utyDZNWBlggjJASaH8PTy2D4vH7qXX63R2LsoupaBvQsrdvvMjpQTcBEqg8Ynfb+5juHt5YAxfeL322cVOhi+IYTBcUgrGWEzuZfLiwJg893rtXnsnk+fgwnOl9L28nR8Yb2der93daXK6Z+DCU5R+dC9zZwfGXM/rtdtnO5mjo6FnmtNWQMBbjcak+l670+0dGKOn3ull73Qno6fgwkt2v03tnn4W3h6+3YdtWboVru/NAcDa/gQWgfZS030xb8LG+KCAtziX+EQBb3FkuUk+Bxy6frZZ3ul5p2e5rXrJtbG5fBqd5p+zCv9yvk+dQcbx6Z/L74Pp6xX09Q6UvrOCvrMDpe+8oO/8QOm7KOi7OFD6Lgv6Lg+Uvk67ILDTPlQKOyWFnUOlsFtS2D1UCk9KCk8OlcLSkXQO1ZN0SlfSOVRf0imdSedQvUmndCedQ/UnndKhdA7Vo3RKl9I5VJ/SLQ==", "base64"));
  res.write(new Buffer("fUr3UH1Kt/Qp3UP1Kd3Sp3QP1ad0S5/SPVSf0i19Svf0v2c39nDuzpzBd6zacXbP9txy3puFWL1d7M4p9aB37MpreZVE45RnpbIPDee/EkzrK0p7TffXWg2zxDvrPDwIfoN3Fr7ShHs32lrNxPLxKKxkbWLDIDbMPe9eDC/bZfEbK/M3zIaUH6lkTAexm2C4tdqKiqBXzCKwwMAotWAsFwJmTFqwCiIUCaTmG3iKvooRGGws06guidvHj1YUntXX1gnRauaGIuUBkPKzY9wNh7xbclJQP1G/TxHXPB7nsqIMW57mgqJK2OPxuLVUw6xizw9kkY3rnF7mcNoXrUSOqSx6KdG0mbANKjtpt4dn7XWdGR7gktJW1srGk/It0yBUispIRrVp8GhbTfQo5SJYqYe+r/L5y4bzRU2EzZaS2HCEYoFzDGEqfSodaDSLOugp06DC0KCFPnzZOKoNPWq28ieNZktgaOHr9Q7ZqweNJnwNnfbVo9+bLXpJoLGGhYcNG3FDaksEWmzCl1lDs0V0NZo09OrRoy8bebl2s6XR8H9jYyO5s02UFoRcfXqmVvG2ymKFVawrz5i1unGUldUfHR/FTFPNEqF84h593Zh53ebXR8ndUck76a1VVFE0WwmXEoNGzvSIytPNEzhtH4PnwSxCSQt+lK9zY7k/mWcdja+VEFyOn0DeNVGGk/wgSDWX46JD1jdWIy7wCWRFy9TXUJVcUJX1589z2mol5EsznCqhIGQBOmDZiMsA7/qOS28UqCy1zJlQ43zmL5VsrZs7anfL/sVo5adU87alZCQfUhS87agbyftFqwXkVdddheK+UFX9d8BNzCuARe2OYCN6d+JZ1q84xthQ1POV5TGaq+oso15uvURMdLpMdvZCUFb0RG+3qLwOOX9bCJiflf9ce9HpXocKOeSihGeNgqQqFZeh2mLSn2dFHBGbIhC/OR0wR/vNtvqpxQywyi0r6ZzBM43kz5TMigNBqtkxcHtk8neR6HWi31LuTx5vOEZIVl5nyFpDpeNawRiXLrU4INWUCR4wi1RAVV5vc1g1WdHw/ARmZ9RDs4DejOk7GDMunMEL+rn2sgc7BnKZpKUhz0cuIS6MSV18Ra9EMB8jJQLUfednlWoohYoBZH2ABQEdINLbPb+lnNq9HZTUj3AKTForvYbaLaE5gwxtjoubCssxJAKZQQgpNlHEXsQNhBxF0Np2KrRl1n4SjSTMmJnSVAldXO2nl2r8fapZdFzSztuq+VMpokRU00WJ5FNq4l5VbJsnWUNWzJ3NDq+klyq+AGU+SQOFhqxIzKwfAZNzG5GD4hLy2ewrHZhj8CP0JzRQQ4CWcWFaO8lbsuYmHcXcOlsKAes0j6wsrezCOu8OZ3cYuFDpsbLO4DXkVxDPIakm36YDUI8m1UYrvtWM452lgl6x8yh4rNRYoCsYvUaQU7nStKmGebWANR9SFHN/m91sZoMtxvk4UmqyF5pyUIHoZXF7Dyo745bi6X0wFWMKRLf53Xrl89Zt8XLU/7Eh0WpF+d9R0X5R0U0ReOQl97p4l+5Pj4a+ZxOyXLVISMmlQI2MLuVrKJ5BZuYtyFxn2VugNZlp9FVMmqXhGjPTbeArFidXIHFmjjciJ5jZWCYpgJ/lprKM4UdzMOmI1sGISGywwM0iqxp1j5stuBG0zZ2vRnQ7o7lq8lrlZobPGRTuRmRmNKv0AC6NRRa0HhrALd4ULaDvsHL097NKgWkENsr8m4Ls9WdGnk5TxkLbORjlcyYgxoCzSuhWASOxboqoW/CD9JEkuRFnzCaYFfYW3Y8rBaQGC/lvQVmIhqTCpA==", "base64"));
  res.write(new Buffer("FfOyRDhMbaqxBa/DrVjZko42kX1cgqc5kcmBQG8kJdQqLigtXs3YpKHNbnYpyK709GfH2Yu3WX4qrvaL6ihtsiWii9mdQDm2Ud/pXuSTvcK2HNo9R5PFc+VjaCTpSHBfzIE+2cBGApsfEfYtJv8itCpRuKnkv5HxvI2YXSDmppoglk1QtuBtvhipqtfQLIgxD7ACHoaoUdqdIeB+NC3i0J9qBP3hOHQ/Isa2NhkgTo2FEQIj+0rG9yT7SgfzLWoDQsnxJ0QtllD7TEqVIafPYICNmITuxWdEz0QSMZnGyzTQRzzm2Sc+GNmEog9q7tdJaTD335nBaLuXzb9kf/b5dsyb9srvySZ91A65CgUoz+6OhPIn9I7PtAawNumhMVfpkRA0DQw5dQb5G2f5m1uZfSZ5J39gAuQb8iWDUNFRWgNmMgdgMYAZtxGwhQGo3N0fnomrmYGtUvn/mBz49GmBTSr43DmB/YjIbHGFf80W72cMP7fuh76SYY3cZ0qGXMfFduIzzYYc6eYpAQ02Zlw2P/XUiLnJsi15bqZsNitpmSop8/E5or2TMBXZWR6myArflPntrfvC7VmTz7ZnzxM6f+/Y/9iOndJ7U9Tzv2C3nm+xdmyjspN1ct5TLNJ3FmW+WSqXTGVFs1WTP8t93QiFmm3dqM+QIgKDxZ6dgvJsL6jT7JDT0BaxEA1w2/qYU49ifv7fOfYoGPozzj1KVAvTWUf+2U8+PpEtLWjOLOlTHHNZW20HaElN6vtozN8W9b/Won5L7voxGVa72IJkEQSa7VnRY8C7BH1b2DzkmT2O0RiqassSVKkp8mMb0VKZF4Q4g5jL1KLJ9zdhqm1E5rNmVrcY0o+Z7NRS+6Dd0sc4TMQCNatqejZ3Gqm7LVU/5Sf4WMJNKz9xyaqcPhhqeuILTkmbjaVAOV3Flw7D0Y2ZS/+15FT8slZAQ38vn7boW6GN5S8hsiR5HeSXT+Coc3F+dto7vzzpnbd7p73TlU8O+kpNOBadaSovP74LR7GArY+nqA3tgnNU027rovbRwqKa5vf8Z1ECFByDOQYeNBdkU1XOB3MM4QcDfQhaY7Qvio9QPp3fsvEbFmPDNH9p/3pVjeEhNOo9n85fBw0eNJvwH4021fLq96pvAdbPAtKif8M0r+CDafEA+sCDq1rnltE+9KFSpa+kRN+2yoOtlkTroRz+9M4zwYR0uRgdfjCthNG+/I0KsMWlQW2fYqg0NgoWS8E0Svt3DEf5BDg6hqPqyO2DMcHkqNm8erReM7ZaXzZFGShNX3isfxB0cP9AliQPGLXr45wEgTZBnAr7uBymWkAfjryjq9XHeQ3ejg4s4eXT2ipaqxdcH8jNMC9zopVCdVCLHjnSfJ0c7axcJeHvrm2kGq+iQqxUXTNDMK9mNywtUKokW3lr96hZtZT1Zr8vqXhRg+jl39289vLvF/8vAAAA//8DANljgwnQWAAA", "base64"));
  res.end();

  return __filename;
};
