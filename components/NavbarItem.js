import React from "react";
import Link from "next/link";

export default function NavbarItem({ Icon, title }) {
  return (
    <div className="flex flex-row hover:text-blue-600 mr-4 cursor-pointer">
      <Icon className="h-8 mb-1 mr-1 items-center" />
      <Link href="/">
        <a className="lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 font-bold items-center justify-center">
          {title}
        </a>
      </Link>
    </div>
  );
}
