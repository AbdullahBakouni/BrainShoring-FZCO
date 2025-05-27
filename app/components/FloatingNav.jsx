"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Cog, House, Info, Mail } from "lucide-react";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true); // always visible at first
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastY;

    if (direction > 0) {
      // scrolling down
      setVisible(false);
    } else if (direction < 0) {
      // scrolling up
      setVisible(true);
    }

    setLastY(current);
  });

  const getIcon = (name) => {
    switch (name) {
      case "Home":
        return <House size={18} />;
      case "About Us":
        return <Info size={18} />;
      case "Contact":
        return <Mail size={18} />;
      case "Services":
        return <Cog size={18} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            <span className="block sm:hidden">{getIcon(navItem.name)}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
