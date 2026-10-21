
import React from "react";
import { Sprout, Code, Cpu } from "lucide-react";

const services = [
  {
    icon: Sprout,
    name: "AI Solutions",
    description: "Smart AI systems designed to solve real-world problems.",
  },
  {
    icon: Code,
    name: "Software Development",
    description: "Custom websites and applications built for your business.",
  },
  {
    icon: Cpu,
    name: "Drone Solutions",
    description: "Connected hardware and software built to work together.",
  },
];

export default function ServiceCard() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="rounded-xl border border-white/20 bg-white/40 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-700">
              <Icon size={24} />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {item.name}
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
