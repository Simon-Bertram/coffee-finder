import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { CoffeeLocation } from "../../constants";
import { locations } from "../../constants";

interface LocationItemProps {
  location: CoffeeLocation;
}

export default function LocationsDropdown() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-primary">
        Locations
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
          {locations.map((location) => (
            <LocationItem key={location.name} location={location} />
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}

function LocationItem({ location }: LocationItemProps) {
  return (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
      <div className="flex-auto">
        <a href={location.href} className="block font-semibold text-primary">
          {location.name}
          <span className="absolute inset-0" />
        </a>
      </div>
    </div>
  );
}
