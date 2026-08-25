import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Boulevard Barber Shop | Downtown Las Vegas Luxury Grooming Lounge',
  description: 'Boulevard Barber Shop at 906 S 6th St #105, Downtown Las Vegas. Executive skin fades, hot lather straight razor shaves, and beard sculpting. Open 7 days 7 AM – 7 PM.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0e131f] text-[#F5F5F0] min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-[#C5A059] selection:text-[#0e131f]">
        
        {/* TOP NOTICE TICKER */}
        <div className="bg-[#080a0f] border-b border-[#C5A059]/20 py-1.5 px-3 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#E5C478] text-center overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <div className="flex items-center justify-center space-x-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="truncate">OPEN DAILY 7:00 AM – 7:00 PM • DOWNTOWN LAS VEGAS</span>
            </div>
            <a href="tel:7023841453" className="hover:underline flex items-center justify-center space-x-1 shrink-0">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>(702) 384-1453</span>
            </a>
          </div>
        </div>

        {/* STICKY LUXURY NAVBAR */}
        <header className="sticky top-0 z-50 bg-[#0e131f]/95 backdrop-blur-md border-b border-[#C5A059]/20 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-8 h-20 flex items-center justify-between gap-2">
            
            {/* Monogram Brand Emblem */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded border border-[#C5A059] bg-[#080a0f] flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.25)] group-hover:border-[#E5C478] transition-all shrink-0">
                <span className="font-serif font-black text-xs sm:text-base text-[#C5A059] tracking-tighter">BBS</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xs min-[360px]:text-sm sm:text-base tracking-wider text-white uppercase leading-none whitespace-nowrap">
                  BOULEVARD
                </div>
                <p className="text-[7.5px] min-[360px]:text-[8.5px] font-mono tracking-[0.18em] text-[#C5A059] uppercase mt-1 whitespace-nowrap">Barber Lounge • DTLV</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-8 text-xs font-mono font-bold uppercase tracking-widest text-[#F5F5F0]">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
              <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
              <Link href="/team" className="hover:text-[#C5A059] transition-colors">Team</Link>
              <Link href="/lookbook" className="hover:text-[#C5A059] transition-colors">Lookbook</Link>
              <Link href="/visit" className="hover:text-[#C5A059] transition-colors">Visit</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <a href="tel:7023841453" className="hidden lg:inline-flex btn-brass-outline px-3 sm:px-4 py-2 text-xs font-mono">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#C5A059]" />
                (702) 384-1453
              </a>
              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brass-solid px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-mono"
              >
                <Calendar className="w-3.5 h-3.5 mr-1" />
                Reserve
              </a>
            </div>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-grow w-full max-w-full overflow-hidden">
          {children}
        </div>

        {/* GLOBAL DIRECTORY FOOTER */}
        <footer className="bg-[#080a0f] border-t border-[#C5A059]/20 pt-16 pb-24 md:pb-12 text-[#94a3b8] text-xs font-mono w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand Directory */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded border border-[#C5A059] bg-black flex items-center justify-center font-serif text-xs text-[#C5A059] font-bold">BBS</div>
                <span className="font-serif font-bold text-white text-sm">BOULEVARD BARBER SHOP</span>
              </div>
              <p className="text-gray-400 font-sans text-xs leading-relaxed">
                Downtown Las Vegas's quintessential grooming atelier. Preserving classic American barbering traditions with modern luxury standards.
              </p>
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#C5A059] hover:underline font-bold">
                Book on Booksy →
              </a>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-[#C5A059]/20 pb-1">
                Directory
              </h4>
              <ul className="space-y-2.5">
                <li><Link href="/" className="hover:text-[#C5A059] transition-colors">Homepage</Link></li>
                <li><Link href="/services" className="hover:text-[#C5A059] transition-colors">The Grooming Menu</Link></li>
                <li><Link href="/team" className="hover:text-[#C5A059] transition-colors">Master Craftsmen Roster</Link></li>
                <li><Link href="/lookbook" className="hover:text-[#C5A059] transition-colors">Visual Portfolio</Link></li>
                <li><Link href="/visit" className="hover:text-[#C5A059] transition-colors">Lounge & Location</Link></li>
              </ul>
            </div>

            {/* Column 3: Hours & Schedule */}
            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-[#C5A059]/20 pb-1">
                Hours of Operation
              </h4>
              <div className="space-y-1.5 text-gray-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Monday – Sunday:</span>
                  <span className="text-[#C5A059] font-bold">7:00 AM – 7:00 PM</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">Walk-ins welcomed daily. Appointments available 24/7 via Booksy.</p>
              </div>
            </div>

            {/* Column 4: Location & Direct Call */}
            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-[#C5A059]/20 pb-1">
                Downtown Lounge
              </h4>
              <p className="text-white">906 S 6th St #105</p>
              <p className="text-gray-400">Las Vegas, NV 89101</p>
              <p className="text-[#C5A059] text-[11px] mt-1">Historic 6th St & E Charleston Blvd</p>
              <div className="mt-4 pt-3 border-t border-white/5">
                <a href="tel:7023841453" className="btn-brass-outline w-full py-2 text-xs">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#C5A059]" />
                  Call (702) 384-1453
                </a>
              </div>
            </div>

          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-[#C5A059]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
            <p>© {new Date().getFullYear()} Boulevard Barber Shop. All rights reserved.</p>
            <p>906 S 6th St #105, Downtown Las Vegas, NV 89101</p>
          </div>
        </footer>

        {/* PERSISTENT MOBILE BOTTOM NAVIGATION BAR */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080a0f]/95 backdrop-blur-xl border-t border-[#C5A059]/30 px-3 py-2 flex items-center justify-between gap-2 max-w-full overflow-hidden">
          <Link href="/" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10 rounded">
            Home
          </Link>
          <Link href="/services" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10 rounded">
            Menu
          </Link>
          <Link href="/team" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10 rounded">
            Team
          </Link>
          <Link href="/visit" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10 rounded">
            Visit
          </Link>
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="flex-2 btn-brass-solid py-2 px-3 text-center text-[10px] font-mono font-bold rounded">
            Reserve
          </a>
        </div>

      </body>
    </html>
  );
}
