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

const coffeeshops = [
  {
    id: 1,
    name: "Beacon Coffee",
    address: "28A High St, Falmouth TR11 2AD",
    coordinates: {
      plusCode: "5W4H+MF Falmouth",
      latitude: 50.1566829,
      longitude: -5.0713304,
    },
    phoneNumber: "",
    website: "https://www.beaconcoffee.co.uk",
    openingHours: {
      monday: "8:30 AM - 2:30 PM",
      tuesday: "8:30 AM - 2:30 PM",
      wednesday: "8:30 AM - 2:30 PM",
      thursday: "8:30 AM - 2:30 PM",
      friday: "8:30 AM - 3:30 PM",
      saturday: "8:30 AM - 3:30 PM",
      sunday: "Closed",
    },
    description:
      "A cozy spot for coffee lovers with a wide variety of brews and pastries.",
    images: [
      "./img/shops/beacon.jpg",
      "./img/shops/espresso.jpg",
      "./img/shops/machines.jpg",
    ],
    rating: 4.9,
    priceRange: "££",
    hasWifi: true,
    isDogFriendly: true,
    hasOutdoorSeating: false,
    indoorSeatingCapacity: 20,
    hasTakeaway: true,
    coffeeTypes: ["Espresso", "Latte", "Cappuccino", "Americano", "Cold Brew"],
    specialtyCoffee: ["Single Origin Ethiopian", "Barrel-Aged Coffee"],
    nonCoffeeBeverages: ["Tea", "Hot Chocolate", "Smoothies"],
    foodOptions: {
      hasPastries: true,
      hasCookedFood: false,
    },
    hasVeganOptions: true,
    hasGlutenFreeOptions: true,
    paymentMethods: ["Credit Card", "Mobile Payment"],
    parking: "No parking available",
    accessibilityFeatures: ["Wheelchair ramp", "Accessible restroom"],
    noiseLevel: "Moderate",
    isStudyFriendly: true,
    hasPowerOutlets: true,
    hasLoyaltyProgram: true,
    hasEvents: false,
    roastsOwnCoffee: false,
  },

  {
    id: 2,
    name: "Gylly Beach Cafe",
    address: "Gyllyngvase Beach, Cliff Road, Falmouth, TR11 4PA",
    coordinates: {
      plusCode: "5W4H+MF Falmouth",
      latitude: 50.1448283,
      longitude: -5.0680058,
    },
    phoneNumber: "01326 312884",
    website: "https://www.gyllybeach.com/",
    openingHours: {
      monday: "8:30 AM - 9:00 PM",
      tuesday: "8:30 AM - 9:00 PM",
      wednesday: "8:30 AM - 9:00 PM",
      thursday: "8:30 AM - 9:00 PM",
      friday: "8:30 AM - 9:00 PM",
      saturday: "8:30 AM - 9:00 PM",
      sunday: "8:30 AM - 9:00 PM",
    },
    description:
      "Wonderfully positioned on Falmouth’s famous Gyllyngvase Beach, overlooked by the imposing Pendennis Castle and central to panoramic views of the Lizard Peninsula and The Helford River, Gylly Café is a unique, stylish and popular eatery. ",
    images: [
      "https://images.squarespace-cdn.com/content/v1/5ef87aa77cf43c797a7d9d6c/1616596333939-DM88QJOVWB8KK1FB3EW2/RH-GyllyOCT2020-2-2.jpg?format=2500w",
      "https://images.squarespace-cdn.com/content/v1/5ef87aa77cf43c797a7d9d6c/882c52ff-1dc7-4ca8-a955-e0f11af8dbdb/Gyllyngvase-Beachlow-1024x400.jpg?format=2500w",
    ],
    rating: 4.7,
    priceRange: "£££",
    hasWifi: false,
    isDogFriendly: true,
    hasOutdoorSeating: true,
    indoorSeatingCapacity: 50,
    hasTakeaway: true,
    coffeeTypes: ["Espresso", "Latte", "Cappuccino", "Americano", "Cold Brew"],
    specialtyCoffee: ["Single Origin Ethiopian", "Barrel-Aged Coffee"],
    nonCoffeeBeverages: ["Tea", "Hot Chocolate", "Smoothies"],
    foodOptions: {
      hasPastries: true,
      hasCookedFood: true,
    },
    hasVeganOptions: true,
    hasGlutenFreeOptions: true,
    paymentMethods: ["Cash", "Credit Card", "Mobile Payment"],
    parking: "Road parking available",
    accessibilityFeatures: ["Wheelchair ramp", "Accessible restroom"],
    noiseLevel: "Moderate",
    isStudyFriendly: true,
    hasPowerOutlets: false,
    hasLoyaltyProgram: true,
    hasEvents: false,
    roastsOwnCoffee: false,
  },
  // More coffeeshop objects would follow...
];
