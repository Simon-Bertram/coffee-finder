export default interface Coffeeshop {
  id: number;
  attributes: {
    name: string;
    address: string;
    phoneNumber?: string | null;
    website: string;
    description: string;
    rating?: number;
    indoorSeatingCapacity: number;
    hasWifi: boolean;
    isDogFriendly: boolean;
    hasOutdoorSeating: boolean;
    hasBeansForSale: boolean;
    hasVeganOptions: boolean;
    hasGlutenFreeOptions: boolean;
    isStudyFriendly?: boolean;
    hasPowerOutlets?: boolean;
    hasLoyaltyProgram: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    postcode: string;
    town: string;
    hasCakesOrPastries: boolean;
    hasKitchenOrHotFood: boolean;
    acceptsCash: boolean;
    acceptsDebitOrCreditCard: boolean;
    acceptsMobilePayment: boolean;
    latitude: number;
    longitude: number;
    plusCode: string;
    images?: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: { url: string; width: number; height: number };
            small: { url: string; width: number; height: number };
            medium: { url: string; width: number; height: number };
            large: { url: string; width: number; height: number };
          };
          hash: string;
          ext: string; // e.g., ".jpg", ".png"
          mime: string; // e.g., "image/jpeg", "image/png"
          size: number; // file size in KB
          url: string;
          previewUrl: string | null;
          provider: string; // e.g., "local", "cloudinary"
          createdAt: string; // ISO date string
          updatedAt: string; // ISO date string
        };
      }> | null;
    };
    regularOpeningHours?: {
      id: number;
      [key: string]: any; // Allow any structure for opening hours
    };
    specialHolidayHours?: any[]; // Replace 'any' with a more specific type if available
  };
}
