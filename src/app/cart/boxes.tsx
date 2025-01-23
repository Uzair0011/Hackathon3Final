// map method
import Image from "next/image";
import { data } from "../../data/boxesData";

export default function Boxes() {
  return (
    <div>
      {/* box  */}
      <div className="  ">
        {data.map((item, index) => (
          <div key={index} className="flex  py-[24px]">
            <div className="">
              <Image
                src={`/${item.URL}.png`}
                alt="picture"
                width={150}
                height={150}
              />
            </div>
            <div className=" w-full h-[160px] pl-6 flex flex-col justify-between">
              {" "}
              <div className=" flex justify-between pr-6">
                <h1>{item.title}</h1>
                {/* rate  */}
                <p>MRP: ₹ {item.price}</p>
              </div>
              {/* other text  */}
              <p className="text-[#757575]">{item.type}</p>
              <p className="text-[#757575]">{item.color}</p>
              <div className="flex gap-5 text-[#757575]">
                <p>
                  Size <span>{item.size}</span>
                </p>
                <p>
                  Quantity <span>{item.quantity}</span>
                </p>
              </div>
              <br />
              {/* image  */}
              <div className="flex text-black gap-5 ">
                <button>
                  <Image src="/c11.png" alt="picture" width={24} height={24} />
                </button>
                <button>
                  <Image src="/c22.png" alt="picture" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
