export interface SiteLanguage {
  code: string;
  name: string;
  href: string;
}

export interface CoffeeLocation {
  name: string;
  href: string;
}

export interface SiteTheme {
  name: string;
  href: string;
}

export const languages: SiteLanguage[] = [
  { code: "EN", name: "English", href: "/lang/en" },
  { code: "DE", name: "Deutsch", href: "/lang/de" },
];

export const locations: CoffeeLocation[] = [
  { name: "Falmouth", href: "/locations/falmouth" },
  { name: "Truro", href: "/locations/truro" },
  { name: "NewQuay", href: "/locations/newquay" },
  { name: "Penzance", href: "/locations/penzance" },
  { name: "St. Ives", href: "/locations/st-ives" },
];

export const themes: SiteTheme[] = [
  { name: "light", href: "/theme/light" },
  { name: "coffee", href: "/theme/coffee" },
  { name: "cyberpunk", href: "/theme/cyberpunk" },
  { name: "retro", href: "/theme/retro" },
];
