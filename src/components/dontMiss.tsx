import Image from "next/image";

export default function DontMiss() {
  return (
    <div className="px-4 py-6">
      {/* Heading */}
      <h1
      data-aos="fade-left"
      className="text-[22px] font-medium mb-4">Don&apos;t Miss</h1>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <Image
            src="/v1.png"
            alt="image"
            width={2000}
            height={2000}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full">
          <Image
            src="/v2.png"
            alt="image"
            width={2000}
            height={2000}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full h-auto mt-8 text-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[32px] md:text-[52px] font-medium mb-4">
            FLIGHT ESSENTIALS
          </h1>
          <p className="text-[14px] md:text-[16px] text-gray-700 mb-4 px-4 md:px-20">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="w-[100px] md:w-[120px] h-[39px] bg-black text-white rounded-full">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
