import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import type { CoffeeLocation, SiteLanguage } from "../../constants";
import { languages, locations } from "../../constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 bg-base-100 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex float-end mb-10">
          <CloseButton onClose={onClose} />
        </div>
        <div className="mt-12 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <LocationsDisclosure />
              <LanguagesDisclosure />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

interface CloseButtonProps {
  onClose: () => void;
}

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="-m-2.5 rounded-md p-3.5 text-primary"
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
}

function LocationsDisclosure() {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-primary hover:bg-gray-50">
        Locations
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none group-data-[open]:rotate-180"
        />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2">
        {locations.map((location) => (
          <DisclosureButton
            key={location.name}
            as="a"
            href={location.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary hover:bg-gray-50"
          >
            {location.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
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

interface LanguageItemProps {
  lang: SiteLanguage;
}

function LanguageItem({ lang }: LanguageItemProps) {
  return (
    <DisclosureButton
      key={lang.code}
      as="a"
      href={lang.href}
      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
    >
      <div className="badge badge-primary">{lang.code}</div>
      <div className="flex-auto">
        <a href={lang.href} className="block font-semibold text-primary">
          {lang.name}
          <span className="absolute inset-0" />
        </a>
      </div>
    </DisclosureButton>
  );
}

function LanguagesDisclosure() {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-primary hover:bg-gray-50">
        <LanguageIcon />
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none group-data-[open]:rotate-180"
        />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2">
        {languages.map((lang) => (
          <LanguageItem lang={lang} />
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
