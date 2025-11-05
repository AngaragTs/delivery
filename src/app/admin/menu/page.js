import { Logo } from "../icons/logo";
import { Icon } from "../icons/icon";
import { TruckIcon } from "../icons/truckicon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full  flex m-auto">
      <div className="w-80 bg-white gap-10 mt-10 flex justify-center">
        <div>
          <div className="flex w-50 h-10">
            <Logo />
            <div>
              <p className="font-semibold text-lg">NomNom</p>

              <p className="text-xs font-normal text-[#71717A]">
                Swift delivery
              </p>
            </div>
          </div>
          <div className="w-40 h-20">
            <button className="w-40 h-10 flex items-center cursor-pointer">
              <Icon />
              <h1 className="cursor-pointer">Food menu</h1>
            </button>
            <Link
              href={`/admin`}
              className="w-40 h-10 flex items-center cursor-pointer"
            >
              <TruckIcon />
              <h1 className="cursor-pointer">Orders</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-600 bg-[#E4E4E5]">
        <div className="flex justify-center mt-5">
          <div className="w-460 mah-h-fit mb-3">
            <div className="w-full flex justify-end">
              <img className="w-9 h-9" src="icon.png"></img>
            </div>
            <div className="w-full flex justify-center mt-2">
              <div className="w-460 max-h-fit bg-white rounded-2xl p-2">
                <p className="font-semibold mt-2 ml-2">Dishes Category</p>
                <div className="ml-2 gap-2 flex flex-wrap">
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    aaaaa
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssd
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>

                  <button className="cursor-pointer rounded-xl w-auto p-2 border">
                    dfdssdsdfgdgsdgdgffghdfghgfh
                  </button>
                  <button className="cursor-pointer rounded-2xl w-auto p-2 border bg-[#EF4444]">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-h-fit flex justify-center">
          <div className="w-460  bg-white rounded-2xl">
            <p className="font-semibold mt-2 ml-2">Appetizers</p>
            <div className="w-full  rounded-2xl ml-2 flex-wrap flex justify-evenly p-2 gap-2">
              <div className="w-60 h-50 border rounded-2xl flex justify-center items-center">
                <div>
                  <button className="w-10 h-10 rounded-3xl bg-[#EF4444] flex items-center cursor-pointer" />
                  <p>+</p>
                </div>
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>

              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
              <div className="w-60 h-50 border rounded-2xl flex justify-center">
                sdfdsf
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
