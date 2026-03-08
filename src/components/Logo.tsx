import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "navbar" | "footer";
}

export function Logo({ className, variant = "navbar" }: LogoProps) {
  // Apple logo SVG
  const AppleSvg = () => (
    <svg viewBox="0 0 814 1000" className="fill-current w-full h-full" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.3-150.3-93.3C114 388 113.7 352 114 317.7c3.9-112.9 86.5-184.5 172.2-184.5 66.2 0 108.9 43.9 146 43.9 37.1 0 97.7-45.9 174.9-45.9 70.5 0 167.5 26.2 228.4 103zm-207.2-109.2c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  );

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-col items-start gap-4", className)}>
        <div className="w-16 h-16 flex items-center justify-center text-white -ml-2">
          <AppleSvg />
        </div>
        <div className="flex flex-col items-start leading-none -mt-4">
          <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
            Si <span className="text-gray-400">Hi-Tech</span>
          </span>
        </div>
      </div>
    );
  }

  // Navbar variant (horizontal/compact)
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="w-7 h-7 flex items-center justify-center transition-transform group-hover:scale-110">
        <AppleSvg />
      </div>
      <span className="font-bold text-lg tracking-tight">Si Hi-Tech</span>
    </Link>
  );
}
