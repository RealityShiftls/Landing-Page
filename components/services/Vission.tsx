
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Eye, Target } from "lucide-react";

const statements = [
  {
    id: "vision",
    label: "Our Vision",
    title: "Shaping the future through innovation.",
    description:
      "To pioneer the future of technology by creating innovative projects that transform ideas into impactful solutions, fostering a world where imagination and technology drive progress and enrich lives.",
    image: "/vission.jpg",
    alt: "Digital globe representing global technology and innovation",
    icon: Eye,
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Turning ideas into real-world solutions.",
    description:
      "At RealityShift Technology, our mission is to develop forward-thinking software, drone systems and hardware solutions that address real-world challenges, improve efficiency and support sustainable growth.",
    image: "/ai.jpg",
    alt: "Artificial intelligence and digital systems representing technological development",
    icon: Target,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#67baf4]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#1e466b]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#67baf4]/40 bg-[#67baf4]/10 px-4 py-2 text-sm font-semibold text-[#1e466b]">
            <span className="h-2 w-2 rounded-full bg-[#67baf4]" />
            What Drives Us
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#1e466b] sm:text-4xl md:text-5xl">
            Our Vision &{" "}
            <span className="text-[#67baf4]">Mission</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            We believe technology should do more than advance. It should
            create meaningful change for businesses, industries and people.
          </p>
        </motion.div>

        {/* Vision and Mission cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {statements.map((statement) => {
            const Icon = statement.icon;

            return (
              <motion.article
                key={statement.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#1e466b]/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#1e466b]/5 sm:h-80">
                  <Image
                    src={statement.image}
                    alt={statement.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102c45]/75 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1e466b] shadow-lg">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="text-xl font-bold text-white sm:text-2xl">
                      {statement.label}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6 sm:p-8 md:p-10">
                  <h3 className="max-w-md text-2xl font-bold leading-snug text-[#1e466b] sm:text-3xl">
                    {statement.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {statement.description}
                  </p>

                  <div className="mt-7 h-1 w-16 rounded-full bg-[#67baf4] transition-all duration-300 group-hover:w-24" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1e466b] p-7 text-white sm:p-9 md:flex-row md:items-center"
        >
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Let's build what comes next.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Have an idea worth bringing to life? Let's explore how we can
              make it happen.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#67baf4] px-5 py-3 font-semibold text-[#102c45] transition-colors hover:bg-white"
          >
            Start a Conversation
            <ArrowUpRight size={19} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
