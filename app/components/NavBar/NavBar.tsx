"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Search } from "@/app/components/Search/Search";
import Logo from "@/app/components/svgs/Logo/Logo";
import Link from "next/link";
import { useActivePath } from "@/app/components/NavBar/useActivePath";
import TmdbLogo from "@/app/components/svgs/TmdbLogo/TmdbLogo";

type NavigationItem = {
  href: string;
  name?: string;
};

export const NavBar: React.FC = () => {
  const isActivePath = useActivePath();

  const navigation: NavigationItem[] = [
    { href: "/discover", name: "Discover" },
  ];

  return (
    <Navbar isBordered maxWidth="full" className="mb-5">
      <NavbarContent justify="start">
        <Link href="/">
          <NavbarBrand>
            <Logo />
            <p
              className={
                isActivePath("/")
                  ? "hidden sm:block font-bold text-inherit mx-1 text-dracula-purple"
                  : "hidden sm:block text-inherit mx-1 text-dracula-purple"
              }
            >
              Dog
              <span
                className={
                  isActivePath("/") ? "text-dracula-pink" : "text-dracula-pink"
                }
              >
                DB
              </span>
            </p>
          </NavbarBrand>
        </Link>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <NavbarItem
              className={
                isActivePath(item.href)
                  ? "text-dracula-pink font-bold"
                  : "text-dracula-purple"
              }
            >
              Discover
            </NavbarItem>
          </Link>
        ))}
      </NavbarContent>
      <NavbarContent className="w-full">
        <Search />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem></NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
