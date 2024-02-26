"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";

const navigationMenu = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/",
    label: "How we Work",
  },
  {
    id: 3,
    href: "/",
    label: "Our Mision",
  },
  {
    id: 4,
    href: "/",
    label: "About",
  },
  {
    id: 5,
    href: "/",
    label: "Contact",
  },
];
const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const mobileNavHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    // Aquí, simplemente devolvemos la función de limpieza sin proporcionar ningún argumento
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} alt="logo" width={100} height={100} />
              </Link>
            </div>
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                className="px-4 py-5 bg-primary text-white rounded-lg hidden lg:inline-block"
                href="/"
              >
                Get Started
              </Link>
              <button onClick={mobileNavHandler} className="block lg:hidden">
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileNavHandler}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3"
              onClick={mobileNavHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
