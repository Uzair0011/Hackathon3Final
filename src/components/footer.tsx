import Image from "next/image";
export default function Footer() {
  return (
    <div
      id="FooterLast"
      className="w-full h-auto sm:h-[267px] bg-black flex items-center justify-between text-white px-6 py-5 sm:py-0 "
    >
      <div className="w-full  flex flex-wrap justify-between">
        <div className="w-full sm:w-[590px]  h-auto flex flex-wrap justify-center sm:justify-between text-center sm:text-start">
          {/* <!-- Column 1 --> */}
          <ul className="w-full sm:w-auto  flex flex-col leading-6 mb-5 ">
            <li className="hover:underline cursor-pointer">Find A Store</li>
            <li className="hover:underline cursor-pointer">Become A Member</li>
            <li className="hover:underline cursor-pointer">
              Sign Up for Email
            </li>
            <li className="hover:underline cursor-pointer">Send Us Feedback</li>
            <li className="hover:underline cursor-pointer">
              Student Discounts
            </li>
          </ul>

          {/* <!-- Column 2 --> */}
          <ul className="w-full sm:w-auto  flex flex-col leading-6 text-[#7E7E7E] mb-5 ">
            <li className="text-white">Get Help</li>
            <li className="hover:underline cursor-pointer">Order Status</li>
            <li className="hover:underline cursor-pointer">Delivery</li>
            <li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">Payment Options</li>
            <li className="hover:underline cursor-pointer">
              Contact Us On Nike.com
            </li>
           
          </ul>

          {/* <!-- Column 3 --> */}
          <ul className="w-full sm:w-auto  flex flex-col leading-6 text-[#7E7E7E] mb-5">
            <li className="text-white">About Nike</li>
            <li className="hover:underline cursor-pointer">News</li>
            <li className="hover:underline cursor-pointer">Career</li>
            <li className="hover:underline cursor-pointer">Investors</li>
            <li className="hover:underline cursor-pointer">Sustainability</li>
          </ul>
        </div>

        {/* logo  */}
        <div className="w-full sm:w-[177px] h-[auto]  flex  justify-between py-5 sm:py-0">
          <div className="w-[30px] h-[30px] hover:bg-white hover:cursor-pointer hover:rounded-full hover:bg-blend-multiply">
            <Image src="/f1.png" alt="logo" width={30} height={30} />
          </div>
          <div className="w-[30px] h-[30px] hover:bg-white hover:cursor-pointer hover:rounded-full hover:bg-blend-multiply">
            <Image src="/f2.png" alt="logo" width={30} height={30} />
          </div>
          <div className="w-[30px] h-[30px] hover:bg-white hover:cursor-pointer hover:rounded-full hover:bg-blend-multiply">
            <Image src="/f3.png" alt="logo" width={30} height={30} />
          </div>
          <div className="w-[30px] h-[30px] hover:bg-white hover:cursor-pointer hover:rounded-full hover:bg-blend-multiply">
            <Image src="/f4.png" alt="logo" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
