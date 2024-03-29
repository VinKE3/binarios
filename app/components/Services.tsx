import React from "react";
import Image from "next/image";

const servicesContent = {
  heading: {
    headingSubTitle: "Our Awesome Services",
    headingTtitle: "Services We Provide",
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
  },
  items: [
    {
      id: 1,
      icon: "/images/icon-1.svg",
      title: "Child Safety Solutions",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      id: 2,
      icon: "/images/icon-2.svg",
      title: "Elderly Care Monitoring",
      description:
        "Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.",
    },
    {
      id: 3,
      icon: "/images/icon-3.svg",
      title: "Home Fire Safety",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      id: 4,
      icon: "/images/icon-4.svg",
      title: "Financial Planning",
      description:
        "Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security.",
    },
    {
      id: 5,
      icon: "/images/icon-5.svg",
      title: "Personal Safety Devices",
      description:
        "Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.",
    },
    {
      id: 6,
      icon: "/images/icon-6.svg",
      title: "Insurance Coverage",
      description:
        "Tailored insurance policies to protect your family's financial future, including life insurance, health insurance, and property insurance.",
    },
  ],
};
const Services = () => {
  return (
    <div className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          {servicesContent.heading.headingSubTitle && (
            <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10">
              {servicesContent.heading.headingSubTitle}
            </span>
          )}
          {servicesContent.heading.headingTtitle && (
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
              {servicesContent.heading.headingTtitle}
            </h2>
          )}
          {servicesContent.heading.description && (
            <p className="text-body leading-relaxed">
              {servicesContent.heading.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesContent.items.map(({ id, icon, title, description }) => {
            return (
              <div key={id} className="flex space-x-10">
                <div className="w-14 shrink-0">
                  <span className="inline-flex items-center justify-center p-2 w-[70px] rounded-lg bg-white shadow-2xl">
                    <Image src={icon} alt={title} width={62} height={62} />
                  </span>
                </div>
                <div>
                  {title && (
                    <h3 className="text-heading font-bold text-md mb-3">
                      {title}
                    </h3>
                  )}
                  {description && (
                    <p className="text-body leading-relaxed">{description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
