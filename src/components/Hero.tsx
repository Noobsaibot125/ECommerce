import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-[#211C24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 min-h-[500px] md:min-h-[650px]">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left z-10 md:w-[40%] space-y-5 py-16 md:py-20">
          <p className="text-gray-400 font-medium text-base tracking-wide">Pro.Beyond.</p>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-none whitespace-nowrap">
            iPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <p className="text-gray-400 text-base max-w-sm">
            Créé pour tout changer pour le mieux. Pour tout le monde.
          </p>
          <Link
            href="/boutique"
            className="inline-block mt-2 px-8 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-black transition-all font-medium text-sm"
          >
            Acheter maintenant
          </Link>
        </div>

        {/* Right Content: Image — Zoomed but fully visible */}
        <div className="relative md:w-[60%] h-[400px] md:h-[650px] self-stretch">
          <Image
            src="/images/Home/hero_iphone.png"
            alt="iPhone 14 Pro"
            fill
            className="object-contain object-center scale-[1.25] md:scale-[1.2] origin-center"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
    </section>
  );
}
