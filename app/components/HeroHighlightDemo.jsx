"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import Link from "next/link";


export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Ready to launch your next{" "}
        <Highlight className="text-black dark:text-white">
          big idea?
        </Highlight>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, 0] }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="text-lg text-neutral-600 dark:text-neutral-300 mt-6 text-center max-w-2xl mx-auto"
      >
        From apps to AI tools, we’ve got you covered. Let’s build something great together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-8"
      >
        <Link
          href="/contact"
          className="bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition shadow-md"
        >
          Contact Us Now
        </Link>
      </motion.div>
    </HeroHighlight>
  );
}
