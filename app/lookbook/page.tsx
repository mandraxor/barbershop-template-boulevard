import { Calendar } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'Visual Portfolio & Lookbook | Boulevard Barber Shop',
  description: 'Explore signature skin tapers, beard sculptures, textured crops, and executive salon interior shots at Boulevard Barber Shop in Downtown Las Vegas.',
};

export default function LookbookPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  const gallery = [
    { title: "Master Scissor Craft & Side Part", src: "/images/gallery-scissor.jpg", category: "Scissor Craft" },
    { title: "Precision Skin Drop Fade & Beard", src: "/images/gallery-fade.jpg", category: "Skin Fade" },
    { title: "Steaming Hot Towel Shave Ritual", src: "/images/gallery-steam.jpg", category: "Hot Towel Shave" },
    { title: "Surgical Razor Beard Contouring", src: "/images/razor-beard.jpg", category: "Beard Sculpt" },
    { title: "Vintage Brass Atomizer & Tools", src: "/images/brass-atomizer.jpg", category: "Atelier Tools" },
    { title: "Classic Gentleman's Scissor Cut", src: "/images/bryan-action.jpg", category: "Classic Cut" },
    { title: "Master Barber in Tailored Vest", src: "/images/barber-vest.jpg", category: "Craftsmanship" },
    { title: "Executive Shave & Lounge Interior", src: "/images/hero-cinematic.jpg", category: "Lounge" },
  ];

  const marqueeItems = [
    "PRECISION SKIN TAPERS",
    "HOT TOWEL STRAIGHT RAZOR SHAVES",
    "BEARD SCULPTING & CONTOURING",
    "DOWNTOWN LAS VEGAS",
    "EXECUTIVE SCISSOR WORK",
    "AUTHENTIC AMERICAN HERITAGE"
  ];

  return (
    <main className="py-12 sm:py-20 px-3 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[#1A2849] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-bold">Visual Portfolio</span>
            <h1 className="font-cinzel font-black text-3xl sm:text-6xl text-[#14161C] uppercase tracking-tight break-words">The Lookbook</h1>
            <p className="text-gray-600 text-xs sm:text-sm font-mono mt-2">Captured live from the chairs at 906 S 6th St.</p>
          </div>
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial-navy mt-4 md:mt-0 px-6 py-2.5 text-xs font-mono">
            Book Any Style
          </a>
        </div>
      </FadeIn>

      {/* Infinite Horizontal Marquee Strip */}
      <div className="w-full overflow-hidden bg-[#EDE7DA] border-y border-black/10 py-3 mb-12">
        <div className="animate-marquee whitespace-nowrap text-xs font-mono text-[#1A2849] tracking-[0.2em] uppercase font-bold">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span key={idx} className="mx-6 flex items-center">
              <span className="text-[#C41E3A] mr-4">✦</span> {text}
            </span>
          ))}
        </div>
      </div>

      {/* Masonry / Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {gallery.map((item, index) => (
          <div key={index} className="bg-[#FAF8F3] border border-black/10 rounded-lg overflow-hidden group cursor-pointer shadow-sm">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono text-[#DFBA68] uppercase tracking-wider font-bold">{item.category}</span>
                <p className="font-cinzel font-bold text-sm text-white">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
