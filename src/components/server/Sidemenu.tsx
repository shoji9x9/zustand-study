export function SideMenu({ count }: { count: number }) {
  console.log("SideMenu (Server Component)");

  return (
    <div className="border border-pink-400 p-10">
      <h2 className="text-xl">Server Component1</h2>
      <div className="mt-10">Count: {count}</div>
    </div>
  );
}
