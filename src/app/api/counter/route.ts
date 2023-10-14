import { cookies } from "next/headers";

// TODO: Cookieを利用しても同じことが実現できないか今後試してみる
export async function PUT(requets: Request) {
  const count = cookies().get("count");
  console.log("count", count);
  cookies().set("count", "0");
  return new Response(null, { status: 200 });
}
