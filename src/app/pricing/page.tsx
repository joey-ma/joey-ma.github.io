import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joey Ma's Website",
  description: "Hire Joey Ma as a software engineer",
};

export default function PricingPage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Pricing />
    </>
  );
}
