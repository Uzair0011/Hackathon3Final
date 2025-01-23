import Image from "next/image";
export default function FooterBottom() {
  return (
    <div className="w-[100%] h-auto sm:h-[50px] justify-center bg-black flex flex-wrap sm:justify-between items-center text-[#7E7E7E] px-6 py-3 sm:py-0">
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="flex flex-wrap justify-center items-center gap-2 text-white">
          <div>
            {" "}
            <Image src="/f4.png" alt="logo" width={18} height={15} />
          </div>{" "}
          <p>Pakistan</p>
        </div>
        <div className="flex flex-wrap justify-center items-center text-center sm:text-start gap-2">
          <div>
            {" "}
            <Image src="/c.png" alt="logo" width={18} height={18} />
          </div>{" "}
          <h1>2024 Nike, Inc. Developed by Uzair Ahmed</h1>
        </div>
      </div>
      <ul className="w-[368px] h-[auto] flex flex-col sm:flex-row items-center justify-between text-[11px]">
        <li>Guides</li>
        <li>Terms of Sale</li>
        <li>Terms of Use</li>
        <li>Nike Privacy Policy</li>
      </ul>
    </div>
  );
}
