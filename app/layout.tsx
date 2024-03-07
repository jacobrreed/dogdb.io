import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Roboto } from "next/font/google";
import { NavBar } from "@/app/components/NavBar/NavBar";
import Link from "next/link";
import TmdbLogo from "@/app/components/svgs/TmdbLogo/TmdbLogo";
import { Divider } from "@nextui-org/react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DogDB.io",
  description:
    "DogDB.io is a movie database website for dog friendliness rating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-background`}>
        <Providers>
          <NavBar />
          <div className="mx-auto">{children}</div>
          <div className="mt-4">
            <Divider />
            <footer className="bg-gray-800 p-1 text-center text-white flex items-center justify-center">
              <p className="mr-2">Powered by</p>
              <Link href="https://www.themoviedb.org/">
                <TmdbLogo />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
