
'use client';
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {SignInButton,UserButton,SignedIn,SignedOut } from "@clerk/nextjs";

const Navigation: FC = () => {
    const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Next.js App
        </div>
        <ul className="flex space-x-4">
            <li>
                <Link
                    href="/"
                    className={
                        pathname === "/"
                            ? "text-gray-600 dark:text-gray-400"
                            : "text-gray-400 hover:underline"
                    }
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/products"
                    className={
                        pathname === "/products"
                            ? "text-gray-600 dark:text-gray-400"
                            : "text-gray-400 hover:underline"
                    }
                >
                    Products
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className={
                        pathname === "/about"
                            ? "text-gray-600 dark:text-gray-400"
                            : "text-gray-400 hover:underline"
                    }
                >
                    About
                  </Link>
                  <SignedOut> 
                  <SignInButton mode="modal"></SignInButton>
                  </SignedOut>

                  <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            userButtonAvatarBox: "w-8 h-8",
                            userButtonAvatar: "w-8 h-8 rounded-full",
                        },
                    }}
                      ></UserButton>
                    </SignedIn>
            </li>
        </ul>
    </nav>
  );
};

export default Navigation;