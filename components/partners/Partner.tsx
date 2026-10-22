"use client";

import { motion } from "motion/react";

export default function Partner() {
    return (
        <main className="mx-7 mt-3 md:mx-12 md:mt-5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center justify-center gap-4"
            >
                <div className="w-full">
                    <div className="flex flex-col justify-between md:flex-row md:gap-10">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="my-2 text-3xl font-semibold leading-tight md:text-4xl"
                        >
                            Focusing on quality,
                            <span className="text-gray-400">
                                {" "}we maintain customer trust
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="my-5 text-xs leading-6 text-gray-600 md:max-w-sm md:text-sm"
                        >
                            We ensure that every installation we build meets strict
                            quality checks. We focus on sustainable solutions for an
                            environmentally friendly and renewable future.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}