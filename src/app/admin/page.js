import { Icon } from "./icons/icon";
import { Logo } from "./icons/logo";
import { TruckIcon } from "./icons/truckicon";

export default function Home() {
  return (
    <div className="w-[1440px] flex justify-center m-auto">
      <div className="w-80 bg-white">
        <div className="flex w-50 h-10">
          <Logo />
          <div>
            <p className="font-semibold text-lg">NomNom</p>

            <p className="text-xs font-normal text-[#71717A]">Swift delivery</p>
          </div>
        </div>
        <div className="w-40 h-20">
          <button className="w-40 h-10 flex items-center cursor-pointer">
            <Icon />
            <p>Food menu</p>
          </button>
          <button className="w-40 h-10 flex items-center cursor-pointer">
            <TruckIcon />
            <p>Orders</p>
          </button>
        </div>
      </div>
      <div className="w-full bg-[#E4E4E7] flex">
        <div className="w-full h-20 bg-white mt-10">sadfghjkfd</div>
      </div>
    </div>
  );
}
