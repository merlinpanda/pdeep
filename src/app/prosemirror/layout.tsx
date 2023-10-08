"use client";

import Router from "next/router";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (!navIsOpen) return;
    function handleRouteChange() {
      setNavIsOpen(false);
    }
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [navIsOpen]);

  return (
    <div className="">
      <div className="">
        <Header
          hasNav={true}
          navIsOpen={navIsOpen}
          onNavToggle={(isOpen) => setNavIsOpen(isOpen)}
          title="Hi there!"
        />
      </div>
      <div className="py-4 document">{children}</div>
    </div>
  );
}
