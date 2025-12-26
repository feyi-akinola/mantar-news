export type CountryCode =
  | "us" | "gb" | "ca" | "au" | "in"
  | "de" | "fr" | "it" | "es" | "jp"
  | "kr" | "br" | "ng" | "za";

import { create } from "zustand";

type CountryState = {
  country: CountryCode;
  setCountry: (code: CountryCode) => void;
};

export const useCountryStore = create<CountryState>((set) => ({
  country: "us",
  setCountry: (code) => set({ country: code }),
}));

export const SUPPORTED_COUNTRIES: Array<{ code: CountryCode; label: string }> = [
  { code: "us", label: "United States" },
  { code: "gb", label: "United Kingdom" },
  { code: "ca", label: "Canada" },
  { code: "au", label: "Australia" },
  { code: "in", label: "India" },
  { code: "de", label: "Germany" },
  { code: "fr", label: "France" },
  { code: "it", label: "Italy" },
  { code: "es", label: "Spain" },
  { code: "jp", label: "Japan" },
  { code: "kr", label: "South Korea" },
  { code: "br", label: "Brazil" },
  { code: "ng", label: "Nigeria" },
  { code: "za", label: "South Africa" },
];
