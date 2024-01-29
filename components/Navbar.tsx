"use client";

import { NAV_LINKS } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Button from "./Button";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div className="mobile-menu block lg:hidden ">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-black hover:border-black">
            <Bars3Icon className="h-5 w-5" />{" "}
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-black hover:border-black">
            <XMarkIcon className="h-5 w-5" />{" "}
          </button>
        )}
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
      {/* <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
    </nav>
  );
};

export default Navbar;
