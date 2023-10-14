import { AddButton } from "@/components/client/AddButton";
import { Display } from "@/components/client/Display";
import { ResetButton } from "@/components/client/ResetButton";
import { SideMenu } from "@/components/server/Sidemenu";
import { cookies } from "next/headers";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const count = cookies().get("count")?.value || 0;  // TODO: Cookieを利用しても同じことが実現できないか今後試してみる
  const count = Number(searchParams["count"]) || 0;
  return (
    <main className="p-24">
      <h2 className="text-xl">Server Component Page</h2>
      <div className="flex mt-10">
        <div>
          <SideMenu count={count} />
        </div>
        <div className="ml-10"></div> {/* Spacer */}
        <div>
          <AddButton />
          <div className="mt-10"></div> {/* Spacer */}
          <ResetButton />
          <div className="mt-10"></div> {/* Spacer */}
          <Display />
        </div>
      </div>
    </main>
  );
}
