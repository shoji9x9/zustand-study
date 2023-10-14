"use client";

import { useCounterStore } from "@/store/Counter";

export function Display() {
  console.log("Display (Client Component)");
  const { count } = useCounterStore();
  return (
    <div className="border border-cyan-400 p-10">
      <h2 className="text-xl">Client Component3</h2>
      <div className="mt-10">Count: {count}</div>
    </div>
  );
}
