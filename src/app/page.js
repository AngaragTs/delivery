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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="w-full max-h-fit">
      <div className="w-full h-43 flex bg-black items-center justify-between px-20">
        <div className="flex w-36">
          <Logo />
          <div>
            <p className="text-2xl text-[#FAFAFA]">
              Nom<span className="text-[#EF4444] text-2xl">Nom</span>
            </p>
            <p className="text-[#E4E4E7] text-base">Swift delivery</p>
          </div>
        </div>
        <div className=" flex gap-2">
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

          <Sheet>
            <SheetTrigger className="w-9 h-9 rounded-3xl flex bg-white items-center justify-center cursor-pointer">
              <CartIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-9 h-9 rounded-3xl bg-red-600 items-center justify-center flex cursor-pointer">
              <ProfileIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className="border cursor-pointer flex items-center justify-center rounded-2xl">
                  Sign out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <img className="w-full" src="./head.png" />
      <div className="bg-[#404040] h-100"></div>
      <div className="w-full h-200 bg-black  py-10">
        <div className="w-full h-20 bg-[#EF4444] justify-center items-center flex overflow-hidden">
          <div className="w-full  text-white text-3xl animation-scroll whitespace-nowrap gap-2 font-semibold">
            {Array(10)
              .fill("Fresh fast delivered")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 ">
          <div className=" flex gap-20 items-center">
            <div>
              <Logo />
              <div>
                <p className="text-2xl text-[#FAFAFA]">
                  Nom<span className="text-[#EF4444] text-2xl">Nom</span>
                </p>
                <p className="text-[#E4E4E7] text-base">Swift delivery</p>
              </div>
            </div>
            <div className="w-30 flex flex-col items-start">
              <p className="text-base text-[#71717A]">NOMNOM </p>
              <button className="text-white text-start cursor-pointer">
                Home{" "}
              </button>
              <button className="text-white text-start cursor-pointer">
                Contact us{" "}
              </button>
              <button className="text-white text-start cursor-pointer">
                Delivery zone{" "}
              </button>
            </div>
            <div className="h-full w-80 ">
              <div>
                <p className="text-base text-[#71717A]">MENU</p>
              </div>
              <div className=" flex">
                <div className="h-20 w-40 flex flex-col items-start ">
                  <button className="text-white cursor-pointer">
                    Appetizers
                  </button>
                  <button className="text-white cursor-pointer">Salads</button>
                  <button className="text-white cursor-pointer">Pizzas</button>
                  <button className="text-white cursor-pointer">
                    Main dishes
                  </button>
                  <button className="text-white cursor-pointer">
                    Desserts
                  </button>
                </div>
                <div className="h-20 w-20 flex flex-col items-start">
                  <button className="text-white cursor-pointer">
                    Side dish{" "}
                  </button>
                  <button className="text-white cursor-pointer">Brunch</button>
                  <button className="text-white cursor-pointer">
                    Desserts
                  </button>
                  <button className="text-white cursor-pointer">
                    Beverages
                  </button>
                  <button className="text-white cursor-pointer">
                    Fish & Sea foods
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#71717A] text-base">Follow us</p>
              <div className="flex">
                <img className="w-7 h-7" src="./facebook.png"></img>
                <img className="w-7 h-7" src="./instagram.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-220  border-t-2 border-[#71717A]  flex gap-10 text-[#71717A] mt-30">
            <p>Copy right 2024</p>
            <p>Nomnom LLC</p>
            <p>Privacy policy </p>
            <p>Terms and conditoin</p>
            <p>Cookie policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
