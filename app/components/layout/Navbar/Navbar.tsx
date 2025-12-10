"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { navigationItems } from "@/app/data/NavData";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const navVariants = {
    transparent: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      // borderBottom: "1px solid rgba(255, 255, 255, 0)",
    },
    solid: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      // borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };


  // ===================
  // Mobile sub menu dropdown
  // =====================
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };


  return (
    <motion.nav
      variants={navVariants}
      animate={isScrolled ? "solid" : "transparent"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6"
    >
      <div
        className={`max-w-[1360px] mx-auto ${pathname === "/" ? "bg-transparent" : "bg-black"
          } ${isMobileMenuOpen ? "rounded-none" : "rounded-full"}`}
      >
        <div className="flex items-center justify-between py-5 min-h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                isScrolled && pathname === "/"
                  ? "/assets/logo/ArtificizenLogo.png" // Logo after scroll
                  : "/assets/logo/Artificizen-logo.svg" // Logo before scroll
              }
              alt="Artificizen Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center space-x-1 text-sm font-bold transition-colors px-4 py-3 rounded-4xl hover:bg-white
                    ${pathname === "/"
                      ? isScrolled
                        ? "text-[var(--text-primary-color)] hover:text-white hover:!bg-black"
                        : "text-white hover:text-[var(--text-primary-color)]"
                      : "text-[var(--text-primary-color)] hover:text-white hover:!bg-black"
                    }
                  `}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <motion.div
                    >
                      <MdOutlineArrowDropDown className="w-4 h-4 -rotate-40" />
                    </motion.div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2"
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="hidden md:flex items-center justify-center px-6 py-2 rounded-full relative overflow-hidden group border-2 border-transparent bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] bg-clip-border"
              style={{
                background: `linear-gradient(${isScrolled ? "white" : "transparent"
                  }, ${isScrolled ? "white" : "transparent"
                  }) padding-box, linear-gradient(90deg, #0B5CFF99, #FF710C) border-box`,
                color: isScrolled ? "#000" : "#fff",
              }}
            >
              <span className="relative z-10 font-medium text-sm transition-colors group-hover:text-white">
                HIRE US
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
    lg:hidden p-2 rounded-md transition-colors
    ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"}
  `}
            >
              {isMobileMenuOpen ? (
                <HiX
                  className={`w-6 h-6 ${isScrolled && isHomePage ? "text-black" : "text-white"
                    }`}
                />
              ) : (
                <HiMenu
                  className={`w-6 h-6 ${isScrolled && isHomePage ? "text-black" : "text-white"
                    }`}
                />
              )}
            </button>

            {/* <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                lg:hidden p-2 rounded-md transition-colors
                ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"}
              `}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <HiMenu className="w-6 h-6 text-white" />
              )}
            </button> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-scroll bg-white rounded-lg shadow-lg mt-2 mb-4  max-h-[80vh]"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {/* Parent Item (with dropdown toggle) */}
                    <div
                      onClick={() => item.hasDropdown ? toggleDropdown(item.label) : setIsMobileMenuOpen(false)}
                      className="flex justify-between items-center px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>

                      {/* Dropdown Arrow */}
                      {item.hasDropdown && (
                        <motion.span
                          animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          ▼
                        </motion.span>
                      )}
                    </div>

                    {/* Dropdown Items */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-muted/50"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="px-4 pt-4">
                  <Link
                    href="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#0B5CFF99] to-[#FF710C] text-white rounded-full font-medium text-sm hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">HIRE US</span>

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}
