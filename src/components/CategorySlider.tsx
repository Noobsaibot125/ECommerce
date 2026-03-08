"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

// SVG icons matching the Figma flat/line icon style
const PhoneIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-gray-600">
    <rect x="12" y="4" width="24" height="40" rx="4" />
    <line x1="24" y1="37" x2="24" y2="37" strokeLinecap="round" strokeWidth="3" />
  </svg>
);

const WatchIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-gray-600">
    <rect x="14" y="12" width="20" height="24" rx="8" />
    <line x1="19" y1="9" x2="29" y2="9" strokeWidth="4" strokeLinecap="round" />
    <line x1="19" y1="39" x2="29" y2="39" strokeWidth="4" strokeLinecap="round" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-gray-600">
    <path d="M6 16h36v24H6z" rx="3" />
    <circle cx="24" cy="28" r="7" />
    <path d="M17 16l3-5h8l3 5" />
    <circle cx="38" cy="20" r="2" fill="currentColor" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-gray-600">
    <path d="M8 28a16 16 0 0 1 32 0" />
    <rect x="6" y="26" width="8" height="14" rx="3" />
    <rect x="34" y="26" width="8" height="14" rx="3" />
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-gray-600">
    <rect x="4" y="6" width="40" height="28" rx="3" />
    <line x1="16" y1="40" x2="32" y2="40" strokeLinecap="round" />
    <line x1="24" y1="34" x2="24" y2="40" />
  </svg>
);

const GamepadIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-gray-600">
    <path d="M6 20h36l-4 16H10L6 20z" />
    <line x1="18" y1="28" x2="18" y2="36" />
    <line x1="14" y1="32" x2="22" y2="32" />
    <circle cx="30" cy="30" r="2" fill="currentColor" />
    <circle cx="34" cy="34" r="2" fill="currentColor" />
    <rect x="10" y="10" width="28" height="14" rx="7" />
  </svg>
);

const categories = [
  { name: "Téléphones", icon: PhoneIcon },
  { name: "Montres intelligentes", icon: WatchIcon },
  { name: "Appareils photo", icon: CameraIcon },
  { name: "Casque audio", icon: HeadphonesIcon },
  { name: "Ordinateurs", icon: MonitorIcon },
  { name: "Jeux vidéo", icon: GamepadIcon },
];

export function CategorySlider() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Parcourir par catégorie</h2>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar justify-between">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex-shrink-0 w-44 py-8 bg-[#EDEDED] rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black hover:text-white transition-all group border border-transparent"
            >
              <div className="scale-110 group-hover:invert group-hover:brightness-200 transition-all">
                <category.icon />
              </div>
              <span className="font-semibold text-sm text-center px-2">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
