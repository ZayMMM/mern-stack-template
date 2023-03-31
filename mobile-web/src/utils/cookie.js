import { setCookie as setNookie, destroyCookie, parseCookies } from "nookies";
import { encode, decode } from "./base64";
import { APP_COOKIE_MAX_AGE } from "../config/app";

export const COOKIE_MAX_AGE_MONTH = 2592000;

const cookieOptions = {
  path: "/",
  sameSite: "Strict",
  secure: process.env.NODE_ENV === "production",
};

export function setCookie(
  res,
  name,
  value,
  maxAge = APP_COOKIE_MAX_AGE,
  httpOnly = false
) {
  setNookie(res ? { res } : null, name, encode(value), {
    ...cookieOptions,
    httpOnly,
    maxAge,
  });
}

export function readCookie(name, req = null) {
  const cookies = req ? req.cookies : parseCookies();

  return decode(cookies[name] ?? "");
}

export function removeCookie(res, name, httpOnly = false) {
  destroyCookie(res ? { res } : null, name, {
    ...cookieOptions,
    httpOnly,
    maxAge: 0,
  });
}
