import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-[#2E7C17] py-3 px-2">
      {" "}
      <div>
        <Link className="font-bold text-black" href={"/"}>
          INKTOBER
        </Link>
      </div>
      <div className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
