import Image from "next/image";
import Link from "next/link";
export default function JoinUs() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
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
          <h1 className="text-center text-[18px] font-bold mb-2">
            BECOME A NIKE MEMBER
          </h1>
          <p className="w-full text-[#8D8D8D] text-center px-4 mb-6">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </p>
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

        {/* First Name */}
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-[40px] border pl-5 rounded-md"
          />
        </div>

        {/* Last Name */}
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-[40px] border pl-5 rounded-md"
          />
        </div>

        {/* Date of Birth */}
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Date of Birth"
            className="w-full h-[40px] border pl-5 rounded-md"
          />
          <p className="text-[#8D8D8D] text-center text-[12px] mt-2">
            Get a Nike Member Reward every year on your Birthday.
          </p>
        </div>

        {/* Country */}
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Country"
            className="w-full h-[40px] border pl-5 rounded-md"
          />
        </div>

        {/* Gender Inputs */}
        <div className="w-full flex gap-4 mb-4">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Male"
              className="w-full h-[40px] border pl-5 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Female"
              className="w-full h-[40px] border pl-5 rounded-md"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex text-[15px]">
            <input type="checkbox" id="Rate" name="options" value="Rate" />
            <label htmlFor="Rate" className="text-[12px] text-[#8D8D8D] pl-2"></label>
            <div className="text-[#8D8D8D] text-[12px]">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </div>
          </div>
        </div>

        {/* Privacy Text */}
        <div className="w-full text-[12px] text-center text-[#8D8D8D] mb-4">
          By signing up, you agree to Nike&apos;s Privacy Policy and Terms of Use.
        </div>

        {/* Join Us Button */}
        <button className="w-full bg-black text-white text-[11px] py-2 rounded-md mb-4">
          Join Us
        </button>

        {/* Sign In Link */}
        <h1 className="text-[12px] text-center">
          <span className="text-[#8D8D8D]">Already a Member?</span>
          <span className="text-blue-500 cursor-pointer"> <Link href={"../login"}>Sign in.</Link></span>
        </h1>
      </div>
    </div>
  );
}
