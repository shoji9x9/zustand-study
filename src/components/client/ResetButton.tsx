"use client";

import { useCounterStore } from "@/store/Counter";
import { putCookie, setCookie } from "@/utils/cookie";
import { usePathname, useRouter } from "next/navigation";

export function ResetButton() {
  console.log("ResetButton (Client Component");
  const router = useRouter();
  const pathname = usePathname();

  const onClick = async (e: any) => {
    useCounterStore.getState().reset();
    // await putCookie();  // TODO: Cookieを利用しても同じことが実現できないか今後試してみる
    router.replace(pathname);
  };
  return (
    <div className="border border-cyan-400 p-10">
      <h2 className="text-xl">Client Component2</h2>
      <div className="mt-10">
        <button
          onClick={onClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
