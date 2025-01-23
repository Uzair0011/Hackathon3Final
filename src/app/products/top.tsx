"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function TopHead() {
  return (
    <div className="w-full h-auto  flex justify-between ">
      <div>
        <h1 className="text-[24px] font-medium ">New (500)</h1>
      </div>
      <div className="flex gap-5">
        {/* 1  */}
        <div className="flex items-center gap-2 text-[16px]">
          <div>
            <Link href="/" className="hover:underline">
              Hide Filters
            </Link>
          </div>

          <div className="w-[18px] h-[16px] flex ">
            <Image
              src="/filter1.png"
              alt="image"
              width={20}
              height={20}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
        {/* 2  */}
        <div className="flex items-center gap-2">
          <div>
            <Link className="hover:underline" href="/">
              Sort By
            </Link>
          </div>

          <div className="w-[18px] h-[16px] flex ">
            <Image
              src="/filter2.png"
              alt="image"
              width={20}
              height={20}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
