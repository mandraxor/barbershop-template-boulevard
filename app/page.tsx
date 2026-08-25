import Link from 'next/link';
import { Scissors, Sparkles, Coffee, ArrowRight, Calendar, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function HomePage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <main className="flex flex-col">
      
      {/* 1. FULL-VIEWPORT CINEMATIC VIDEO HERO (H-SCREEN) */}
      <section className="relative h-[88vh] sm:h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-black">
        
        {/* Ambient Video / Ken-Burns Slow Zoom Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns opacity-40 scale-105"
          style={{ backgroundImage: "url('/images/hero-interior.jpg')" }}
        />

        {/* Ambient Video Loop Tag */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero-interior.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none"
        >
          <source src="/images/hero-interior.jpg" type="video/mp4" />
        </video>

        {/* Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,13,19,0.85)_100%)]" />

        {/* Centered Luxury Editorial Lockup */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C5A059]/50 bg-[#08090E]/90 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#DFBA68] mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5 animate-pulse"></span>
            <span>DOWNTOWN LAS VEGAS • 906 S 6TH ST #105</span>
          </div>

          {/* Oversized Serif Headline */}
          <h1 className="font-cinzel font-black text-3xl min-[360px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[1.05] mb-6">
            PRECISION CUTS. <br />
            <span className="text-brass-gradient italic font-serif">TIMELESS GROOMING.</span>
          </h1>

          <p className="font-sans text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            An executive barber lounge combining Downtown Las Vegas speakeasy atmosphere with bespoke tailoring, hot towel facial steam, and straight-razor mastery.
          </p>

          {/* Dual Minimalist CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={booksyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brass-solid w-full sm:w-auto px-9 py-4 text-xs font-mono shadow-2xl"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </a>
            <Link 
              href="/services" 
              className="btn-brass-outline w-full sm:w-auto px-9 py-4 text-xs font-mono"
            >
              <Scissors className="w-4 h-4 mr-2 text-[#C5A059]" />
              Explore Menu
            </Link>
          </div>

          {/* Verification Bar */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto border-t border-[#C5A059]/25 pt-6 text-center font-mono text-xs text-gray-300">
            <div>
              <span className="text-[#DFBA68] font-bold text-base block">5.0 ★</span>
              <span className="text-[10px] text-gray-400">Verified Rating</span>
            </div>
            <div className="border-x border-[#C5A059]/25">
              <span className="text-[#DFBA68] font-bold text-base block">7 Days</span>
              <span className="text-[10px] text-gray-400">7 AM – 7 PM</span>
            </div>
            <div>
              <span className="text-[#DFBA68] font-bold text-base block">from $35</span>
              <span className="text-[10px] text-gray-400">Master Cuts</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE LOUNGE STANDARD (HOSPITALITY PILLARS) */}
      <section className="py-24 bg-[#08090E] border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">Hospitality Pillars</span>
            <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white uppercase">The Lounge Standard</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light mt-3">Curated rituals derived from private gentlemen’s clubs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded bg-[#10131B] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all group">
              <div className="w-12 h-12 rounded bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBA68] mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white mb-3">Aromatherapy Hot Towels</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Every shave and haircut neck cleanup features eucalyptus-infused steaming towels to open pores, soften follicles, and soothe the skin.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded bg-[#10131B] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all group">
              <div className="w-12 h-12 rounded bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBA68] mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white mb-3">Master Straight-Razor Lineups</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Traditional double-pass straight razor work with rich warm lather, precision hairline contouring, and cold tonic pore sealing.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded bg-[#10131B] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all group">
              <div className="w-12 h-12 rounded bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBA68] mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white mb-3">Craft Espresso Lounge</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Complimentary handcrafted espresso, cold beverages, and plush leather club seating in our air-conditioned Downtown Las Vegas salon.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CURATED SPLIT-SCREEN TEASERS */}
      <section className="py-24 bg-[#0B0D13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          {/* Split 1: Featured Grooming */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10131B] border border-[#C5A059]/30 rounded-xl p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block">The Atelier Menu</span>
              <h2 className="font-cinzel font-black text-3xl sm:text-4xl text-white uppercase">Signature Grooming Menu</h2>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                From precision high skin tapers and customized shear work to executive hot towel shaves and beard sculpts. Transparent starting pricing for every gentleman.
              </p>
              
              <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4">
                <div className="flex justify-between py-1">
                  <span>Male Signature Cut</span>
                  <span className="text-[#DFBA68] font-bold">from $35</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Haircut & Beard Sculpt</span>
                  <span className="text-[#DFBA68] font-bold">from $65</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Hot Towel Straight Razor Shave</span>
                  <span className="text-[#DFBA68] font-bold">from $30</span>
                </div>
              </div>

              <Link href="/services" className="btn-brass-solid px-6 py-3 text-xs font-mono inline-flex items-center">
                View Full Menu & Pricing <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-[#C5A059]/30 bg-black">
              <img src="/images/low-taper-beard.jpg" alt="Signature Grooming" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Split 2: Master Craftsmen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10131B] border border-[#C5A059]/30 rounded-xl p-6 sm:p-10">
            <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-[#C5A059]/30 bg-black order-2 lg:order-1">
              <img src="/images/barber-master.jpg" alt="Master Artisans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block">The Master Artisans</span>
              <h2 className="font-cinzel font-black text-3xl sm:text-4xl text-white uppercase">Meet The 4 Master Barbers</h2>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Featuring Elier, Bryan Lorenzo Otero, Ramírez Lay Jiménez, and Henry Classic V. Over 35+ years of combined experience delivering bespoke cuts tailored to individual lifestyles.
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs border-t border-white/10 pt-4">
                <div className="p-2.5 rounded bg-[#0B0D13] border border-white/5">
                  <p className="font-bold text-white">Elier</p>
                  <p className="text-[10px] text-[#DFBA68]">Razor Specialist (10+ yrs)</p>
                </div>
                <div className="p-2.5 rounded bg-[#0B0D13] border border-white/5">
                  <p className="font-bold text-white">Bryan Lorenzo</p>
                  <p className="text-[10px] text-[#DFBA68]">Beard Artist (8+ yrs)</p>
                </div>
              </div>

              <Link href="/team" className="btn-brass-outline px-6 py-3 text-xs font-mono inline-flex items-center">
                Explore Full Roster <ArrowRight className="w-4 h-4 ml-1.5 text-[#C5A059]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
