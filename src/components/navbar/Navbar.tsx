import React, { useState } from "react";
import Logo from "../../../public/icon.png";
import Image from "next/image";
import { NavLinkType } from "@/types";
import NavLink from "./NavLink";

const nav_links: NavLinkType[] = [
  { text: "Inicio", href: "/" },
  { text: "Serviços", href: "/#serviços" },
  { text: "Contato", href: "/#contato" },
  { text: "Sobre", href: "/#sobre" },
];

export default function Navbar() {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-green-500 text-white p-4 shadow-md lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-lg">
            <Image alt="Logo" className="mx-auto w-[10vh] block" src={Logo} />
          </a>
          <button onClick={e=>setOpen(!open)} className="lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:space-x-4">
          {nav_links.map((navlink, i) => (
            <NavLink key={"navlink_mobile-" + i} href={navlink.href}>
              {navlink.text}
            </NavLink>
          ))}
        </ul>
        <div className="px-4">
          <a>Login</a>
        </div>
      </nav>
      <ul className={"lg:hidden flex bg-white text-green-600 py-4 shadow-md flex-col items-center space-y-3 border-b border-green-500 "+(open ? "flex" : "hidden")}>
        {nav_links.map((navlink, i) => (
          <NavLink key={"navlink_mobile-" + i} href={navlink.href}>
            {navlink.text}
          </NavLink>
        ))}
      </ul>
    </>
  );
}
