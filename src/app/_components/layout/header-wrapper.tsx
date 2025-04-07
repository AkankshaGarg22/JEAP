// src/components/ConditionalWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  console.log(pathname);
  const hideOnRoutes = "case-studies";
  if (pathname && pathname.includes(hideOnRoutes)) return null;

  return <Header></Header>;
}
