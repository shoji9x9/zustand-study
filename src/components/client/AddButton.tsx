"use client";

import { useCounterStore } from "@/store/Counter";
import { setCookie } from "@/utils/cookie";
import { usePathname, useRouter } from "next/navigation";

export function AddButton() {
  console.log("AddButton (Client Component");
  const count = useCounterStore((state) => state.count);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    useCounterStore.getState().increment();
    // setCookie("count", String(count + 1));  // TODO: Cookieを利用しても同じことが実現できないか今後試してみる
    router.replace(`${pathname}/?count=${count + 1}`);
  };

  return (
    <div className="border border-cyan-400 p-10">
      <h2 className="text-xl">Client Component1</h2>
      <div className="mt-10">
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
