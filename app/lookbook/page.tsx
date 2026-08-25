import { Calendar } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'Visual Portfolio & Lookbook | Boulevard Barber Shop',
  description: 'Explore signature skin tapers, beard sculptures, textured crops, and executive salon interior photography at Boulevard Barber Shop in Downtown Las Vegas.',
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
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">Visual Portfolio</span>
            <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">The Lookbook</h1>
            <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-2">Captured live from the chairs at 906 S 6th St #105.</p>
          </div>
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-primary mt-6 md:mt-0 px-6 py-3 text-xs font-mono">
            Book Any Style
          </a>
        </div>
      </FadeIn>

      {/* Infinite Horizontal Marquee Strip */}
      <div className="w-full overflow-hidden bg-[#080A0E] border-y border-white/10 py-3.5 mb-14">
        <div className="animate-marquee whitespace-nowrap text-xs font-mono text-[#F5F5F0] tracking-[0.2em] uppercase font-bold">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span key={idx} className="mx-6 flex items-center">
              <span className="text-[#C5A059] mr-4">✦</span> {text}
            </span>
          ))}
        </div>
      </div>

      {/* Masonry / Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gallery.map((item, index) => (
          <div key={index} className="border border-white/10 overflow-hidden group cursor-pointer bg-black">
            <div className="relative h-80 sm:h-96 overflow-hidden">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider font-bold">{item.category}</span>
                <p className="font-serif font-bold text-base text-[#F5F5F0] mt-1">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
