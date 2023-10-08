"use client";
import { usePathname } from "next/navigation";
import Router from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import routes from "./routes";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const routeMap = routes[pathNames[1]] || [];

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
      <Header
        hasNav={true}
        navIsOpen={navIsOpen}
        onNavToggle={(isOpen) => setNavIsOpen(isOpen)}
        title={pathNames[2]}
        section={pathNames[1]}
      />
      <div className="">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
            <nav className="lg:text-sm lg:leading-6 relative" id="nav">
              <ul>
                {routeMap.length > 0 &&
                  routeMap.map((r, r_index) => {
                    return (
                      <li key={r_index} className="mt-12 lg:mt-8">
                        <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200 hover:text-sky-600">
                          <Link href={r.href}>{r.title}</Link>
                        </h5>

                        {r.children && (
                          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                            {r.children.map((rr, rr_index) => {
                              return (
                                <li key={rr_index}>
                                  <Link
                                    href={rr.href}
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                  >
                                    {rr.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </nav>
          </div>
          <div className="lg:pl-[19.5rem] document">
            <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
              <MDXProvider>{children}</MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
