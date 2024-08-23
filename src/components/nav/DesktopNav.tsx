import { PopoverGroup } from "@headlessui/react";
import LocationsDropdown from "./LocationsDropdown";
import LanguagesDropdown from "./LanguagesDropdown";

export default function DesktopNav() {
  return (
    <PopoverGroup
      className="hidden lg:flex lg:gap-x-12"
      role="navigation"
      aria-label="Main"
    >
      <LocationsDropdown />
      <a href="about" className="block font-semibold text-primary">
        About
      </a>
      <LanguagesDropdown />
    </PopoverGroup>
  );
}
