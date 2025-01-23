"use client";
import Image from "next/image";

import Link from "next/link";

import { SheetSide } from "./sheet";

export default function Navbar() {
  return (
    <div
      data-aos="flip-down"
      className="w-full bg-white flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6"
    >
      {/* Logo */}
      <div>
        <Link href="/">
          {" "}
          <Image src="/logo.png" alt="logo" width={59} height={20} />
        </Link>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-4 sm:gap-5 pl-0 sm:pl-20">
        <li className="text-sm hover:underline">
          <Link href="/products">New & Featured</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/products">Men</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/products">Women</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/products">Kids</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/products">Sale</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/">SNKRS</Link>
        </li>
      </ul>

      {/* Search and Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden lg:flex w-[160px] h-[40px] bg-myColor rounded-full items-center ">
          <Image src="/search.png" alt="search icon" width={24} height={24} />
          <input
            className="w-full h-full  bg-myColor ml-1"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Icons */}
        <div>
          <Link href={""}>
            <Image
              src="/heart.png"
              alt="wishlist icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div>
          <Link href={"/cart"}>
            {" "}
            <Image src="/cart.png" alt="cart icon" width={24} height={24} />
          </Link>
        </div>
        {/* mobile navigation bar  */}
        <div className=" md:hidden">
          <SheetSide />
        </div>{" "}
      </div>
    </div>
  );
}
