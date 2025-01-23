import Image from "next/image";
import Link from "next/link";
export default function Hello() {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-auto bg-myColor flex flex-col items-center justify-center p-4 sm:p-6 text-center ">
        <h3
          data-aos="flip-up"
          className="text-[15px] sm:text-[18px] font-medium"
        >
          Hello Nike App
        </h3>
        <div data-aos="fade-up" className="text-[14px] sm:text-[16px] mt-2">
          Download the app to access everything Nike.{" "}
          <button className="text-blue-500">
            <u>Get Your Great</u>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-auto bg-cover px-4 sm:px-6">
        <Image
          src="/shoes.png"
          alt="Nike Shoes"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>

      {/* Text and Buttons Section */}
      <div className="w-full h-auto flex items-center py-6 sm:py-12">
        <div className="w-full flex flex-col items-center text-center px-4 sm:px-6">
          <p
            data-aos="flip-down"
            className="text-[15px] sm:text-[18px] font-medium"
          >
            First Look
          </p>
          <h1 className="text-[32px] sm:text-[56px] font-medium leading-tight">
            Nike Air Max Pulse
          </h1>
          <p
            data-aos="flip-down"
            className="w-full sm:w-[511px] text-[14px] sm:text-[15px] mt-4"
          >
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </p>
          <div className="flex gap-3 mt-6">
            <button className="w-[120px] h-[40px] bg-black text-white rounded-full text-sm">
              Notify Me
            </button>
            <Link href="#Air">
              <button className="w-[120px] h-[40px] bg-black text-white rounded-full text-sm">
                Shop Air Max
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
