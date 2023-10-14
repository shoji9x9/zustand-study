import { url } from "inspector";

export function getCookie(key: string) {
  const cookie = document.cookie;
  const cookieItem = cookie.split(";").find((item) => item.includes(key));
  if (cookieItem) {
    return cookieItem.split("=")[1];
  }
  return null;
}

export function setCookie(key: string, value: string) {
  document.cookie = `${key}=${value}`;
}

export async function putCookie() {
  const url = "http://localhost:3000/api/counter";
  await fetch(url, {
    method: "PUT",
  });
}
