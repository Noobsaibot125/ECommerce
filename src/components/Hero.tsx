import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[#211C24] text-white pt-16 pb-0 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-8">
        {/* Left: Text */}
        <div className="flex flex-col items-start text-left z-10 md:w-1/2 space-y-4">
          <span className="text-gray-400 font-medium text-sm md:text-base">
            Pro.Beyond.
          </span>
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Créé pour tout changer. Une nouvelle façon magique d&apos;interagir avec
            l&apos;iPhone. Des fonctionnalités de sécurité vitales.
          </p>
          <button className="mt-4 px-8 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-medium">
            Acheter maintenant
          </button>
        </div>

        {/* Right: iPhone Image */}
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[500px] z-0">
          <Image
            src="/images/Home/hero_iphone.png"
            alt="iPhone 14 Pro"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
