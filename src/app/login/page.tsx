import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[380px] h-auto flex flex-col justify-between items-center py-6">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-[50px] h-[50px] mb-4">
            <Image
              src="/logo.png"
              alt="image"
              width={2000}
              height={2000}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <h1 className="text-center text-[18px] font-bold">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h1>
        </div>

        {/* Email Input */}
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Email address"
            className="w-full h-[40px] border pl-5 rounded-md"
          />
        </div>

        {/* Password Input */}
        <div className="w-full mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[40px] border pl-5 rounded-md"
          />
        </div>

        {/* Checkbox & Forgot Password */}
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex text-[15px]">
            <input type="checkbox" id="Rate" name="options" value="Rate" />
            <label htmlFor="Rate" className="text-[12px] text-[#8D8D8D] pl-2">
              Keep me signed in
            </label>
          </div>
          <div className="text-[12px] text-[#8D8D8D]">
            Forgotten your password?
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="w-full text-[12px] text-center mb-4">
          By logging in, you agree to Nike&apos;s Privacy Policy and Terms of Use.
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white text-[11px] py-2 rounded-md mb-4">
          SIGN IN
        </button>

        {/* Join Us Link */}
        <h1 className="text-[12px] flex justify-center gap-2">
          <p className="text-[#8D8D8D]">Not a Member?</p>
          <Link href="/joinUs">
            <button className="text-blue-500">Join Us</button>
          </Link>
        </h1>
      </div>
    </div>
  );
}
