import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col items-center bg-white left-0 py-6 w-full absolute top-[78px] z-20 border-gray-50 border-b shadow-md">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default MenuOverlay;
