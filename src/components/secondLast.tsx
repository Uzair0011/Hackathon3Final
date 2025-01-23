export default function SecondLast() {
  return (
    <div className="w-full h-auto md:h-[300px] flex justify-center items-center py-6">
      <div className="  max-w-screen-xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {/* 1 */}
        <ul data-aos="fade-left" className="flex text-center sm:text-start h-auto sm:h-[170px] flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Icons</li>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>

        {/* 2 */}
        <ul data-aos="fade-left" className="flex text-center sm:text-start h-auto sm:h-[170px] flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Shoes</li>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>

        {/* 3 */}
        <ul data-aos="fade-right" className="flex text-center sm:text-start h-auto sm:h-[170px] flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Clothing</li>
          <li>All Clothing</li>
          <li>Huarache</li>
          <li>Hoodies & Pullovers</li>
          <li>Air Max 95</li>
        </ul>

        {/* 4 */}
        <ul data-aos="fade-right" className="flex text-center sm:text-start h-auto sm:h-[170px] flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Kids&apos;</li>
          <li>Infant & Toddler Shoes</li>
          <li>Kids&apos; Shoes</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
      </div>
    </div>
  );
}
