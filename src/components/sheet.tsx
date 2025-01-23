"use client";

import { Button } from "@/components/ui/button";

import { TiThMenu } from "react-icons/ti";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["right"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
              <TiThMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
                <u>Nike</u>
              </SheetTitle>
              <SheetDescription>
                {/* Make changes to your profile here. Click save when you're done. */}
              </SheetDescription>
            </SheetHeader>
            <ul className="space-y-6 text-2xl font-bold pt-6">
              <li className="text-sm hover:underline">
                <Link href="/">New & Featured</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href="/Detail">Men</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href="/Detail2">Women</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href="/Detail3">Kids</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href="/products">Sale</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href="/">SNKRS</Link>
              </li>
            </ul>
            <SheetFooter>
              <SheetClose asChild>
                {/* <Button type="submit">Save changes</Button> */}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
