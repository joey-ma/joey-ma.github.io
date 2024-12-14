import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Connect!",
  description:
    "Have a question, want to collaborate, or hire me? Feel free to reach out!",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Let's Connect!"
        description="Have a question, want to collaborate, or hire me? Feel free to reach out!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
