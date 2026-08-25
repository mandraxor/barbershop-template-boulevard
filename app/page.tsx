import Link from 'next/link';
import { Calendar, Phone, Clock, Star, Scissors, MapPin } from 'lucide-react';

export default function HomePage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <main className="max-w-[1440px] mx-auto p-3 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* ===================================================================
             LEFT COLUMN (COL-SPAN 7): HERO + CURATED MENU + PHOTO TILES
             =================================================================== */}
        <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
          
          {/* 1. CINEMATIC HERO (WITH ACTIVE KEN BURNS SLOW-ZOOM LOOP & OVERLAY) */}
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] rounded overflow-hidden shadow-sm flex flex-col justify-end p-6 sm:p-10 border border-black/10 bg-black">
            
            {/* Animated Cinematic Background Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center animate-ken-burns-hero"
              style={{ backgroundImage: "url('/images/hero-cinematic.jpg')" }}
            />
            
            {/* Dark Vignette Overlay (bg-black/60) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35 z-0" />

            {/* Hero Content */}
            <div className="relative z-10 max-w-xl text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-black/60 backdrop-blur-md text-[10px] font-mono text-gray-200 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                <span>OPEN DAILY 7:00 AM – 7:00 PM • DOWNTOWN LAS VEGAS</span>
              </div>

              <h1 className="font-editorial-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase leading-tight mb-2">
                BBS BOULEVARD <br />
                BARBER SHOP LV
              </h1>
              
              <p className="font-mono text-[10px] sm:text-xs tracking-widest text-gray-300 uppercase mb-6 leading-relaxed">
                | PRECISION CUTS. IMMERSIVE GROOMING. <br className="hidden sm:inline" />
                DOWNTOWN'S PREMIER BARBER LOUNGE.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial-hero">
                  Reserve Your Chair
                </a>
                <Link href="/services" className="btn-editorial-hero bg-white/10 backdrop-blur-sm border-white/40 hover:bg-white hover:text-black">
                  Explore Menu
                </Link>
              </div>
            </div>

          </div>

          {/* 2. THE CURATED MENU (FLANKED BY 2 BESPOKE IMAGES) */}
          <div className="bg-[#FAF8F3] border border-black/10 p-5 sm:p-7 rounded shadow-sm">
            
            <h2 className="font-editorial-serif text-xl sm:text-2xl font-bold text-center tracking-widest uppercase mb-6 text-[#18191D]">
              THE CURATED MENU
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* Left Image: Vintage Brass Atomizer & Tools */}
              <div className="hidden md:block md:col-span-3 h-52 sm:h-64 rounded overflow-hidden border border-black/10 bg-black">
                <img 
                  src="/images/brass-atomizer.jpg" 
                  alt="Vintage Brass Grooming Tools" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Center: Typewriter / Monospace Menu with Dot Leaders */}
              <div className="md:col-span-6 font-mono text-xs text-[#18191D] space-y-4">
                
                {/* Menu Item 1 */}
                <div>
                  <div className="flex items-baseline justify-between font-bold">
                    <span className="uppercase">Male Signature Cut</span>
                    <span className="editorial-dots"></span>
                    <span>$35</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-normal italic mt-0.5">* hot towel finish, styled look</p>
                </div>

                {/* Menu Item 2 */}
                <div>
                  <div className="flex items-baseline justify-between font-bold">
                    <span className="uppercase">Haircut & Beard Sculpt</span>
                    <span className="editorial-dots"></span>
                    <span>$65</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-normal italic mt-0.5">* full signature with volumetric shaping</p>
                </div>

                {/* Menu Item 3 */}
                <div>
                  <div className="flex items-baseline justify-between font-bold">
                    <span className="uppercase">Hot Towel Straight Razor Shave</span>
                    <span className="editorial-dots"></span>
                    <span>$30</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-normal italic mt-0.5">* essential oil facial steam, warm lather</p>
                </div>

                {/* Menu Item 4 */}
                <div>
                  <div className="flex items-baseline justify-between font-bold">
                    <span className="uppercase">VIP On-Location Service</span>
                    <span className="editorial-dots"></span>
                    <span>$80</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-normal italic mt-0.5">* at your residence or Strip hotel</p>
                </div>

              </div>

              {/* Right Image: Precision Razor Beard Lineup Profile */}
              <div className="hidden md:block md:col-span-3 h-52 sm:h-64 rounded overflow-hidden border border-black/10 bg-black">
                <img 
                  src="/images/razor-beard.jpg" 
                  alt="Precision Razor Beard Lineup" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-black/10 text-center">
              <Link href="/services" className="text-xs font-mono text-[#8C6B1B] hover:underline font-bold uppercase tracking-wider">
                View All Categories & Full Pricing Breakdown →
              </Link>
            </div>

          </div>

          {/* 3. BOTTOM HORIZONTAL PHOTO TILES (3 SQUARES) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="h-32 sm:h-44 rounded overflow-hidden border border-black/10 bg-black">
              <img src="/images/bryan-action.jpg" alt="Barber Craft" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="h-32 sm:h-44 rounded overflow-hidden border border-black/10 bg-black">
              <img src="/images/fade-textured.jpg" alt="Fade Textured" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="h-32 sm:h-44 rounded overflow-hidden border border-black/10 bg-black">
              <img src="/images/mid-drop-fade.jpg" alt="Mid Drop Fade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

        </div>


        {/* ===================================================================
             MIDDLE STACK (COL-SPAN 2): VERTICAL MAGAZINE INSERTS (DESKTOP)
             =================================================================== */}
        <div className="hidden xl:flex xl:col-span-2 flex-col space-y-4">
          
          {/* Top Insert: Brass Atomizer */}
          <div className="h-44 rounded overflow-hidden border border-black/10 bg-black">
            <img src="/images/brass-atomizer.jpg" alt="Atomizer" className="w-full h-full object-cover" />
          </div>

          {/* Middle Insert: Hot Razor Lineup with Caption */}
          <div className="flex flex-col">
            <div className="h-48 rounded overflow-hidden border border-black/10 bg-black">
              <img src="/images/razor-beard.jpg" alt="Hot Razor Lineup" className="w-full h-full object-cover" />
            </div>
            <p className="font-editorial-serif text-sm font-semibold text-[#18191D] mt-2">Hot Razor Lineup</p>
          </div>

          {/* Bottom Insert: Master Barber in Vest with Shears */}
          <div className="flex-grow flex flex-col justify-end">
            <div className="relative h-64 rounded overflow-hidden border border-black/10 bg-black">
              <img src="/images/barber-vest.jpg" alt="Henry Classic V" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/85 text-white font-mono text-[10px]">
                <p className="font-bold">Henry Classic V</p>
                <p className="text-gray-300 text-[9px]">Years of experience</p>
              </div>
            </div>
          </div>

        </div>


        {/* ===================================================================
             RIGHT COLUMN (COL-SPAN 3 / 5): MASTER CRAFTSMEN + VISIT THE LOUNGE
             =================================================================== */}
        <div className="lg:col-span-5 xl:col-span-3 flex flex-col space-y-5 sm:space-y-6">
          
          {/* 1. MEET YOUR MASTER CRAFTSMEN */}
          <div className="bg-[#FAF8F3] border border-black/10 p-5 sm:p-6 rounded flex flex-col justify-between flex-grow shadow-sm">
            <div>
              
              <h2 className="font-editorial-serif text-lg sm:text-xl font-bold tracking-widest uppercase mb-4 text-[#18191D]">
                MEET YOUR MASTER CRAFTSMEN
              </h2>

              {/* Craftsmen List with Starting Rates */}
              <div className="font-mono text-[11px] text-[#18191D] space-y-2.5 mb-6 border-b border-black/10 pb-4">
                
                <div className="flex items-baseline justify-between">
                  <span>Elier</span>
                  <span className="editorial-craftsmen-dots"></span>
                  <span className="font-bold">from $35</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span>Bryan Lorenzo Otero</span>
                  <span className="editorial-craftsmen-dots"></span>
                  <span className="font-bold">from $35</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span>Ramírez Lay Jiménez</span>
                  <span className="editorial-craftsmen-dots"></span>
                  <span className="font-bold">from $30</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span>Henry Classic V</span>
                  <span className="editorial-craftsmen-dots"></span>
                  <span className="font-bold">from $35</span>
                </div>

              </div>

              {/* Master Craftsmen Photo Grid (Exact 3-Card Layout) */}
              <div className="space-y-4">
                
                {/* Master Barber 1: Elier (Full Width Editorial Portrait) */}
                <div className="relative h-48 sm:h-52 rounded overflow-hidden border border-black/10 bg-black group">
                  <img src="/images/elier-portrait.jpg" alt="Elier Master Barber" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 caption-box-dark flex items-center justify-between">
                    <div>
                      <h3 className="font-editorial-serif font-bold text-xs text-white">Elier</h3>
                      <p className="font-mono text-[9px] text-gray-300">Master barber, razor architect</p>
                    </div>
                    <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial-hero text-[9px] py-1 px-2.5">
                      Book
                    </a>
                  </div>
                </div>

                {/* Two Split Master Cards Below (Bryan & Henry) */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Barber 2: Bryan */}
                  <div className="relative h-44 rounded overflow-hidden border border-black/10 bg-black group">
                    <img src="/images/bryan-action.jpg" alt="Bryan Lorenzo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 caption-box-dark">
                      <p className="font-editorial-serif font-bold text-[11px] text-white truncate">Bryan Lorenzo</p>
                      <p className="font-mono text-[8px] text-gray-300 truncate">Precision Specialist</p>
                    </div>
                  </div>

                  {/* Barber 3: Henry */}
                  <div className="relative h-44 rounded overflow-hidden border border-black/10 bg-black group">
                    <img src="/images/henry-classic.jpg" alt="Henry Classic V" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 caption-box-dark">
                      <p className="font-editorial-serif font-bold text-[11px] text-white truncate">Henry Classic V</p>
                      <p className="font-mono text-[8px] text-gray-300 truncate">Classic Scissor Craft</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="pt-4 mt-4 border-t border-black/10 text-center">
              <Link href="/team" className="btn-editorial-dark w-full py-2.5 text-center text-xs">
                Explore Full Roster Profiles →
              </Link>
            </div>

          </div>


          {/* 2. VISIT THE LOUNGE (LOCATION & HOURS AS PICTURED) */}
          <div className="bg-[#FAF8F3] border border-black/10 p-5 rounded shadow-sm">
            
            <h2 className="font-editorial-serif text-base sm:text-lg font-bold tracking-widest uppercase mb-4 text-[#18191D] text-center">
              VISIT THE LOUNGE
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
              
              {/* Left Info Box */}
              <div className="border border-black/15 p-4 rounded bg-white text-center font-mono text-[11px] space-y-1">
                <p className="font-bold text-xs uppercase tracking-wider text-black mb-1.5">HOURS</p>
                <p className="text-gray-800">Monday – Sunday</p>
                <p className="font-bold text-black">7:00 AM – 7:00 PM</p>
                <div className="pt-2 mt-2 border-t border-black/10 text-[10px] text-gray-700">
                  <p>906 S 6th St #105</p>
                  <p>Las Vegas, NV 89101</p>
                  <a href="tel:7023841453" className="font-bold text-black hover:text-[#8C6B1B] block mt-1">(702) 384-1453</a>
                </div>
              </div>

              {/* Right Map Embed */}
              <div className="h-36 rounded overflow-hidden border border-black/15 bg-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=906%20S%206th%20St%20%23105%20Las%20Vegas%20NV%2089101&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Boulevard Barber Shop Location"
                />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-2 mt-3">
              <a href="https://maps.google.com/?q=906+S+6th+St+105+Las+Vegas+NV+89101" target="_blank" rel="noopener noreferrer" className="btn-editorial-dark py-1.5 text-[10px] text-center">
                Google Maps
              </a>
              <a href="https://maps.apple.com/?address=906+S+6th+St+105,Las+Vegas,NV+89101" target="_blank" rel="noopener noreferrer" className="btn-editorial-dark py-1.5 text-[10px] text-center bg-gray-800">
                Apple Maps
              </a>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
