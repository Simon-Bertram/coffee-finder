import { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="global"
      >
        {/* Company branding */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Coffee Finder - Cornwall's best coffeeshops
            </span>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Hamburger menu */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links*/}
        <div className="hidden md:flex gap-8 lg:gap-14">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel>
          <div className="flex">
            <a href="">
              <span className="sr-only">
                Coffee Finder - Cornwall's best coffeeshops
              </span>
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close main menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div>
              <div>
                <a href="#" className="block py-2">
                  <span className="text-gray-900">Analytics</span>
                </a>
                <a href="#" className="block py-2">
                  <span className="text-gray-900">Engagement</span>
                </a>
                <a href="#" className="block py-2">
                  <span className="text-gray-900">Security</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
