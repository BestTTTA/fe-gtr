import Navbar from "@/components/layout/Navbar";
import Menu from "@/components/layout/Menu";

export default function Home() {
  return (
    <div className="flex w-full">
      <Menu/>
      <div className="flex flex-col w-full">
        <Navbar />
      </div>
    </div>
  );
}
