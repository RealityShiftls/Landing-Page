"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Cpu,
  Code2,
  Plane,
  CheckCircle2,
} from "lucide-react";



const highlights = [
  "Solutions built around practical needs",
  "Software and hardware working together",
  "Technology focused on real-world impact",
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-gray-100 sm:min-h-[460px]">
            <Image
              src="/about.jpg"
              alt="Technology and innovation in action"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102c45]/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                Our Approach
              </p>
              <h3 className="mt-2 max-w-sm text-2xl font-semibold leading-tight md:text-3xl">
                Turning ideas into practical technology.
              </h3>
            </div>
          </div>

          {/* Decorative accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-4 -right-3 -z-10 h-28 w-28 rounded-3xl bg-[#67baf4]/30 md:-bottom-6 md:-right-6 md:h-40 md:w-40"
          />
        </motion.div>

        {/* Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#1e466b]"
          >
            About RealityShift
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            We build technology that solves{" "}
            <span className="text-[#1e466b]">real problems.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base leading-7 text-gray-600"
          >
            RealityShift is a technology-focused company bringing software,
            drone systems and hardware innovation together. We aim to help
            businesses work more efficiently through practical, modern and
            reliable technology solutions.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-7 space-y-3"
          >
            {highlights.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3 text-sm text-gray-700 md:text-base"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#1e466b]"
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8"
          >
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#1e466b] px-5 py-3 font-medium text-white transition-colors hover:bg-[#295b86]"
            >
              Explore Our Services
              <ArrowUpRight
                size={19}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Capabilities */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mx-auto mt-20 grid max-w-7xl gap-5 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3"
      >
      </motion.div>
    </section>
  );
}