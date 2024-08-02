import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface MobileMenuButtonProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

function MobileMenuButton({ setMobileMenuOpen }: MobileMenuButtonProps) {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-8 w-8" />
      </button>
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent">
      <nav
        aria-label="Global"
        className="navbar mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Logo />
        <MobileMenuButton setMobileMenuOpen={setMobileMenuOpen} />
        <DesktopNav />
      </nav>
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
