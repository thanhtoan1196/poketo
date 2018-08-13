var path = require("path");

/**
 * GET /manga/shokugeki_no_souma
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:18 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d9fb98421f2e30ca31c49073684e8e4411534133118; expires=Tue, 13-Aug-19 04:05:18 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("expires", "Mon, 13 Aug 2018 04:06:18 GMT");
  res.setHeader("cache-control", "max-age=60");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d7558eb92d0-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8/XPbNrK/56/Y8ObV9jxTlGU7thNJHeeryV2bpLXbe+1NRwORSxERCDAAKFm9u//9zYIfIiXKjtOk9z7OmYlIENhd7i72CwCHD5+/fXb987sXkNhUjB8M6QcEk7ORh9KjBmTR+AEAwDBFyyBMmDZoR15uY//cKx9ZbgWOrxI1z2c45yAVXKk8ZfAdkzMGfvl7ZTWydBgU3RtQJUtx5C04LjOlrQehkhalHXlLHtlkFOGCh+i7m0PgklvOhG9CJnB01Ot726AiNKHmmeVKNqD9gCyCWCNC6uhRUnCJIPgc4Q3TuVWH8FQgC5NDeCsR3nEM8RBe5dKihpvqgsmIAKwgVRp7FXbB5RwSjfHIS6zNzOMgSNlNGMneVClrrGYZ3YQqDWIlrc+WaFSKwUnvrNcPQmNazb2Uy15ojAcaxcgzdiXQJIjWAy4tzjS3q5FnEnZ8fuIvF/F/ZR+yX3756ftv/vLo+jI5ffeT+OZt/P2bV1fq+eBm+uI/v5+/u3l2+VK8eYEL9eLV8ZXoGz79KXz7/U/yjQehVsYozWdcjjwmlVylKjcdjJ0pNRPoG27RX6DmMQ/ZBpe/vYomi5dP//wsxkn+Qrz563c/Hpuf/3z1y81fnsnZnC1WL64Hr18ev/rttQfBNgoWLVBbvgv8IGbn8cVRvx+fHsWP8KTPTgcX00cnbBD3TwaD2Bs/aAjEcY+HBKGQTRCzBd33eKg8sKsMRx5P2QyDG7/oF4w3x5tEaRvmFn4HIDdor9IMErXpFcxkGTdOLUJjvo5ZysVq9IOaKqsen/T7hxf9/uFZv3941O/vOXL21sqwV+Dds3hjafhegbH6a+pkwIxBa5yiOe03bjKSjn19cXF8fnQx6J9cHG3rWwGyeJOHvg+vrr/79hRMwtNDiJWG1y8e+edg8oymLqi47IACU5TWgO+P68F/4zEIC69fwMWvZWsxT8HocE3jexOQITo1CV/03htvPAyKbhWkv6GMePwrgW5BKaTguPGeLVjR6q2ZsuQyUstemGbXCaYII/h7i2FTFs5nWuUyegx7f4qP6d8=", "base64"));
  res.write(new Buffer("3mGrS6Z5yvSKnh+fn12EYffza7yxDkYcb3QwGCoZlSBOT093Pa4ghFso6P2+5XJOT8/OzjaeRnzBI9TV0PrZPwtO1Zxsa0pTDJWSmp7kVquMrZx6ssj4x7335uvF6NHRkbeL2RuyCgoP8mA4VdGKfiO+gFAwY0YePUINCY8ilP5NbW8aXWjaMy5RN6TYfJ4aX6iZ8sZDVik6kcDGwyDii+4xeGM18yVbeBvTJRfthnIOrWFXnLFLbi1qx5a0mEgWWeqNh7xCEjOImV929M2HnGkkynhJneAfiWu5XPZiFuJUqblD6Hxp4Ur9wcnx+cXp4PTR4Ow02EZfjfsI/MOg+fYN7pWX5c+DbuEAj0ZeqfoNzg4lqztLtpgyDcWPH2HMcmF3SLUG7Mci59GmnBo9S3CFJlVYp7m1SpYKWtx4GwOsms0EQqiEYJnByIOIWVY2EwFFe9XM9IyCnj+lxi8AeMA0Zz7eZExGGBHDhcHm65iMyQqp0b6SYuWNrwu0ki34zDm2YUD9dgwjN+ITsvGX6zYMCgaVd2yDT1PNZOS1p9YOXSg4Vgl4zUFSjTXfSjy5aCCqxrSnZGs2BN74lUpxW3eHotb5SKssUku5qS4VjD95mz1LeW8Ifw3HBYxF7Dqc1m/KNDo7Ny24sWFCtnCkKHPvjsleuOSAWcvC+UTJieWWSW986RpASbimho80HSW0KWqDeu6NnxYX9xsdaTZTcjJlQkxMntHseu6a4CkTAq6o6X4QE8bnqzz3xq+Ki4cP7zv+PU9xItWEZ5kiMHRPycbrLFP3g5WuJglqNWEhizDlzBt/t4JXqBVcli33g6ckTjJKF7xxnTncG0KWyzCZpCR4B4RuSf3uB0jiArWgaTt+p1XKDUbwpmq7HyhTZXTEdEMZndeR5d0Ppk1wYnCBchIhi8RqYrg03vg6QbiiZnjumuGKS3NPyGq+UpNZonJBvu6abuEbun2sbxdGPWeL2Mn7eKTe+GUuBHzLjf04v7phuxrwygwnYFkmqrRn/AOGOueWQulO29cxPlRCaW/8jH7gHZvhBhvXFO20wtWl5rPE7jTJZczv+LUReExtWAQb8FxJZm+32yy3iT/L0dgNQ5yqiIlNFyzUjEu/eLQmZh2BPn7ijb+lPp8Rp8YZNxTH3Y72h7LbR3kpcCTQfygtyRujbcdVjoEth1V7tB2eq+X5J7lBTcl17fq/tDszaC2XM+ONr8qrj5zKLYZWuCnCz60Tq8o/bZ615F5UFrr4fQsRUtm6HFGJoeNlNicCCuEraA2mtjJ+LFKfkWd1Xkbn2xAx7SQhVLl0csN0kxOsixEFg4rQzSXyQU+yRR2n1Xn6Vvgv2V3hP6SMS58SvLr40ujGBGoL7n9/ybTkclYEhSx07+DnskMgTQiunLJlY/AmFCwtmcF1KOr8Zmfml6IxbLYpt6GxWsnZ+K8IBqUFBs3SE2DKuACrYKXy3jAoOw+nuirwVH8/qxwkYkR9QyVjrlMao0sI0xWEgodzLmdgEyo7yjlw6a5LwmBZkNCDt1KsoGILlJwyEDLZrjYoYyFUaVFqURIayWEPXseEHxK2QLlnQWOIfEHgypc6hDDBcF4QaTKWBu9zOYdYiQh175ZkcF0S6s7JGaSG+WeD88lFv0oAWJmk+czG3paQHvr+jvye+Q0/08L5ilkEFhmY5haM5ULAkklL7E9QZJCbr+EphipFYNDptupLmjMPu16Y/qqZ0UmgVsuqNrkzmRW+Seti+YNhctQZRCVHNL8sm1JeWgwtbtz/vrGaZ/UUGVrdwGYTcBW7smD+GM76/+GNnyUsc+9mk9v6HlPfHw==", "base64"));
  res.write(new Buffer("UCAzGK07D4Mmii2cRUPUsPm6I1wMBmcnweng0Ulw5I0HZyfgwxVKgxwWpgcvuTYWrpCVNt1G2/Av8xkc6+gQBv2j83aXz0XhcXA6OCkpPKbFihW8tQlquFJyN2F/zgUMzmhB4stRNghOB4PTgrIB+HAJz7mxuZ6SDfmJG26VvoPC/pel8Cg4HRydFxQekXSVpBow2bSnaIp6MDfwDUrUZcHjNnKPBneROwzcdKCpklUl5NJ8J6hxzzjcoUozgZaMrLFfdxnt1xI0mgxDZy9oTJZPBTcJanNIdpgKNmA1k0Y4OyMjSMjaMjApJcAyT6eoq5dN6REZWGlpjYzmnXHlcVonMqg5GofWJszCkkwVWWWyxC/kjNDCQok8RSq/u4kIzAItBEGmODmEvyKgDFWuyU2QVbcKZgpUbh1pVf2daJlptbRJRRmXUW6sXsF05SjIch0mzJReyGCJ2AB33mJPIxRWR/XKahrxrOSca3muyJuk3BhgFb0P4ZlzJc2FPqCkcwVLxLmjUVM1xfmamC2U5hZLzpAXnAmlucoN5JKEp9EQExI+S+BDzgS3BfVTjJV2flJjqhZYSLtkeO/BMMjGLfdB8TrELEKPzCiXEd6MPJ+WOZQLmDkTqgxHWonFVhTj2v2qfzlahXm62/AXQ7adQ3e/Vgmz1fW2cmYoVF2ljLghodQ5jIswBZvSgs4z169MCzpCz68sT9E8KdODdlGwRUxy0ibbreW60JwWJlUzAKnClmGQnGyGqC0H282QMp7coiCrw0IZq44OaxWtplhJB6zQfr0ryl9rgFV+le9542caafYr6VJYkGp5CNzumWIZmbT6Q87D+cNtMoNsY43FtcZKp420hkufWjyQasEEj5hFCvOr6x1v1+QVDfdpzSrb0blIgEgLyB6NPBf5eeMX9DMM3INbBnKZ5dW6WjGyhZiUWyvRZF/ZKxMsxMRFkiPvZ5r0FVMxKgNiFkU0zWnJ8UPOqT24hZJmQlti0lrpLdR+Bc0b/7wOvrmpsRxC5kwWxGSGyYDahBuIOYqot1lBv0NrP4tEMmbMUmmq15VX95NLPf4u0aw7tqTzrm7+XIKoEDVkUSH5nJK4UxS79MQ1uJKj046gotc5VpSFkkYKjXN0zIYJ+XGbkNPkEgptDpWOTCuFitAyLkzvVvJa1tzk05TbWnBTK2FqZb061qB5amVlZdfWuRvDRxi4WOmZst74NRRXkK4gq5WPdVjdgJSq04rvNON4Y6nsJLqMeF3aKjeUCEbF7oLKjaauSttmLaAYUpYcv3E33a/B1uPKpdH7oKkGlYhelrd3oKoWge+DqRxTIrou7rbrcxtZ9K5V208NiTbrnv+Oiu4XFV2WgUdRGK4SoD88GvqOuaJTIxJqV4rIJsfMFJkEMrPqgXOdVW+B1jjTWFaaaHgZ9xv4iqXZE5C4NIedyAmmG8skmEQty2pTma9MV2DyKc0Dl9Pus8h3kVWDuocHPbgUlDysNiO6W6O5Wnmt8p3h88aluxHOjLpCKXBpLLKo97EBHAmmBf0WK1cVBZnLqZx/U0XZj5Gn0xFkTNsVGBVyJiDFiLOa6VYBI7Z2RdRUHwxdGtiJM2XzIjEqux/WAsgNlvzfgbJkDXGFSStWVYEyzm2usSopdgu6JaMusg8r8KQTjg8EupOUWKuyeFotJXRJqNvNtoLsWk5/dJy9XnP5sby6X1RHG6t2RHQpuxEoZzYZeYPzQtlrbO3Q7jkaF89Vj2HfVTlCKi5zXFKif/AJYd9a+dehVYXCzyX/QMbzmkodNWJuagWxbI6yB++KyRgmShl0tY4iwIp4HKOmKvhtIQ==", "base64"));
  res.write(new Buffer("4P1oWsehPzYI+t1x6P2ImNmGMkCaGwtTpDoPIbdw7DZXs9CVjoSSs8+IWrRQh0xK5ZDTDmaqSUkYnH9B9ExkCZN52qahKLGVq0hQ9UHNwyYp+8z/zRmMvn9x8C/Jz75cxtyVK/9ENumTMuRsva9SZP5UqHDujS9h0QDYUHrYp2qfEKQGXcteZJ+J39nvUIAiIW8ZhJqOyhow4xyAxQiW3CbA1gagdne/WxM3KwM7ufL/sTjw+csCXSL40jWB+xHhbHGNf8sW388YfmnZT2g1uUHus2JxuUwnvpA2FEi7VQL22YxxefC5VSPlxlVbitpM1Ww2yjJ1UebTa0T3LsLUZLs6TFkVvqzq2zvzwt1Vky+WsxcFnX9n7L8vY6fyHq1e/Quy9cauje40yu13IOe9wLJ8Z1EWyVI1ZWor6mZNaxcKCrXcmagvkSICg2XO7hYgKRfUeUjGxlCKWLIGuO19yqpHqZ//d5Y9yhf6I9Y9KlRr09lE/sVXPj6TLS1pdpb0Kc64bMy2/4GW1ORhiMb826L+r7Wo35C7fkiG1a5TEBdBoNldFT0EvKn2h5Rb54DVO/VcgSo3ZX2sE63EGwsxLiHlMrdoivwmzrXbXNQ0qzsM6aco+60rNB3b0k68W1ZwDI/Q7QffPKK3IfjxG1xCuYXMFALe7tbYbI5Lnzbm7LLzje26oeUL9Fr7kDYOyQRH/fPgdHB2RpuQWtYyy4WotrAfQcRWwGaq0uON9RZj6zNd23tyYeMYTr3l6Kh/vt5bhOn4io6OwqWe5cWGfUzXp+3ueKvm8Y+gf0G75s4efcFXeivRrw+Y1C/UvzhpvdBruELceo8W4THjejWhhc/JUb8/WSHTZvKBdtYH/b57jdNbX4M2+J3ZpHyJlwQNrmmCHvX78DNBg+8J2prGfpvGy5T9RnXDFyLlkt1ObOfhk4CU55R2Kt5F56Oazs7jKjWJg7OzFom0CPCsKLq9pNUNcs8GRVxYkW/V4g4eS5YyPue/sTnTPOifPyJyj+9B7psmgDUnzx+1yPT928mgQ04mUTZ4pSxRMLgHBXSg6SpRazG+UraFfLqCyznXDC5TJtUd/KiOMwX9Czf5j+6k5LQluu2DUY0p0J7T126JguZ1uaFuSiEL7WJv0wgf8dc+pNBpoRv3DRtf3CfVHshYKYvNDcDZ+KtQZasnbutkK2f4B2yfEMo0X7BwRefD3AW8U4KHK7ce1uyvjfHGP1xdwUvE4uRYsRfQbYAcl/X75s5DOl2htKFVvfY2w3qToVN4FcfcrfnQxvScHGOCzo2uiqWyBePC7UHkZVojFH3rg0JUh7l2jhQVFpyo3d+DeoWudVrCJCxSy3rfeXenqbqpezzoPBLvvtVQbDZwZ7HfG2p6HApO6xXtTxUMm+fgyy8PxNNLs5Lha8ktjCDOpfP/+weN7xC8fNqjL5zst79MwLLsdVRcPoa9o/OzRyenZxfHp2f905PTk41PAIRKzTmWncnmtx/fxNNUwM7HC9SGCsAFqsWgd974iMDBE3f9z+Jnv36D6BDMIfDoYE32gml4bw4hfm9gBFFvhvZF+VGIp6trNnvDUtw3B3/r//qkHsNj2G/2fLp6He3z6OAA/q7R5lo++WfdtwQbulpM2X/fHDyB96bHIxgBj540OveMDmEEtShDJSWGdn22XqINUE5+vApMNCdZrkfH700vY1SSfqMi7HFpUNunbivqfvmKFWP2q9D/EPYKBdg7hL16t8l7Y6L53sHBkwdbirL1DYwFykhp+uJC8wMd47sHsiz7iFG3fSyDILgjLLMene2Z5FrACPaCvSebj7VLTm7pwA==", "base64"));
  res.write(new Buffer("Ml49bcyiXusbJCrtGMjNJFVTLugzHe50/ZMHm5+wGAbFVyWGQfH9ov8GAAD//wMAaq9EX9BIAAA=", "base64"));
  res.end();

  return __filename;
};
