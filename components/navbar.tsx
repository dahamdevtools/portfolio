"use client";

import { NAV_ITEM_TYPES } from "@/types/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS: { name: NAV_ITEM_TYPES; url: string }[] = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
  {
    name: "Skills",
    url: "#",
  },
  {
    name: "Experience",
    url: "#",
  },
  {
    name: "Education",
    url: "#",
  },
  {
    name: "Projects",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<NAV_ITEM_TYPES>("Home");

  return (
    <header className="w-full h-fit flex items-center justify-center p-3.5 fixed top-0 left-0">
      <nav className="w-fit h-fit flex items-center justify-center p-1.5 rounded-full overflow-hidden bg-white">
        <ul className="w-fit h-fit flex items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.url}
                onClick={() => setActiveItem(item.name)}
                className="w-fit h-10 relative flex items-center justify-center rounded-full px-6"
              >
                {activeItem === item.name && (
                  <motion.span
                    layoutId="nav-pill"
                    className="inset-0 absolute rounded-full bg-neutral-100"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
