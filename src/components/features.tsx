import Image from "next/image";
import Link from "next/link";
export default function Features() {
  return (
    <div className="px-4 sm:px-6 py-6">
      {/* Featured Header */}
      <div
        data-aos="fade-left"
        className="text-[20px] sm:text-[23px] font-medium mb-4  sm:text-left"
      >
        Featured
      </div>

      {/* Image Section */}
      <div className="w-full h-auto bg-cover mb-6">
        <Image
          src="/features.png"
          alt="Featured Image"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>

      {/* Text and Button Section */}
      <div className="w-full h-auto flex flex-col items-center justify-center text-center py-6">
        <h3 className="text-[32px] sm:text-[48px] md:text-[54px] font-medium leading-tight mb-4">
          STEP INTO WHAT FEELS GOOD
        </h3>
        <p className="text-[14px] sm:text-[15px] max-w-[600px] mb-6">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Link href="/products">
          <button className="w-[130px] sm:w-[152px] h-[39px] bg-black text-white text-sm sm:text-base rounded-full">
            Find Your Shoe
          </button>
        </Link>
      </div>
    </div>
  );
}
