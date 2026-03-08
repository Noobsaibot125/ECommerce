import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-[#211C24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 min-h-[500px] md:min-h-[650px]">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left z-10 md:w-[40%] space-y-5 py-16 md:py-20">
          <p className="text-gray-400 font-medium text-base tracking-wide">Pro.Beyond.</p>
          
          {/* Modification ici : Passage de md:text-[85px] à md:text-[115px] pour un effet massif */}
          <h1 className="text-6xl md:text-[115px] font-thin tracking-tight leading-none whitespace-nowrap">
            iPhone 14 Pro
          </h1>
          
          <p className="text-gray-400 text-base max-w-sm md:mt-4">
            Créé pour tout changer pour le mieux. Pour tout le monde.
          </p>
          <Link
            href="/boutique"
            className="inline-block mt-2 px-8 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-black transition-all font-medium text-sm"
          >
            Acheter maintenant
          </Link>
        </div>

        {/* Right Content: Image */}
        <div className="relative md:w-[60%] h-[400px] md:h-[650px] self-stretch pointer-events-none">
          <Image
            src="/images/Home/hero_iphone.png"
            alt="iPhone 14 Pro"
            fill
            className="object-contain object-right md:object-right-top scale-[1.35] md:scale-[1.65] origin-top-right md:translate-y-4"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
    </section>
  );
}