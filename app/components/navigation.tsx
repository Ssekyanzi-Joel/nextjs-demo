
'use client';
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {SignInButton,UserButton,SignedIn,SignedOut } from "@clerk/nextjs";

const Navigation: FC = () => {
    const pathname = usePathname();
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                    Next.js App
                </div>
                <div className="flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                href="/"
                                className={
                                    pathname === "/"
                                        ? "text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
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
                                        ? "text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
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
                                        ? "text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                }
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <SignedOut> 
                            <SignInButton mode="modal">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                                    Sign In
                                </button>
                            </SignInButton>
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
                            />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navigation;