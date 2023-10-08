import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import clsx from "clsx";

export interface IPopoverItemProps {
  content: string | React.ReactNode;
  children: any;
  title: string;
}

export default function PopoverItem(props: IPopoverItemProps) {
  return (
    <Popover as="span" className="relative inline-block">
      {({ open }) => (
        <>
          <Popover.Button
            onMouseOver={() => {}}
            as="span"
            className={clsx(
              "cursor-pointer ml-3 text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 items-center hover:bg-sky-400/20",
              open && "bg-sky-400/20"
            )}
          >
            {props.children}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-48">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-700">
                <div className="p-4 pb-2 text-base font-bold">
                  {props.title}
                </div>
                <div className="p-4 pt-2 text-sm">{props.content}</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
