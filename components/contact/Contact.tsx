"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@realityshift.com",
    href: "mailto:info@realityshift.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Add your business number",
    href: "",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lesotho",
    href: "",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="bg-gray-50 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1e466b]">
            Get In Touch
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-[#1e466b]">great together.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
            Have a project in mind or need a technology solution for your
            business? Tell us what you need, and let&apos;s start the
            conversation.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#1e466b] p-7 text-white md:p-10"
          >
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Reach out to discuss your ideas, ask a question or request a
              quote for our services.
            </p>

            <div className="mt-10 space-y-7">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-white/60">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words text-sm transition-colors hover:text-[#67baf4]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 break-words text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 border-t border-white/15 pt-6">
              <p className="text-sm font-medium">
                Software. Hardware. Integrated.
              </p>
              <p className="mt-2 text-xs leading-5 text-white/60">
                Technology solutions designed to help businesses move forward.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:p-10"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Send Us an Enquiry
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill in the details below.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-center"
                role="status"
              >
                <CheckCircle2
                  size={36}
                  className="mx-auto text-green-600"
                />
                <h4 className="mt-3 font-semibold text-gray-900">
                  Form completed
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  This is a demo confirmation. Your enquiry has not been sent
                  yet.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-[#1e466b] hover:underline"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#1e466b] focus:ring-2 focus:ring-[#1e466b]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#1e466b] focus:ring-2 focus:ring-[#1e466b]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#1e466b] focus:ring-2 focus:ring-[#1e466b]/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Agri-tech Services</option>
                    <option>Drone Mining Services</option>
                    <option>Drone Powerline Services</option>
                    <option>Website Development</option>
                    <option>Mobile & Web Applications</option>
                    <option>Hardware & IoT</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a little about your project..."
                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#1e466b] focus:ring-2 focus:ring-[#1e466b]/10"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e466b] px-5 py-3.5 font-medium text-white transition-colors hover:bg-[#295b86] sm:w-auto"
                >
                  Send Enquiry
                  <Send
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-xs leading-5 text-gray-500">
                  Submitting currently displays a demo confirmation only.
                  Email delivery will need to be connected.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}