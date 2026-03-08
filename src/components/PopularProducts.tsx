import Image from "next/image";
import Link from "next/link";

export function PopularProducts() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">

        {/* Card 0 — Produits Populaires with 2 product images overlapping */}
        <div className="bg-white p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden">
          {/* Two overlapping product images */}
          <div className="relative w-full h-[280px] mb-4">
            {/* Huawei Earbuds — behind, shifted left */}
            <div className="absolute top-0 left-0 w-[70%] h-full z-0">
              <Image
                src="/images/Home/product_huawei_earbuds.png"
                alt="Huawei Earbuds"
                fill
                className="object-contain"
              />
            </div>
            {/* Galaxy Watch — front, shifted right and down */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[75%] z-10">
              <Image
                src="/images/Home/product_galaxy_watch_6.png"
                alt="Galaxy Watch"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-3">Produits populaires</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[280px]">
              L&apos;iPad combine un magnifique écran Retina de 10,2 pouces, des performances incroyables, le multitâche et une grande facilité d&apos;utilisation.
            </p>
            <Link
              href="/boutique"
              className="inline-block px-6 py-3 border border-black rounded-md font-medium text-sm hover:bg-black hover:text-white transition-all"
            >
              Acheter maintenant
            </Link>
          </div>
        </div>

        {/* Card 1 — iPad Pro */}
        <div className="bg-[#F9F9F9] p-8 flex flex-col items-center text-center min-h-[480px]">
          <div className="relative w-full h-[240px] mb-6">
            <Image src="/images/Home/popular_ipad_pro.png" alt="iPad Pro" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">iPad Pro</h3>
          <p className="text-gray-500 text-xs mb-6 max-w-[200px]">
            L&apos;iPad combine un magnifique écran Retina avec une immense puissance et une grande polyvalence.
          </p>
          <Link
            href="/boutique"
            className="mt-auto px-6 py-2.5 bg-black text-white rounded-md font-medium text-sm hover:bg-black/85 transition-colors"
          >
            Acheter maintenant
          </Link>
        </div>

        {/* Card 2 — Samsung Galaxy */}
        <div className="bg-[#EAEAEA] p-8 flex flex-col items-center text-center min-h-[480px]">
          <div className="relative w-full h-[240px] mb-6">
            <Image src="/images/Home/popular_samsung_galaxy.png" alt="Samsung Galaxy" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Samsung Galaxy</h3>
          <p className="text-gray-500 text-xs mb-6 max-w-[200px]">
            L&apos;iPad combine un magnifique écran Retina avec une immense puissance et une grande polyvalence.
          </p>
          <Link
            href="/boutique"
            className="mt-auto px-6 py-2.5 bg-black text-white rounded-md font-medium text-sm hover:bg-black/85 transition-colors"
          >
            Acheter maintenant
          </Link>
        </div>

        {/* Card 3 — MacBook Pro */}
        <div className="bg-[#2C2C2C] text-white p-8 flex flex-col items-center text-center min-h-[480px]">
          <div className="relative w-full h-[240px] mb-6">
            <Image src="/images/Home/popular_macbook_pro.png" alt="Macbook Pro" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Macbook Pro</h3>
          <p className="text-gray-400 text-xs mb-6 max-w-[200px]">
            L&apos;iPad combine un magnifique écran Retina avec une immense puissance et une grande polyvalence.
          </p>
          <Link
            href="/boutique"
            className="mt-auto px-6 py-2.5 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Acheter maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}
