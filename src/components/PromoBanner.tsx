import Image from "next/image";

export function PromoBanner() {
  return (
    <section className="relative w-full text-white text-center flex flex-col items-center overflow-hidden min-h-[350px] md:min-h-[420px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home/product_iphone_14_purple.png"
          alt="Promo Banner"
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Grand Soldes<br />jusqu&apos;à 70%
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
          Préparez-vous pour les meilleures offres de l&apos;année. Ne manquez pas nos promotions exclusives sur vos marques préférées.
        </p>
        <button className="px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors text-base">
          Découvrir les offres
        </button>
      </div>
    </section>
  );
}
