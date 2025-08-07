"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname === "/form") {
    return null;
  }

  return <Navigation />;
}
