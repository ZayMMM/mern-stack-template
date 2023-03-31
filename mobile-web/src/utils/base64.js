export function encode(str) {
  let buff = Buffer.from(str, "utf8");
  return buff.toString("base64");
}

export function decode(base64Str) {
  let buff = Buffer.from(base64Str, "base64");
  return buff.toString("utf8");
}
