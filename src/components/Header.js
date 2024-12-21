"use client";

import Link from "next/link";
import { Github, Home } from "@/components/Icons";
import { usePathname } from "next/navigation";

function Header() {
  let isHomePage = usePathname() === "/";

  return (
    <header className="w-full px-12 py-8 absolute flex justify-between">
      {!isHomePage && (
        <>
          <Link href="/">
            <Home />
          </Link>
          <Link href="https://github.com/chaveamin/components" target="_blank">
            <Github />
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
