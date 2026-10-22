"use client";

import { motion } from "motion/react";
import {
  Sprout,
  Mountain,
  Zap,
  Code,
  ArrowUpRight,
  ScanSearch,
  Droplets,
  Map,
  Trees,
  Bug,
  FileBarChart,
  Plane,
  Pickaxe,
  Ruler,
  ShieldCheck,
  Activity,
  Leaf,
  HardHat,
  Globe,
  Database,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Sprout,
    name: "Agri-tech Services",
    description:
      "Smart drone technology and data-driven solutions for modern agriculture.",
    items: [
      { icon: Map, name: "Precision Mapping" },
      { icon: Plane, name: "Crop Spraying" },
      { icon: Trees, name: "Fruit Tree Stock Counting & Orchard Mapping" },
      { icon: Bug, name: "Pest & Disease Detection" },
      { icon: FileBarChart, name: "Data Field Reporting" },
      { icon: ScanSearch, name: "Aerial Data Services" },
      { icon: Droplets, name: "Underground Water Detection" },
    ],
  },
  {
    icon: Mountain,
    name: "Drone Mining Services",
    description:
      "Aerial surveying and monitoring solutions for mining operations.",
    items: [
      { icon: Pickaxe, name: "Exploration" },
      { icon: Map, name: "Survey & Mapping" },
      { icon: Mountain, name: "Stockpile Measurement" },
      { icon: Ruler, name: "Volumetric Measurements" },
      { icon: ScanSearch, name: "Pit Wall & Highwall Inspection" },
      { icon: Activity, name: "Blast Planning & Monitoring" },
      { icon: ShieldCheck, name: "Safety & Security" },
      { icon: Leaf, name: "Environmental Monitoring" },
    ],
  },
  {
    icon: Zap,
    name: "Drone Powerline Services",
    description:
      "Drone-based inspection and mapping for powerline maintenance and infrastructure management.",
    items: [
      { icon: ScanSearch, name: "Powerline Inspection" },
      { icon: Activity, name: "Thermal & Heat Scanning" },
      { icon: Trees, name: "Vegetation Management" },
      { icon: HardHat, name: "Construction & Maintenance" },
      { icon: Map, name: "Corridor Mapping" },
    ],
  },
  {
    icon: Code,
    name: "Digital Services",
    description:
      "Modern digital solutions that help businesses improve efficiency and grow.",
    items: [
      { icon: Globe, name: "Website Development" },
      { icon: Database, name: "Automated Data Systems" },
      { icon: Smartphone, name: "Mobile & Web App Development" },
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ServiceCard() {
  return (
    <section
      id="services"
      className="px-6 py-16 md:px-12 md:py-24"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e466b]">
          What We Do
        </p>

        <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
          Our Services
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
          From intelligent drone solutions to custom digital systems, we
          deliver technology that helps industries work smarter and make
          better decisions.
        </p>
      </motion.div>

      {/* Animated Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-[#67baf4] hover:shadow-xl"
            >
              {/* Service Icon */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ duration: 0.2 }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e466b]/10 text-[#1e466b] transition-colors group-hover:bg-[#1e466b] group-hover:text-white"
              >
                <Icon size={28} strokeWidth={1.8} />
              </motion.div>

              {/* Service Heading */}
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.name}
              </h3>

              <p className="mb-6 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              {/* Individual Services */}
              <ul className="flex-1 space-y-3 border-t border-gray-100 pt-5">
                {service.items.map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="flex items-start gap-3 text-sm leading-5 text-gray-700"
                    >
                      <ItemIcon
                        size={17}
                        className="mt-0.5 shrink-0 text-[#1e466b]"
                      />

                      <span>{item.name}</span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Call to Action */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-[#1e466b] transition-colors hover:text-[#67baf4]"
              >
                Enquire About This Service

                <motion.span
                  whileHover={{ x: 3, y: -3 }}
                  className="inline-flex"
                >
                  <ArrowUpRight size={17} />
                </motion.span>
              </a>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}