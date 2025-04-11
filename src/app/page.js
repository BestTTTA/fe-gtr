import Navbar from "@/components/layout/Navbar";
import Menu from "@/components/layout/Menu";
import Selecter from "@/components/home/Selecter";
import Card from "@/components/home/Card";
export default function Home() {
  return (
    <div className="flex w-full h-lvh">
      <Menu />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex w-full h-lvh bg-[#F0F2F5] py-[32px] px-[16px]">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Page Title</h1>
            <h2 className="text-sm py-2">Description</h2>
            <div className="py-[16px]">
              <Selecter />
            </div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
