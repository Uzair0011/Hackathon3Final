import Gear2Products from "./gear2Products";
import Gear1Products from "./gear1Products";

export default function GearUp() {
  return (
    <div className="">
      {/* gear name  */}
      <div>
        <h3 
         data-aos="fade-left"
         className="text-[23px] font-medium pl-4">
          Gear Up
        </h3>
      </div>

      <div className=" lg:flex justify-between gap-6">
        {" "}
        {/* card  */}
        <Gear1Products />
        <Gear2Products />
      </div>
    </div>
  );
}
