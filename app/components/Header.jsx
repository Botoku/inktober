import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import Link from "next/link";
const Header = async () => {
  const user = await currentUser();
  return (
    <div className="flex w-full justify-between items-center bg-navy border-b-mint border-b-4 text-mint py-3 px-2">
      {" "}
      <div>
        <Link className="font-bold" href={"/"}>
          INKTOBER
        </Link>
      </div>
      <div className="flex items-center">
        {user ? (
          <>
          <p className="mr-3">Hello {user.firstName}</p>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </>
        ) : (
          <>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
