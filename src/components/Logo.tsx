import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "navbar" | "footer";
}

export function Logo({ className, variant = "navbar" }: LogoProps) {
  // Clean Apple logo SVG with a tight, reliable viewBox
  const AppleSvg = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.51C5.57 7.99 7.13 7.01 8.82 6.99C10.1 6.97 11.32 7.85 12.11 7.85C12.89 7.85 14.37 6.78 15.92 6.95C16.57 6.98 18.39 7.21 19.56 8.91C19.47 8.97 17.39 10.15 17.41 12.68C17.44 15.71 20.06 16.73 20.09 16.74C20.06 16.81 19.67 18.18 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-col items-start gap-3", className)}>
        <div className="text-white">
          <AppleSvg size={40} color="white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          Si <span className="text-gray-400">Hi-Tech</span>
        </span>
      </div>
    );
  }

  // Navbar variant
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <AppleSvg size={24} color="black" />
      <span className="font-bold text-xl tracking-tight hidden sm:block">
        Si Hi-Tech
      </span>
    </Link>
  );
}
