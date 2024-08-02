import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { SiteLanguage } from "../../constants";
import { languages } from "../../constants";

interface LanguageItemProps {
  lang: SiteLanguage;
}

export default function LanguagesDropdown() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-primary">
        <LanguageIcon />
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-primary"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-base-100 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-4">
          {languages.map((lang) => (
            <LanguageItem key={lang.code} lang={lang} />
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}

function LanguageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
      />
    </svg>
  );
}

function LanguageItem({ lang }: LanguageItemProps) {
  return (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
      <div className="badge badge-primary">{lang.code}</div>
      <div className="flex-auto">
        <a href={lang.href} className="block font-semibold text-primary">
          {lang.name}
          <span className="absolute inset-0" />
        </a>
      </div>
    </div>
  );
}
