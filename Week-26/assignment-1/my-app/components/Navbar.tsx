'use client'
import Link from "next/dist/client/link";
import React from "react";

export const Navbar = () => { 

    return (
        <>
        <div className="">
            <span>
                Welcome
            </span>
        <div className="  h-10 w-[screen/2] bg-gray-800 text-white flex items-center justify-between  text-xl px-4 font-semibold ">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/static-page">Server Page</NavLink>
            <NavLink href="/interactive-page">Client Page</NavLink>
        </div>
        </div>
        </>
    )
 };

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => { 

    return (
        <Link href={href} className="  hover:text-green-400 transition duration-300">
        {children}
        </Link>
    )
 };
