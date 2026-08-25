import Link from 'next/link';
import { Scissors, Sparkles, Coffee, ShieldCheck, ArrowRight, Star, Calendar } from 'lucide-react';

export default function HomePage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <main className="flex flex-col">
      
      {/* 1. CINEMATIC HERO (MIN-H-[85VH] WITH SLOW-ZOOM KEN BURNS) */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-8 overflow-hidden bg-black">
        
        {/* Slow-Zoom Ken Burns Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns opacity-45"
          style={{ backgroundImage: "url('/images/hero-interior.jpg')" }}
        />

        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f] via-black/60 to-black/80" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-black/80 backdrop-blur-md text-xs font-mono text-[#E5C478] mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            <span>DOWNTOWN LAS VEGAS LUXURY GROOMING ATELIER</span>
          </div>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[1.05] mb-6">
            WHERE PRECISION MEETS <br />
            <span className="text-brass-gradient italic font-serif">THE FINE ART</span> OF GROOMING.
          </h1>

          <p className="font-sans text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Welcome to Boulevard Barber Shop at 906 S 6th St #105. Tailored skin fades, master scissor crafting, sculpted beard lineups, and authentic hot lather straight razor shaves executed 7 days a week by veteran artisans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={booksyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brass-solid w-full sm:w-auto px-8 py-4 text-sm shadow-2xl"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </a>
            <Link 
              href="/services" 
              className="btn-brass-outline w-full sm:w-auto px-8 py-4 text-sm"
            >
              <Scissors className="w-4 h-4 mr-2 text-[#C5A059]" />
              Explore Services
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-[#C5A059]/20 pt-6 text-center font-mono text-xs text-gray-300">
            <div>
              <span className="text-[#C5A059] font-bold text-lg block">5.0 ★</span>
              <span>Verified Rating</span>
            </div>
            <div className="border-x border-[#C5A059]/20">
              <span className="text-[#C5A059] font-bold text-lg block">7 Days</span>
              <span>7 AM – 7 PM</span>
            </div>
            <div>
              <span className="text-[#C5A059] font-bold text-lg block">from $35</span>
              <span>Master Cuts</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CURATED EXPERIENCE TEASER (3-POINT LUXURY HIGHLIGHT) */}
      <section className="py-24 bg-[#080a0f] border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">The Boulevard Standard</span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-white uppercase">Curated Lounge Experience</h2>
            <p className="text-gray-400 text-sm font-light mt-3">Combining traditional American barbershop craft with luxury amenities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Point 1: Essential Oil Steam */}
            <div className="p-8 rounded-lg bg-[#121620] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all group">
              <div className="w-12 h-12 rounded bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white mb-3">Essential Oil Steam</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Aromatherapy infused steamed hot towels open pores and soften follicles before every straight-razor shave or neck lineup for a soothing finish.
              </p>
            </div>

            {/* Point 2: Straight-Razor Detailing */}
            <div className="p-8 rounded-lg bg-[#121620] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all group">
              <div className="w-12 h-12 rounded bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white mb-3">Straight-Razor Detailing</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Every haircut is finished with traditional warm lather edging. Our beard sculpts feature double-pass straight razor contouring.
              </p>
            </div>

            {/* Point 3: Plush Lounge Amenities */}
            <div className="p-8 rounded-lg bg-[#121620] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all group">
              <div className="w-12 h-12 rounded bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white mb-3">Plush Lounge Amenities</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Relax in our comfortable air-conditioned leather seating in Downtown Las Vegas with complimentary craft espresso and refreshments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FEATURED SERVICES PREVIEW (3-ITEM TEASER LINKING TO /SERVICES) */}
      <section className="py-24 bg-[#0e131f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">Service Atelier</span>
              <h2 className="font-serif font-black text-3xl sm:text-5xl text-white uppercase">Featured Grooming</h2>
            </div>
            <Link href="/services" className="mt-4 md:mt-0 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider flex items-center hover:underline">
              View Full Menu <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <div className="p-6 rounded-lg bg-[#121620] border border-[#C5A059]/30 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-white">Male Signature Cut</h3>
                  <span className="font-mono text-[#C5A059] font-bold text-lg">$35</span>
                </div>
                <p className="text-xs text-gray-400 font-light mb-4">Precision skin fade, taper, crop, or classic scissor cut with warm lather razor neck clean-up and styling.</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-gray-500">40 mins</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-3 py-1 text-[11px]">
                  Book
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-6 rounded-lg bg-[#121620] border border-[#C5A059]/30 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-white">Haircut & Beard Sculpt</h3>
                  <span className="font-mono text-[#C5A059] font-bold text-lg">$65</span>
                </div>
                <p className="text-xs text-gray-400 font-light mb-4">The complete package. Custom precision haircut plus full beard shaping, straight razor edge lining, and hot towel.</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-gray-500">60 mins</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-3 py-1 text-[11px]">
                  Book
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-6 rounded-lg bg-[#121620] border border-[#C5A059]/30 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-white">Hot Towel Razor Shave</h3>
                  <span className="font-mono text-[#C5A059] font-bold text-lg">$30</span>
                </div>
                <p className="text-xs text-gray-400 font-light mb-4">Old-school classic barber shave. Pre-shave oil, two steaming hot towels, rich warm lather, and cooling tonic.</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-gray-500">30 mins</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-3 py-1 text-[11px]">
                  Book
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BARBER TEAM TEASER BANNER (LINKING TO /TEAM) */}
      <section className="py-20 bg-[#080a0f] border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="p-8 sm:p-12 rounded-xl bg-gradient-to-r from-[#121620] to-[#1a2230] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.2em] block mb-2">Veteran Artisans</span>
              <h2 className="font-serif font-black text-2xl sm:text-4xl text-white uppercase mb-3">Meet The 4 Master Barbers</h2>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Elier, Bryan, Lay, and Henry bring over 35+ years of combined master craft to the chairs at Boulevard Barber Shop in Downtown Las Vegas.
              </p>
            </div>

            <Link href="/team" className="btn-brass-solid px-8 py-3.5 text-xs shrink-0 font-mono">
              View Master Craftsmen <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
