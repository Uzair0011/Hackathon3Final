"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function SideBar() {
  const [showButton, setShowButton] = useState(true);
  const toggleButton = () => {
    setShowButton(!showButton);
  };
  const [showButton2, setShowButton2] = useState(true);
  const toggleButton2 = () => {
    setShowButton2(!showButton2);
  };
  const [showButton3, setShowButton3] = useState(true);
  const toggleButton3 = () => {
    setShowButton3(!showButton3);
  };
  return (
    <div className="px-6">
      <div className="flex justify-between">
        {/* new list  */}

        {/* left Side bar */}
        <div className="hidden w-[190px]  h-auto  sm:flex sm:flex-col ">
          {/* 1  */}
          <ul className="py-5 border-r-2 ">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
              "Jumpsuits & Rompers",
              "Skirts & Dresses",
              "Socks",
              "Accessories & Equipment",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <br />
          <hr />
          {/* Gender  */}

          <div className="flex justify-between items-center pt-11">
            <div className="font-bold">Gender</div>

            <button onClick={toggleButton}>
              {showButton ? (
                <Image src="/AA.png" alt="arrow" width={15} height={15} />
              ) : (
                <Image
                  className="rotate-180 "
                  src="/AA.png"
                  alt="arrow"
                  width={15}
                  height={15}
                />
              )}
            </button>
          </div>
          {showButton && (
            <ul className=" py-5">
              {["Male", "Women", "Unisex"].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline  "
                >
                  <div>
                    <input
                      className="hover:cursor-pointer"
                      type="checkbox"
                      id="men"
                      name="options"
                      value="men"
                    />
                    <label htmlFor="item" className="pl-2">
                      {item}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <br />
          <hr />
          {/* Kids  */}

          <div className="flex justify-between items-center pt-11">
            <div className="font-bold">Kids</div>
            <button onClick={toggleButton2}>
              {showButton2 ? (
                <Image src="/AA.png" alt="arrow" width={15} height={15} />
              ) : (
                <Image
                  className="rotate-180 "
                  src="/AA.png"
                  alt="arrow"
                  width={15}
                  height={15}
                />
              )}
            </button>
          </div>
          {showButton2 && (
            <ul className=" py-5">
              {["Boys", "Girls"].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline  "
                >
                  <div>
                    <input
                      className="hover:cursor-pointer"
                      type="checkbox"
                      id="men"
                      name="options"
                      value="men"
                    />
                    <label htmlFor="item" className="pl-2">
                      {item}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <br />
          <hr />
          {/* Shop  */}

          <div className="flex justify-between items-center pt-11">
            <div className="font-bold">Shop By Price</div>
            <button onClick={toggleButton3}>
              {showButton3 ? (
                <Image src="/AA.png" alt="arrow" width={15} height={15} />
              ) : (
                <Image
                  className="rotate-180 "
                  src="/AA.png"
                  alt="arrow"
                  width={15}
                  height={15}
                />
              )}
            </button>
          </div>
          {showButton3 && (
            <ul className=" py-5">
              {["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline  "
                  >
                    <div>
                      <input
                        className="hover:cursor-pointer"
                        type="checkbox"
                        id="men"
                        name="options"
                        value="men"
                      />
                      <label htmlFor="item" className="pl-2">
                        {item}
                      </label>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
