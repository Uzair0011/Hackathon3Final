import Image from "next/image";
import { data } from "../data/gear2Data";

export default function Gear2Products() {
  return (
    <div>
    {/* arrow  */}
    <div className="w-[97%]  flex  justify-end gap-5">
      <div>
        <Image src="/LA.png" alt="logo" width={46} height={46} />
      </div>
      <div>
        <Image src="/RA.png" alt="logo" width={46} height={46} />
      </div>
    </div>

    {/* Column 1 */}
    <div className="w-[100%] place-items-center   grid  md:grid-cols-2  px-3 gap-11 ">
      {data.map((Idata, index) => (
        <div key={index} className="  w-[267px] h-[400px] px-3 pt-5">
          {/* Image */}
          <div className="w-full h-auto flex items-center justify-center mb-4 hover:scale-90 duration-500 cursor-pointer">
            <Image
              src={`/${Idata.imageURL}.png`}
              alt="logo"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          {/* Title and Price */}
          <div className="flex  mb-2">
            <h3 className="w-[180px] text-[15px] font-medium">
              {Idata.title}
            </h3>
            <h3 className="font-bold">₹{Idata.price}</h3>
          </div>
          {/* Gender and Type */}
          <h3 className="text-[15px] text-[#757575]">{Idata.gender}</h3>
          <h3 className="text-[15px] text-[#757575]">{Idata.type}</h3>
        </div>
      ))}
    </div>
  </div>
  );
}
