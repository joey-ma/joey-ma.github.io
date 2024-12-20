"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={
            <>
              Flexible Solutions,
              <br />
              Tailored to Your Needs
            </>
          }
          paragraph={
            <>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                I offer custom web development and software engineering services
                designed to meet your unique project goals. Whether you’re
                looking for a simple website enhancement or a full-stack
                solution, I provide transparent pricing and flexible packages to
                fit your needs.{" "}
              </p>
              <br />
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Let’s collaborate and bring your vision to life!
              </p>
            </>
          }
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsSubscription(true)}
              className={`${
                isSubscription
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Subscription
            </span>
            <div
              onClick={() => setIsSubscription(!isSubscription)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isSubscription ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsSubscription(false)}
              className={`${
                isSubscription
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Job
            </span>
          </div>
        </div>

        {isSubscription ? (
          <>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              <PricingBox
                packageName="Lite"
                price="200"
                duration="mo"
                subtitle="Ideal for keeping your website running smoothly."
              >
                <OfferList
                  text="Basic feature updates and minor bug fixes"
                  status="active"
                />
                <OfferList text="Performance monitoring" status="inactive" />
                <OfferList text="Marketing analytics" status="inactive" />
                <OfferList
                  text="Priority support via email, chat, and phone"
                  status="inactive"
                />
              </PricingBox>
              <PricingBox
                packageName="Basic"
                price="500"
                duration="mo"
                subtitle="Perfect for ongoing improvements and optimizations."
              >
                <OfferList
                  text="Monthly updates and enhancements"
                  status="active"
                />
                <OfferList text="Performance monitoring" status="active" />
                <OfferList text="Marketing analytics" status="inactive" />
                <OfferList
                  text="Priority support via email, chat, and phone"
                  status="inactive"
                />
              </PricingBox>
              <PricingBox
                packageName="Plus"
                price="1000"
                duration="mo"
                subtitle="Comprehensive service for evolving needs."
              >
                <OfferList
                  text="Continuous feature development & enhancements"
                  status="active"
                />
                <OfferList text="Performance monitoring" status="active" />
                <OfferList text="Marketing analytics" status="active" />
                <OfferList
                  text="Priority support via email, chat, and phone"
                  status="active"
                />
              </PricingBox>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              <PricingBox
                packageName="Lite"
                price={"500"}
                duration={"job"}
                subtitle="Perfect for small tasks, bug fixes, or quick updates."
              >
                <OfferList
                  text="1-2 minor tasks or bug fixes"
                  status="active"
                />
                <OfferList text="Delivery within 1 week" status="active" />
                <OfferList
                  text="Email support for 7 days post-delivery"
                  status="active"
                />
              </PricingBox>
              <PricingBox
                packageName="Basic"
                price={"2000"}
                duration={"job"}
                subtitle="Ideal for medium-sized projects or feature implementations."
              >
                <OfferList
                  text="Custom feature development or enhancement"
                  status="active"
                />
                <OfferList text="Delivery within 2-3 weeks" status="active" />
                <OfferList
                  text="Email and chat support for 14 days post-delivery"
                  status="active"
                />
              </PricingBox>
              <PricingBox
                packageName="Plus"
                price={isSubscription ? "1000" : "5000"}
                duration={isSubscription ? "mo" : "job"}
                subtitle="Designed for complex projects or full website builds"
              >
                <OfferList
                  text="Full-stack development or complex integrations"
                  status="active"
                />
                <OfferList
                  text="Delivery timeline based on project scope"
                  status="active"
                />
                <OfferList
                  text="30 days of priority support post-delivery"
                  status="active"
                />
              </PricingBox>
            </div>
          </>
        )}

        {/* Background Graphic */}
        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
