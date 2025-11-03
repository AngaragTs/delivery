import Link from "next/link";
import { Icon } from "./icons/icon";
import { Logo } from "./icons/logo";
import { TruckIcon } from "./icons/truckicon";

export default function Home() {
  return (
    <div className="w-[1440px]  flex m-auto">
      <div className="w-80 bg-white gap-10 mt-15 mr-5">
        <div className="flex w-50 h-10">
          <Logo />
          <div>
            <p className="font-semibold text-lg">AngAng</p>

            <p className="text-xs font-normal text-[#71717A]">Swift delivery</p>
          </div>
        </div>
        <div className="w-40 h-20">
          <Link
            href={`admin/menu`}
            className="w-40 h-10 flex items-center cursor-pointer"
          >
            <Icon />
            <h1 className="cursor-pointer">Food menu</h1>
          </Link>
          <button className="w-40 h-10 flex items-center cursor-pointer">
            <TruckIcon />
            <button className="cursor-pointer">Orders</button>
          </button>
        </div>
      </div>
      <div className="w-full h-[1024px] bg-[#E4E4E5] ">
        <div className="w-[1100px] m-auto rounded-md mt-10">
          <div className="flex justify-end h-10 w-full">
            <img className="w-9 h-9" src="icon.png"></img>
          </div>
          <div className="w-full h-[820px] bg-white flex">
            <div className="w-500  mr-10">
              <p className="font-bold">Orders</p>
              <p className="font-medium text-xs text-[#71717A]">32 items</p>
            </div>
            <div className="w-500  flex justify-end ml-10 ">
              <div className="border-2 rounded-2xl border-[#E4E4E7]">
                <input type="date"></input>
                <input type="date"></input>
              </div>
              <div>
                <button className="cursor-pointer">
                  Change delivery State
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
