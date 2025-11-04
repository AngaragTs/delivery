import Link from "next/link";
import { Icon } from "./icons/icon";
import { Logo } from "./icons/logo";
import { TruckIcon } from "./icons/truckicon";
import { UpDownIcon } from "./icons/updownicon";

export default function Home() {
  return (
    <div className="w-[1440px]  flex m-auto">
      <div className="w-80 bg-white gap-10 mt-15 mr-5">
        <div className="flex w-50 h-10">
          <Logo />
          <div>
            <p className="font-semibold text-lg">LolLol</p>

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
        <div className="w-full flex justify-end mt-10 pr-8">
          <img className="w-9 h-9" src="icon.png" />
        </div>
        <div className="w-full flex justify-center mt-5 rounded-2xl">
          <div className="w-280 h-400 bg-white">
            <div className="w-280 h-18 flex items-center ">
              <div className="w-140 pl-2">
                <p className="text-xl font-bold">Orders</p>
                <p className="text-[#71717A] font-meduim text-xs">32 Items</p>
              </div>
              <div className="flex justify-end w-140 gap-2 pr-2">
                <div className="border  rounded-2xl">
                  <input type="date" />
                  <input type="date" />
                </div>
                <button className="border cursor-pointer rounded-2xl">
                  Change Delivery State
                </button>
              </div>
            </div>
            <div className="w-full h-10 bg-[#E4E4E7] flex items-center">
              <div className="w-24 h-12 flex items-center  justify-evenly">
                <input type="checkbox" />
                <p>№</p>
              </div>
              <div className="w-260 h-12 flex items-center justify-evenly text-[#71717A]">
                <p>Customer</p>
                <p>Food</p>
                <div className="flex h-12 items-center gap-5">
                  <p>Date</p>
                  <UpDownIcon />
                </div>
                <p>Total </p>
                <p>Delivery Address</p>
                <div className="flex h-12 items-center gap-5">
                  <p>Delivery state</p>
                  <UpDownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
