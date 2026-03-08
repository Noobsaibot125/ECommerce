import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[#1C1C1E] text-white pt-16 pb-0 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-8 h-full">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left z-10 md:w-1/2 space-y-4">
          <p className="text-gray-400 font-semibold mb-2 tracking-wide lg:text-lg">Pro.Beyond.</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tighter mb-4">
            iPhone 14 <span className="font-bold">Pro</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-md mb-8">
            Créé pour tout changer pour le mieux. Pour tout le monde.
          </p>
          <button className="px-10 py-4 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-black transition-all font-medium">
            Acheter maintenant
          </button>
        </div>

        {/* Right Content: Image */}
        <div className="relative w-full md:w-1/2 h-[450px] md:h-[650px] lg:h-[750px] z-0">
          <Image
            src="/images/Home/hero_iphone.png"
            alt="iPhone 14 Pro"
            fill
            className="object-contain object-bottom scale-110 lg:scale-125 select-none pointer-events-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
