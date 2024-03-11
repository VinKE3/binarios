import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";

const footerContent = {
  about: {
    logo: "/logo.svg",
    description:
      "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with.",
    cta: {
      href: "#_",
      label: "Learn more about us",
    },
  },
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          id: 1,
          href: "#_",
          label: "Home",
        },
        {
          id: 2,
          href: "#_",
          label: "How we work",
        },
        {
          id: 3,
          href: "#_",
          label: "Our mission",
        },
        {
          id: 4,
          href: "#_",
          label: "About us",
        },
        {
          id: 5,
          href: "#_",
          label: "Careers",
        },
        {
          id: 6,
          href: "#_",
          label: "Contact us",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          id: 7,
          href: "#_",
          label: "Blog",
        },
        {
          id: 8,
          href: "#_",
          label: "Support",
        },
        {
          id: 9,
          href: "#_",
          label: "Terms & Conditions",
        },
        {
          id: 10,
          href: "#_",
          label: "Privacy Policy",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
    address: {
      street: "23 Main Street, Cityville, State, Zip Code",
      phone: "+123 456 7890",
      website: "www.yourwebsite.com",
    },
  },
  copyright: {
    label1: "Copyright 2024. Designed with",
    label2: "by VinKe. All rights reserved.",
  },
};
const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={footerContent.about.logo}
                alt="Logo"
                width={155}
                height={30}
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {footerContent.about.description}
            </p>
            <p>
              <Link
                href={footerContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-primary group"
              >
                <span>{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                  <BiChevronRight className="text-lg" />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink) => (
                <div key={footerLink.heading}>
                  <h3 className="text-heading font-semibold mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link) => (
                      <li key={link.id} className="mb-3">
                        <Link
                          href={link.href}
                          className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary"
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-primary text-xl" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-primary text-xl" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiMiniGlobeAmericas className="text-primary text-xl" />
                <span>{footerContent.contact.address.website}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          <p>
            {footerContent.copyright.label1}
            <HiMiniHeart className="text-red-600  inline-block" />
            {footerContent.copyright.label2}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
