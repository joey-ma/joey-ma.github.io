import Link from "next/link";

export const sectionOne = {
  title: "Empathetic Engineer",
  description: (
    <>
      <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
        As a Software Engineer who has worked in music, sales, and banking
        before, I enjoy working with a dynamic team with engineers of all
        experience levels who help each other build and grow technical and
        leadership skills while creating, deploying, and supporting production
        applications.
      </p>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        I&apos;ve left off the non-technical experiences, but you can find my
        resume{" "}
        <Link
          href="/pdfs/1.3.0-joey-ma-resume.pdf"
          target="_blank"
          className="link-text"
        >
          here
        </Link>
        .
      </p>
    </>
  ),
};

export const sectionTwo = [
  {
    title: "Iterative development",
    description:
      "Work with the project team to validate goals and requirements, and provide input towards practical solutions, innovations, and estimation of effort and time",
  },
  {
    title: "Bug free code",
    description:
      "Write, test, refactor, and optimize code to achieve high benchmarks for performance, and strive to make quality assurance a top priority",
  },
  {
    title: "Lifelong learner",
    description:
      "Keep up-to-date with emerging technologies and patterns, and support the development of standards and processes that contribute to an environment of continual improvement",
  },
];

export const sectionThree = [
  {
    title: "Comprehensive support",
    description:
      "Support the planning, development, testing, and delivery/deployment of solid, structured, and standards-compliant web and mobile interfaces",
  },
  {
    title: "On the same page",
    description:
      "Understand clients needs and requirements, and the technical opportunities and challenges that exist within their categories.",
  },
  {
    title: "On the same team",
    description:
      "Participate in project ideation sessions, workshops, and roadmapping, collaborating in strategic planning that drives innovation from a development perspective",
  },
];
