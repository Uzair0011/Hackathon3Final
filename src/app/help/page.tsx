import Image from "next/image";
import React from "react";
import { GoSearch } from "react-icons/go";

const Help = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="form text-center my-6 ">
        <span className="text-2xl font-medium my-6 uppercase text-center">
          get help
        </span>
        {/* search bar  */}
        <div className="flex justify-center">
          <input
            className=" w-96 border-2 rounded text-xs px-5  py-3 my-2  "
            type="text"
            placeholder="What can we help you with?"
          />
          <button className=" relative opacity-75 right-10">
            <GoSearch />
          </button>
        </div>

        <br />
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        {/* left side  */}
        <div className="flex">
          <div className="faqs  px-5 lg:px-11">
            <div>
              <span className="text-2xl font-medium my-6 uppercase text-center">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </span>
              <br /> <br />
              <span>
                We want to make buying your favourite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </span>{" "}
              <br />
              <br />
            </div>
            <div className="px-7 lg:px-14">
              <span>
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </span>
              <br />
              <br />
              <span>
                If you enter your PAN information at checkout, `{`you'll`} be
                able to pay for your order with PayTM or a local credit or debit
                card.
              </span>{" "}
              <br />
              <br />
              <span>Apple Pay</span> <br />
              <br />
            </div>

            <div>
              <span>
                <span className="underline font-medium">Nike Members</span> can
                store multiple debit or credit cards in their profile for faster
                checkout. If {`you're`} not already a Member,
                <br /> <span className="underline font-medium">
                  join us
                </span>{" "}
                today.
              </span>
            </div>
            <br />
            <div className=" space-x-2">
              <button className=" bg-black text-white py-1 px-3 rounded-full">
                JOIN US
              </button>
              <button className="bg-black text-white py-1 px-3 rounded-full">
                SHOP NIKE
              </button>
            </div>

            {/* ==================faqs================= */}
            <div className="flex">
              <div className="my-4 py-4">
                <div></div>
                <div className="my-4">
                  <span className="font-medium text-xl ">FAQs</span>
                </div>
                <div>
                  <span className="font-medium">
                    Does my card need international purchases enabled?
                  </span>
                  <br />
                  <span>
                    Yes, we recommend asking your bank to enable international
                    purchases on your card. You will be notified at checkout{" "}
                    <br /> if international purchases need to be enabled.
                  </span>{" "}
                  <br />
                  <br />
                  <span>
                    Please note, some banks may charge{" "}
                    <span className="text-medium underline">
                      a small transaction fee
                    </span>{" "}
                    for international orders.
                  </span>
                  <br />
                  <br />
                </div>

                <div>
                  <span className="font-medium">
                    Can I pay for my order with multiple methods?
                  </span>
                  <br />
                  <span>
                    No, payment for Nike orders {`can't`} be split between
                    multiple payment methods.
                  </span>{" "}
                  <br />
                  <br />
                </div>

                <div>
                  <span className="font-medium">
                    What payment method is accepted for SNKRS orders?
                  </span>
                  <br />
                  <span>
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </span>{" "}
                  <br />
                  <br />
                </div>

                <div>
                  <span className="font-medium">
                    Why {`don't`} I see Apple Pay as an option?
                  </span>
                  <br />
                  <div className=" text-justify">
                    To see Apple Pay as an option in the Nike App or on
                    Nike.com, {`you'll`} need to use a compatible Apple device
                    running the latest OS, be signed in to your iCloud account
                    and have a supported card in your Wallet. Additionally,{" "}
                    {`you'll`} need to use Safari to use Apple Pay on Nike.com.
                  </div>{" "}
                  <br />
                  <br />
                </div>

                <div>
                  <span>Was this answer helpful?</span>
                </div>
                <div>{/* div for thumbs Up */}</div>
                <div>
                  <div>
                    <Image
                      className="py-3"
                      src="/Thumb.png"
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-gray-500">RELATED</span>
                  <br />
                  <br />
                </div>

                <div className="underline font-medium px-9">
                  <span>WHAT ARE {`NIKE'S`} DELIVERY OPTIONS?</span> <br />
                  <br />
                  <span>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="w-full lg:w-[500px]  border-l-2">
          <h1 className="text-[28px] font-medium text-center">CONTACT US</h1>
          {/* mobile #  */}
          <div className="flex flex-col items-center text-center px-5 py-6">
            <Image
              className="py-6"
              src="/c1.png"
              alt="mobile"
              width={65}
              height={65}
            />
            <p className="text-[16px] font-medium">000 800 919 0566</p>
            <p className="text-[16px]">
              Products & Orders: 24 hours a day, 7 days a week <br /> Company
              Info & Enquiries: 07:30 - 16:30, Monday - Friday
            </p>
          </div>
          {/* message   */}
          <div className="flex flex-col items-center text-center px-5 py-6">
            <Image
              className="py-6"
              src="/c2.png"
              alt="message"
              width={45}
              height={45}
            />
            <p className="text-[16px] font-medium">24 hours a day</p>
            <p className="text-[16px]">7 days a week</p>
          </div>
          {/* message 2  */}
          <div className="flex flex-col items-center text-center px-5 py-6">
            <Image
              className="py-6"
              src="/c3.png"
              alt="message"
              width={35}
              height={45}
            />
            <p className="text-[16px] font-medium">{`We'll`} reply within</p>
            <p className="text-[16px]">five business days</p>
          </div>
          {/* location */}
          <div className="flex flex-col items-center text-center px-5 py-6">
            <Image
              className="py-6"
              src="/c3.png"
              alt="message"
              width={35}
              height={45}
            />
            <p className="text-[16px] font-medium">STORE LOCATOR</p>
            <p className="text-[16px]">Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
