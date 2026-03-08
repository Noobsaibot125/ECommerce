import Image from "next/image";

export function PopularProducts() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {/* Card 0 — "Populaires" intro/header card */}
        <div className="bg-white p-8 flex flex-col justify-end min-h-[420px] relative">
          {/* Main Background Image - Vision Pro like glasses */}
          <div className="absolute inset-0 z-0 p-8 flex items-start justify-center">
             <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/Home/category_gaming.png" 
                  alt="Vision Pro decorative" 
                  fill 
                  className="object-contain opacity-10" 
                />
             </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-thin mb-3">
              Produits <span className="font-semibold">Populaires</span>
            </h2>
            <button className="text-black font-medium text-left border-b border-black w-max pb-0.5 text-sm hover:opacity-70 transition-opacity mt-2">
              Voir tout
            </button>
          </div>
        </div>

        {/* Card 1 — iPad Pro */}
        <div className="bg-[#F9F9F9] p-8 flex flex-col items-center text-center min-h-[420px]">
          <div className="relative w-full h-[220px] mb-6">
            <Image src="/images/Home/popular_ipad_pro.png" alt="iPad Pro" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">iPad Pro</h3>
          <p className="text-gray-500 text-xs mb-6 max-w-[200px]">
            L&apos;iPad combine un magnifique écran Retina avec une immense puissance et une grande polyvalence.
          </p>
          <button className="mt-auto px-6 py-2.5 bg-black text-white rounded-md font-medium text-sm hover:bg-black/85 transition-colors">
            Acheter maintenant
          </button>
        </div>

        {/* Card 2 — Samsung Galaxy */}
        <div className="bg-[#EAEAEA] p-8 flex flex-col items-center text-center min-h-[420px]">
          <div className="relative w-full h-[220px] mb-6">
            <Image src="/images/Home/popular_samsung_galaxy.png" alt="Samsung Galaxy" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Samsung Galaxy</h3>
          <p className="text-gray-500 text-xs mb-6 max-w-[200px]">
            L&apos;iPad combine un magnifique écran Retina avec une immense puissance et une grande polyvalence.
          </p>
          <button className="mt-auto px-6 py-2.5 bg-black text-white rounded-md font-medium text-sm hover:bg-black/85 transition-colors">
            Acheter maintenant
          </button>
        </div>

        {/* Card 3 — MacBook Pro */}
        <div className="bg-[#2C2C2C] text-white p-8 flex flex-col items-center text-center min-h-[420px]">
          <div className="relative w-full h-[220px] mb-6">
            <Image src="/images/Home/popular_macbook_pro.png" alt="Macbook Pro" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Macbook Pro</h3>
          <p className="text-gray-400 text-xs mb-6 max-w-[200px]">
            L&apos;iPad combine un magnifique écran Retina avec une immense puissance et une grande polyvalence.
          </p>
          <button className="mt-auto px-6 py-2.5 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-200 transition-colors">
            Acheter maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
