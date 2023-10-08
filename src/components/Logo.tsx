import clsx from "clsx";
import type { IClassName } from "@/utils/types";

export function Logo({ className, ...props }: IClassName) {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 208.1 238.0"
        className={clsx("text-slate-900 dark:text-white", className)}
        {...props}
      >
        <path
          d="M104 2C47.6 2 2 47.6 2 104s45.6 102 102 102 102-45.6 102-102S160.3 2 104 2z"
          fill="#ffffff"
        />
        <path d="M147.1 92.7c-6.9 83.9 10.8 103.4 10.8 103.4s-55.1 5.5-82.7-13.4c-30.5-20.9-26-67.5-25.9-94.6.1-28.4 25.6-45.8 49.9-45.3 29.1.5 50.2 21.6 47.9 49.9z" />
        <path
          d="M82.1 139.5c12.2 33.3 22.5 42.7 40.0 55.2 25.3 18.0 36.6 17.5 76.3 41.0-38.3-36.0-85.6-50.6-116.4-96.3z"
          fill="#ffffff"
        />
        <path d="M82.1 139.5c3 13.3 17.9 29.9 30.4 41.6 24.8 23.2 42 22.4 86 54.7-18.2-51.8-18.8-62-43.5-106.1-24.7-44-67.6-20.3-67.6-20.3S79 126 82.1 139.3z" />
        <path
          d="M108.9 76s-4-11.6-18-11.5c-30 .2-28.8 52.1 16.9 52 39.6-.1 39.2-49.4 16.1-49.6-10.2-.2-15 9.1-15 9.1z"
          fill="#ffffff"
        />
        <path d="M109.4 95c10.8 0 2 14.9-.6 20.9-1.8-8.4-10.2-20.9.6-20.9zM93.1 80.1c-5.6 0-10.2 4.5-10.2 10.2 0 5.6 4.5 10.2 10.2 10.2 5.6 0 10.2-4.5 10.2-10.2 0-5.6-4.5-10.2-10.2-10.2zm30.5-.1c-4.8 0-8.8 4.5-8.8 10.2 0 5.6 3.9 10.2 8.8 10.2 4.8 0 8.8-4.5 8.8-10.2 0-5.6-3.9-10.2-8.8-10.2z" />
      </svg>
      <span className="hidden text-base font-bold lg:inline">
        ProseMirror·中文文档
      </span>
    </div>
  );
}
