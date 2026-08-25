import Link from 'next/link';
import { Clock, MapPin, Phone, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F5F5F0]">
      {/* 1. CINEMATIC FULL-VIEWPORT HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105 hover:scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/75 to-[#0A0D14]/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#C5A059]/30 rounded-full bg-[#C5A059]/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">Downtown Las Vegas • 906 S 6th St</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-[#F5F5F0] leading-none mb-6">
            PRECISION CUTS.<br />
            <span className="italic font-light text-[#C5A059]">TIMELESS GROOMING.</span>
          </h1>

          <p className="max-w-2xl text-gray-400 text-base md:text-lg mb-10 font-sans leading-relaxed">
            An executive grooming atelier combining Downtown Las Vegas speakeasy hospitality with master straight-razor craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://booksy.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-[#C5A059] text-black font-semibold tracking-wider text-xs uppercase hover:bg-[#DFBA68] transition-all text-center"
            >
              Reserve Your Chair
            </a>
            <Link
              href="/services"
              className="px-8 py-4 border border-white/20 text-[#F5F5F0] font-medium tracking-wider text-xs uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-center backdrop-blur-sm"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 border-t border-white/10 pt-4 max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Open Daily: 7:00 AM – 7:00 PM</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>5.0 Star Rated (680+ Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>(702) 384-1453</span>
          </div>
        </div>
      </section>

      {/* 2. THE THREE HOSPITALITY PILLARS */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">The Standard</span>
          <h2 className="text-3xl font-serif text-[#F5F5F0] mt-2">Curated Lounge Rituals</h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-l border-[#C5A059]/20 pl-6 space-y-3">
            <h3 className="text-lg font-serif text-[#F5F5F0]">Aromatherapy Hot Towels</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Every haircut and beard finish includes eucalyptus-steamed towels to open pores, soften coarse hair, and soothe skin.
            </p>
          </div>
          <div className="border-l border-[#C5A059]/20 pl-6 space-y-3">
            <h3 className="text-lg font-serif text-[#F5F5F0]">Straight-Razor Detailing</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Traditional warm lather and double-pass Japanese steel edge detailing for surgical hairline definition and long-lasting tapers.
            </p>
          </div>
          <div className="border-l border-[#C5A059]/20 pl-6 space-y-3">
            <h3 className="text-lg font-serif text-[#F5F5F0]">Private Club Amenities</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Complimentary handcrafted espresso, cold beverages, high-speed Wi-Fi, and plush lounge seating in historic Downtown Las Vegas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
