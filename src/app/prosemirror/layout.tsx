"use client";

import { MDXProvider } from "@mdx-js/react";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 2,
  color: "#38bdf8",
  className: "bar-of-progress",
  delay: 100,
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

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
    <MDXProvider>
      <div className="">
        <div className="">
          <Header
            hasNav={true}
            navIsOpen={navIsOpen}
            onNavToggle={(isOpen) => setNavIsOpen(isOpen)}
            title=""
          />
        </div>
        <div className="max-w-8xl mx-auto">
          <div className="mx-4 py-4 lg:px-8 lg:mx-0">{children}</div>
        </div>
      </div>
    </MDXProvider>
  );
}
