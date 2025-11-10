import Image from "next/image";

import { Logo } from "./admin/icons/logo";
import { Location } from "./admin/icons/locationicon";
import { SideIcon } from "./admin/icons/sideicon";
import { CartIcon } from "./admin/icons/shoppingcarticon";
import { Button } from "@/components/ui/button";
import { ProfileIcon } from "./admin/icons/profileicon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <div className="w-full h-43 flex bg-black items-center justify-evenly">
        <div className="flex w-36">
          <Logo />
          <div>
            <p className="text-2xl text-[#FAFAFA]">
              Nom<span className="text-[#EF4444] text-2xl">Nom</span>
            </p>
            <p className="text-[#E4E4E7] text-base">Swift delivery</p>
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-80 h-9 flex rounded-2xl bg-white items-center justify-evenly">
            <Location />
            <p className="text-[#EF4444]">Delivery address:</p>

            <Dialog>
              <DialogTrigger className="text-[#71717A] cursor-pointer">
                Add Location
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Please write your delivery address!</DialogTitle>
                  <DialogDescription>
                    <div className="flex-col flex">
                      <Textarea />
                      <div className="w-full h-20 flex justify-end items-end gap-2">
                        <Button className="w-25 h-10 bg-white border text-black rounded-2xl cursor-pointer">
                          Cancel
                        </Button>
                        <Button className="w-25 h-10 bg-black border text-white rounded-2xl cursor-pointer">
                          Deliver Here
                        </Button>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <SideIcon />
          </div>
          <Button className="w-9 h-9 rounded-3xl bg-white items-center justify-center cursor-pointer">
            <CartIcon />
          </Button>
          <Button className="w-9 h-9 rounded-3xl bg-red-600 items-center justify-center cursor-pointer">
            <ProfileIcon />
          </Button>
        </div>
      </div>
      <img className="w-full" src="./head.png" />
      <div className="bg-[#404040] h-100"></div>
      <div className="w-full h-300 bg-black">
        <div className="w-full h-20 bg-[#EF4444] justify-center items-center flex ">
          <div className="w-fit text-white text-3xln animation-scroll whitespace-nowrap gap-2 font-semibold">
            {Array(40)
              .fill("Fresh fast delivered")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>
        <div className="w-100 h-60 flex">
          <div>
            <Logo />
            <div>
              <p className="text-2xl text-[#FAFAFA]">
                Nom<span className="text-[#EF4444] text-2xl">Nom</span>
              </p>
              <p className="text-[#E4E4E7] text-base">Swift delivery</p>
            </div>
          </div>
          <div className="flex flex-col w-30 items-start">
            <p className="text-base text-[#71717A]">NOMNOM </p>
            <button className="text-white cursor-pointer">Home </button>
            <button className="text-white cursor-pointer">Contact us </button>
            <button className="text-white cursor-pointer">
              Delivery zone{" "}
            </button>
          </div>
          <div className="h-full w-80 flex">
            <div>
              <p className="text-base text-[#71717A]">MENU</p>
            </div>
            <div className="h-20 w-40 flex flex-col items-start ">
              <button className="text-white cursor-pointer">Appetizers</button>
              <button className="text-white cursor-pointer">Salads</button>
              <button className="text-white cursor-pointer">Pizzas</button>
              <button className="text-white cursor-pointer">Main dishes</button>
              <button className="text-white cursor-pointer">Desserts</button>
            </div>
            <div className="h-20 w-20 flex flex-col items-start">
              <button className="text-white cursor-pointer">Side dish </button>
              <button className="text-white cursor-pointer">Brunch</button>
              <button className="text-white cursor-pointer">Desserts</button>
              <button className="text-white cursor-pointer">Beverages</button>
              <button className="text-white cursor-pointer">
                Fish & Sea foods
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
