export default function home() {
  return (
    <div className="w-full h-280 flex items-center justify-center gap-10">
      <div className="w-100 h-94">
        <div className="w-full h-20">
          <p className="font-semibold text-2xl">Log in</p>
          <p className="text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className="w-full h-30 gap-5">
          <input
            placeholder="Enter your email address"
            className="border border-[#E4E4E7] w-full h-9"
          ></input>
          <input
            placeholder="Password"
            className="border border-[#E4E4E7] w-full h-9"
          ></input>
          <button>
            <p>Forgot password ?</p>
          </button>
        </div>
        <button className="w-full h-9 flex justify-center bg-black text-white items-center cursor-pointer">
          Let's Go
        </button>
        <div className="w-full h-9 flex">
          <p className="text-[#71717A]">Dont have an account?</p>
          <button
            className="text-[#2563EB] cursor-pointer
          "
          >
            Sign up{" "}
          </button>
        </div>
      </div>
      <img className="w-300 h-full rounded-2xl" src="loginpicture.jpg"></img>
    </div>
  );
}
