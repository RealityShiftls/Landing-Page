"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Sprout,
  Mountain,
  Zap,
} from "lucide-react";

const droneCategories = [
  {
    icon: Sprout,
    title: "Agri-tech Services",
    description:
      "Precision mapping, crop spraying, disease detection, orchard mapping and aerial data services.",
  },
  {
    icon: Mountain,
    title: "Drone Mining Services",
    description:
      "Surveying, stockpile measurements, pit wall inspections, blast monitoring and environmental monitoring.",
  },
  {
    icon: Zap,
    title: "Drone Powerline Services",
    description:
      "Line inspections, thermal scanning, vegetation management and corridor mapping.",
  },
];

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function More() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="my-12">
      <section
        id="drone-solutions"
        className="mx-6 overflow-hidden rounded-3xl bg-gray-50 md:mx-12"
      >
        <div className="grid items-center gap-10 p-6 md:grid-cols-2 md:p-12">
          {/* Animated Drone Image */}
          <motion.div
            variants={imageVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[280px] overflow-hidden rounded-2xl md:h-[520px]"
          >
            <Image
              src="/drone.jpg"
              alt="Drone technology for agriculture, mining and powerline services"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Animated Content */}
          <motion.div
            variants={contentVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-4"
          >
            <motion.p
              variants={itemVariants}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e466b]"
            >
              Advanced Drone Solutions
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            >
              Trusted drone services,
              <span className="text-gray-400">
                {" "}for your industry's needs.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-5 leading-7 text-gray-600"
            >
              We use drone technology to help businesses collect
              accurate data, monitor assets and make informed
              decisions. From agricultural fields to mining
              operations and powerline infrastructure, our
              solutions support safer and smarter work.
            </motion.p>

            {/* Staggered Service Categories */}
            <motion.div
              variants={contentVariants}
              className="mt-8 space-y-6"
            >
              {droneCategories.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e466b]/10 text-[#1e466b]">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}