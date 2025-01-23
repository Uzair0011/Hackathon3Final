import Boxes from "./boxes";
export default function Cart() {
  return (
    <div className="flex flex-col md:flex-row px-6 py-6 md:py-0">
      {/* left  */}
      <div className="md:w-[60%] ">
        {/* free deliver  */}
        <div className="w-full bg-myColor py-2 ">
          <p className="text-[13px]">Free Delivery</p>
          <div className="text-[11px]">
            <span>Applies to orders of ₹ 14 000.00 or more.</span>{" "}
            <span className="underline">View details</span>
          </div>
        </div>
        {/* bag  */}
        <h1 className="text-[22px] font-medium">Bag</h1>
        <Boxes />
      </div>
      {/* right  */}
      <div className="md:hidden">
        <br />

        <hr />
        <br />
      </div>
      <div className="md:w-[40%] h-[300px] flex flex-col justify-between px-6">
        <p className="text-[21px] font-medium">Summary</p>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>₹ 20 890.00</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>₹ 20 890.00</p>
        </div>
        <hr />
        <button className="text-[15px] font-medium w-full h-[60px] bg-black text-white rounded-full">
          Member Checkout
        </button>
      </div>
    </div>
  );
}
