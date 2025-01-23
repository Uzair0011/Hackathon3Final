
export default function TheEssentials() {
  return (
    <div className="px-4 py-6">
      {/* Heading */}
      <h1
      data-aos="fade-left"
       className="text-[23px] font-medium pb-5">The Essentials</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Men's Card */}
        <div className="relative w-full h-[300px] md:h-[540px] bg-green-700 bg-[url(/t1.png)] bg-cover bg-center flex items-end">
          <button className="w-[85px] h-[39px] bg-white text-center rounded-full m-4">
            Men&apos;s
          </button>
        </div>

        {/* Women's Card */}
        <div className="relative w-full h-[300px] md:h-[540px] bg-green-700 bg-[url(/t2.png)] bg-cover bg-center flex items-end">
          <button className="w-[85px] h-[39px] bg-white text-center rounded-full m-4">
            Women&apos;s
          </button>
        </div>

        {/* Kid's Card */}
        <div className="relative w-full h-[300px] md:h-[540px] bg-green-700 bg-[url(/t3.png)] bg-cover bg-center flex items-end">
          <button className="w-[85px] h-[39px] bg-white text-center rounded-full m-4">
            Kid&apos;s
          </button>
        </div>
      </div>
    </div>
  );
}
