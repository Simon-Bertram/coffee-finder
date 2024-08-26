import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { CoffeeLocation } from "../../constants";
import { locations } from "../../constants";

// Whitelist of valid location names
const ALLOWED_LOCATIONS = new Set(locations.map((location) => location.name));

interface LocationItemProps {
  location: CoffeeLocation;
  onSelect?: (name: string) => void;
}

export default function LocationsDropdown() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <PopoverButton
            className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-primary"
            aria-label="Select location"
          >
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
                <LocationItem
                  key={location.name}
                  location={location}
                  onSelect={(townName) => {
                    console.log(`Selected location: ${townName}`);
                    close();
                  }}
                />
              ))}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

function LocationItem({ location, onSelect }: LocationItemProps) {
  const handleSelect = () => {
    if (ALLOWED_LOCATIONS.has(location.name)) {
      onSelect && onSelect(location.name);
      // Dispatch custom event with validated location
      document.dispatchEvent(
        new CustomEvent("townSelected", {
          detail: { town: location.name },
        })
      );
    } else {
      console.error(`Invalid location: ${location.name}`);
    }
  };

  return (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
      <div className="flex-auto">
        <a
          href={`?town=${encodeURIComponent(location.name)}`}
          className="block font-semibold text-primary"
          onClick={(e) => {
            e.preventDefault();
            onSelect && onSelect(location.name);
            // Dispatch custom event with the selected location
            document.dispatchEvent(
              new CustomEvent("townSelected", {
                detail: { town: location.name },
              })
            );
          }}
        >
          {location.name}
          <span className="absolute inset-0" />
        </a>
      </div>
    </div>
  );
}
