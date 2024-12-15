"use client";
import React from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/lib/useMobile";
import ContactModal from "../modal/ContactModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Store" },
  { href: "/about-us", label: "About Us" },
];

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="container-body py-4 flex justify-between items-center shadow-nav">
      <Link href="/" className="font-graphik text-4xl font-bold">
        BRIKO
      </Link>

      {isMobile ? (
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify size={28} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="font-graphik text-4xl font-bold">
                    BRIKO
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-graphik text-lg font-regular"
                  >
                    {link.label}
                  </Link>
                ))}

                <ContactModal />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-graphik text-lg font-regular"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ContactModal />
        </>
      )}
    </header>
  );
};

export default Header;
