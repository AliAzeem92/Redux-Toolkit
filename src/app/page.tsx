import DisplayUsers from "./components/DisplayUsers";
import AddUsers from "./components/AddUsers";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-[#E2DFD0] ">
      <AddUsers />
      <DisplayUsers />
    </main>
  );
}
