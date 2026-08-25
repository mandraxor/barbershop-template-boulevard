import Link from 'next/link';
import { Calendar, Phone, Clock, Star, Sparkles, Scissors, ShieldCheck, MapPin } from 'lucide-react';

export default function HomePage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <main className="min-h-screen bg-[#0B0D13] text-[#F5F5F0] overflow-hidden">
      
      {/* ===================================================================
           1. CINEMATIC FULL-VIEWPORT HERO (h-screen WITH SLOW-ZOOM & VIGNETTE)
           =================================================================== */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Photographic Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: "url('/images/hero-cinematic.jpg')" }}
        />
        
        {/* Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-[#0B0D13]/70 to-[#0B0D13]/40 z-0" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60 z-0 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#C5A059]/40 bg-[#0B0D13]/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono font-semibold">
              Downtown Las Vegas • 906 S 6th St #105
            </span>
          </div>

          {/* Main Serif Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-[#F5F5F0] leading-none mb-6">
            PRECISION CUTS.<br />
            <span className="italic font-light text-[#C5A059]">TIMELESS GROOMING.</span>
          </h1>

          <p className="max-w-2xl text-[#94A3B8] text-sm sm:text-base md:text-lg mb-10 font-sans leading-relaxed">
            An executive grooming atelier combining Downtown Las Vegas speakeasy hospitality with master Japanese straight-razor craftsmanship.
          </p>

          {/* Dual Action Triggers */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={booksyUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-brass-primary text-xs tracking-[0.2em] px-8 py-4 text-center"
            >
              Reserve Your Chair
            </a>
            <Link
              href="/services"
              className="btn-brass-outline text-xs tracking-[0.2em] px-8 py-4 text-center"
            >
              Explore The Menu
            </Link>
          </div>

        </div>

        {/* Bottom Hero Status Band */}
        <div className="absolute bottom-8 left-0 right-0 z-10 border-t border-white/10 pt-4 max-w-6xl mx-auto px-6 flex justify-between items-center text-xs text-[#94A3B8] font-mono">
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
            <a href="tel:7023841453" className="hover:text-white transition-colors">(702) 384-1453</a>
          </div>
        </div>

      </section>


      {/* ===================================================================
           2. THE LOUNGE STANDARD (EDITORIAL 1PX BORDER SEPARATIONS — BAN GENERIC BOXES)
           =================================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">The Standard</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F5F0] mt-2">Curated Lounge Rituals</h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="border-l border-[#C5A059]/30 pl-6 space-y-3">
            <span className="text-xs font-mono text-[#C5A059]">01. RITUAL</span>
            <h3 className="text-xl font-serif text-[#F5F5F0]">Aromatherapy Hot Towels</h3>
            <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
              Every haircut and beard finish includes eucalyptus-steamed towels to open pores, soften coarse hair, and soothe skin before surgical edge detailing.
            </p>
          </div>

          <div className="border-l border-[#C5A059]/30 pl-6 space-y-3">
            <span className="text-xs font-mono text-[#C5A059]">02. PRECISION</span>
            <h3 className="text-xl font-serif text-[#F5F5F0]">Japanese Steel Razor Detailing</h3>
            <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
              Traditional warm lather and double-pass surgical steel edge detailing for surgical hairline definition, taper fading, and long-lasting contours.
            </p>
          </div>

          <div className="border-l border-[#C5A059]/30 pl-6 space-y-3">
            <span className="text-xs font-mono text-[#C5A059]">03. HOSPITALITY</span>
            <h3 className="text-xl font-serif text-[#F5F5F0]">Private Speakeasy Lounge</h3>
            <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
              Complimentary handcrafted espresso, cold beverages, high-speed Wi-Fi, and plush leather seating in the historic Downtown Las Vegas district.
            </p>
          </div>

        </div>

      </section>


      {/* ===================================================================
           3. ASYMMETRIC EDITORIAL GROOMING MENU PREVIEW (2-COLUMN WITH LEADER LINES)
           =================================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column: Bespoke Photographic Spreads */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative h-72 rounded-none overflow-hidden border border-white/10 group">
              <img src="/images/brass-atomizer.jpg" alt="Vintage Brass Atomizer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-72 rounded-none overflow-hidden border border-white/10 group mt-8">
              <img src="/images/razor-beard.jpg" alt="Surgical Razor Beard Sculpting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Right Menu Column: 2-Column Leader Lines */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">The Atelier Selection</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F5F0] mt-2 mb-4">The Curated Menu</h2>
              <p className="text-sm text-[#94A3B8] font-sans">Transparent starting rates across all master barbers. Lowest rate guaranteed.</p>
            </div>

            <div className="space-y-6 font-mono text-xs">
              
              {/* Item 1 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-sm text-[#F5F5F0]">
                  <span className="uppercase font-serif text-base">Male Signature Haircut</span>
                  <span className="editorial-leader"></span>
                  <span className="text-[#C5A059] font-mono">from $35</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-sans mt-1">40 min • Precision taper, shear texturing, steamed hot towel, neck shave</p>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-sm text-[#F5F5F0]">
                  <span className="uppercase font-serif text-base">Haircut & Beard Sculpt</span>
                  <span className="editorial-leader"></span>
                  <span className="text-[#C5A059] font-mono">from $65</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-sans mt-1">60 min • Full signature cut combined with hot lather straight-razor beard sculpt</p>
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-sm text-[#F5F5F0]">
                  <span className="uppercase font-serif text-base">Hot Towel Straight Razor Shave</span>
                  <span className="editorial-leader"></span>
                  <span className="text-[#C5A059] font-mono">from $30</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-sans mt-1">30 min • Double-pass Japanese steel razor shave with eucalyptus steam</p>
              </div>

              {/* Item 4 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-sm text-[#F5F5F0]">
                  <span className="uppercase font-serif text-base">VIP Strip Hotel / Home Service</span>
                  <span className="editorial-leader"></span>
                  <span className="text-[#C5A059] font-mono">from $80</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-sans mt-1">60 min • On-location private master barber service at your suite or residence</p>
              </div>

            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link href="/services" className="btn-brass-primary">
                View Full Grooming Menu
              </Link>
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-outline">
                Book on Booksy
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================================================
           4. MASTER CRAFTSMEN ROSTER PREVIEW (EDITORIAL ASYMMETRIC GRID)
           =================================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">The Artisans</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F5F0] mt-2">Meet Your Master Craftsmen</h2>
          </div>
          <Link href="/team" className="btn-brass-outline mt-6 md:mt-0 text-xs font-mono">
            View All Barbers
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Barber 1: Elier */}
          <div className="border border-white/10 group flex flex-col justify-between bg-[#080A0E]">
            <div className="relative h-80 overflow-hidden bg-black">
              <img src="/images/elier-portrait.jpg" alt="Elier Master Barber" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase">10+ yrs exp</span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#F5F5F0]">Elier</h3>
                <p className="text-xs font-mono text-[#C5A059] mt-0.5">Master Barber & Razor Architect</p>
                <p className="text-xs text-[#94A3B8] font-sans mt-3 leading-relaxed">Specializing in surgical high skin fades and razor-sharp beard transitions.</p>
              </div>
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-outline w-full mt-5 py-2 text-center text-xs">
                Book Chair
              </a>
            </div>
          </div>

          {/* Barber 2: Bryan Lorenzo Otero */}
          <div className="border border-white/10 group flex flex-col justify-between bg-[#080A0E]">
            <div className="relative h-80 overflow-hidden bg-black">
              <img src="/images/bryan-action.jpg" alt="Bryan Lorenzo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase">8+ yrs exp</span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#F5F5F0]">Bryan Lorenzo Otero</h3>
                <p className="text-xs font-mono text-[#C5A059] mt-0.5">Senior Barber & Beard Artist</p>
                <p className="text-xs text-[#94A3B8] font-sans mt-3 leading-relaxed">Precision textured crops, low drop fades, and custom scissor silhouettes.</p>
              </div>
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-outline w-full mt-5 py-2 text-center text-xs">
                Book Chair
              </a>
            </div>
          </div>

          {/* Barber 3: Ramírez Lay Jiménez */}
          <div className="border border-white/10 group flex flex-col justify-between bg-[#080A0E]">
            <div className="relative h-80 overflow-hidden bg-black">
              <img src="/images/lay-portrait.jpg" alt="Ramírez Lay Jiménez" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase">9+ yrs exp</span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#F5F5F0]">Ramírez Lay Jiménez</h3>
                <p className="text-xs font-mono text-[#C5A059] mt-0.5">Precision Stylist & Fade Specialist</p>
                <p className="text-xs text-[#94A3B8] font-sans mt-3 leading-relaxed">Master of traditional hot towel shaves and razor head shaves with steam.</p>
              </div>
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-outline w-full mt-5 py-2 text-center text-xs">
                Book Chair
              </a>
            </div>
          </div>

          {/* Barber 4: Henry Classic V */}
          <div className="border border-white/10 group flex flex-col justify-between bg-[#080A0E]">
            <div className="relative h-80 overflow-hidden bg-black">
              <img src="/images/henry-classic.jpg" alt="Henry Classic V" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase">12+ yrs exp</span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#F5F5F0]">Henry Classic V</h3>
                <p className="text-xs font-mono text-[#C5A059] mt-0.5">Traditional Master Craftsman</p>
                <p className="text-xs text-[#94A3B8] font-sans mt-3 leading-relaxed">Timeless gentleman's scissor cuts, pompadours, and detailed beard shaping.</p>
              </div>
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-outline w-full mt-5 py-2 text-center text-xs">
                Book Chair
              </a>
            </div>
          </div>

        </div>

      </section>


      {/* ===================================================================
           5. VISIT THE LOUNGE & APPOINTMENT CALL-TO-ACTION
           =================================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Location & Access</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F5F0]">Visit The Downtown Lounge</h2>
            
            <div className="space-y-4 font-mono text-xs border-y border-white/10 py-6">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">ADDRESS:</span>
                <span className="text-[#F5F5F0] font-bold">906 S 6th St #105, Las Vegas, NV 89101</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">OPERATING HOURS:</span>
                <span className="text-[#F5F5F0] font-bold">Monday – Sunday: 7:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">DIRECT PHONE:</span>
                <a href="tel:7023841453" className="text-[#C5A059] font-bold hover:underline">(702) 384-1453</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-primary">
                Book Online (Booksy)
              </a>
              <a href="https://maps.google.com/?q=906+S+6th+St+105+Las+Vegas+NV+89101" target="_blank" rel="noreferrer" className="btn-brass-outline">
                Get Driving Directions
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-6 h-80 sm:h-96 border border-white/15 overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=906%20S%206th%20St%20%23105%20Las%20Vegas%20NV%2089101&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Boulevard Barber Shop Map"
            />
          </div>

        </div>

      </section>

    </main>
  );
}
