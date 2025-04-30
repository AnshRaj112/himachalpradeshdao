"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notifications", href: "/notifications", dropdown: [
      { label: "State Govt.", href: "/notifications/circulars" },
      { label: "Central Govt.", href: "/notifications/events" },
      { label: "DAO", href: "/notification/DAO"},
    ] 
  },
  { label: "Books", href: "/books", dropdown: [
      { label: "E-Books", href: "/books/ebooks" },
      { label: "Hardcover", href: "/books/hardcover" },
    ] 
  },
  { label: "RTI", href: "/rti", dropdown: [
      { label: "Apply RTI", href: "/rti/apply" },
      { label: "RTI Status", href: "/rti/status" },
    ] 
  },
  { label: "Association", href: "/association", dropdown: [
      { label: "Our Team", href: "/association/team" },
      { label: "Membership", href: "/association/membership" },
    ] 
  },
  { label: "Member", href: "/member", dropdown: [
      { label: "Member Benefits", href: "/member/benefits" },
      { label: "Renew Membership", href: "/member/renew" },
    ] 
  },
  { label: "Links", href: "/links" },
  { label: "Archives", href: "/archives", dropdown: [
      { label: "Newsletters", href: "/archives/newsletters" },
      { label: "Past Events", href: "/archives/events" },
    ] 
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Member Login", href: "/auth/login" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#708090] text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-4 md:px-10 py-3 relative">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-all duration-300">
          Logo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {/* Main Link */}
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-all duration-300">
                {!item.dropdown ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {/* Dropdown */}
              {item.dropdown && (
                <div
                  className="hidden group-hover:block absolute left-0 mt-2 bg-[#708090] text-white rounded-lg shadow-lg min-w-[180px] overflow-hidden transition-all duration-300"
                >
                  <ul className="py-2">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden z-[60]">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-[300px] bg-[#708090] text-white p-6 flex flex-col space-y-4 z-50 shadow-2xl overflow-y-auto no-scrollbar"
            >
              {/* Menu Items */}
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="w-full flex justify-between items-center text-lg font-semibold py-2 hover:text-gray-300 transition-all duration-300">
                    {!item.dropdown ? (
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.dropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 overflow-hidden space-y-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-1 hover:text-gray-300 transition-all duration-300"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}