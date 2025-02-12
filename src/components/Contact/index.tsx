import Link from "next/link";
import { ContactForm } from "./ContactForm";
import NewsLatterBox from "./NewsLatterBox";
import { linkTo } from "@/lib/constants";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Send a Message
              </h2>
              <div className="mb-12 grid gap-4 text-base font-medium text-body-color">
                <p>
                  I love GitHub! However, there are{" "}
                  <Link href={linkTo.gitHubPagesLimits} className="link-text">
                    limits
                  </Link>{" "}
                  to what one can do on GitHub Pages (as it is designed).
                  <br />
                  I&apos;ve implemented a serverless function to handle form
                  submissions, but it would not work with analytics/ad/cookie
                  blockers. (Your information is anonymous and never sold.)
                </p>
                <p>
                  <span className="font-semibold">
                    Feel free to proceed, or you can also send me a message on{" "}
                    <Link className="link-text" href={linkTo.LinkedIn}>
                      LinkedIn
                    </Link>
                  </span>
                  !
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
