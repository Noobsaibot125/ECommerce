import Image from "next/image";

export function FeatureGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        
        {/* Left Column Section (Cols 1-2) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* Top: PlayStation 5 (Wide) */}
          <div className="md:col-span-2 bg-white flex flex-col md:flex-row items-center p-8 min-h-[300px] gap-8">
            <div className="relative w-full md:w-1/2 h-[200px] md:h-[250px]">
              <Image 
                src="/images/Home/feature_ps5.png" 
                alt="PlayStation 5" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h2 className="text-4xl font-semibold mb-4">PlayStation 5</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Des processeurs et des cartes graphiques incroyablement puissants, ainsi qu&apos;un SSD avec E/S intégrées, redéfiniront votre expérience PlayStation.
              </p>
            </div>
          </div>

          {/* Bottom Left: AirPods Max */}
          <div className="bg-[#EDEDED] flex flex-col items-start p-8 min-h-[300px]">
            <div className="relative w-full h-[180px] mb-6">
              <Image 
                src="/images/Home/feature_airpods_max.png" 
                alt="AirPods Max" 
                fill 
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-light mb-2">Apple AirPods Max</h2>
            <p className="text-gray-500 text-sm">
              Audio computationnel. Écoutez, c&apos;est puissant.
            </p>
          </div>

          {/* Bottom Right: Vision Pro */}
          <div className="bg-[#353535] text-white flex flex-col items-start p-8 min-h-[300px]">
            <div className="relative w-full h-[180px] mb-6">
              <Image 
                src="/images/Home/category_gaming.png" 
                alt="Vision Pro" 
                fill 
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-light mb-2">Apple Vision Pro</h2>
            <p className="text-gray-400 text-sm">
              Une façon immersive de vivre le divertissement.
            </p>
          </div>
        </div>

        {/* Right Column: MacBook Air (Tall) */}
        <div className="lg:col-span-2 bg-[#EDEDED] flex flex-col md:flex-row items-center p-12 min-h-[600px] relative overflow-hidden">
          <div className="flex flex-col justify-center z-10 md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-thin mb-4">
              MacBook <span className="font-semibold">Air</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Le nouveau MacBook Air 15 pouces vous offre encore plus d&apos;espace pour tout ce que vous aimez grâce à son écran Liquid Retina spacieux.
            </p>
            <button className="w-max px-12 py-3.5 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors">
              Acheter maintenant
            </button>
          </div>
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <Image 
              src="/images/Home/feature_macbook_air.png" 
              alt="MacBook Air" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
