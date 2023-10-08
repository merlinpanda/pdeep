import Link from "next/link";

export default function SideNav() {
  return (
    <>
      <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
        <nav id="nav" className="lg:text-sm lg:leading-6 relative">
          <ul>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                Getting Started
              </h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li>
                  <Link
                    href="/"
                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
