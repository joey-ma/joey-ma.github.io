"use client";

import { linkTo } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { validateForm } from "@/lib/utils";

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const flagEnabled = useFeatureFlagEnabled("serverless-fn");

  const sendMessage = async () => {
    const queryString = new URLSearchParams(formData).toString();
    const apiRoute = `/api/contact?${queryString}`;
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_S_FN_BASE_URL + apiRoute,
        { method: "POST" },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { error } = await response.json();
      if (!error) alert("Your message has been set successfully");
      else alert(error);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      return;
    }
  };

  const redirectToLinkedIn = () => {
    setTimeout(() => {
      setLoading(false);
      alert(
        `You may have analytics/ad/cookie blocker(s) on.
        Your message has not been saved.
        You will be redirected to Joey's LinkedIn Profile.`,
      );
      router.push(linkTo.LinkedIn);
    }, 500);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // validate form data
    const error = validateForm(formData);
    if (error) {
      alert(error);
      setLoading(false);
      return;
    }

    if (flagEnabled) {
      await sendMessage();
    } else {
      redirectToLinkedIn();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Message"
              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}
