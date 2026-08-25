import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Boulevard Barber Shop | Downtown Las Vegas Luxury Grooming Atelier',
  description: 'Boulevard Barber Shop at 906 S 6th St #105, Downtown Las Vegas. Master skin tapers, hot lather straight razor shaves, and sculpted beard lineups. Open 7 days 7 AM – 7 PM.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F8F5EE] text-[#18191D] min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-[#C5A059] selection:text-[#0F1115]">
        
        {/* TOP NOTICE TICKER */}
        <div className="border-b border-black/10 py-2 px-3 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#18191D] bg-[#EDE7DA] text-center overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <div className="flex items-center justify-center space-x-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="truncate font-semibold">OPEN DAILY 7:00 AM – 7:00 PM • 906 S 6TH ST #105, DOWNTOWN LAS VEGAS</span>
            </div>
            <a href="tel:7023841453" className="hover:underline flex items-center justify-center space-x-1 shrink-0 font-bold">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>(702) 384-1453</span>
            </a>
          </div>
        </div>

        {/* STICKY EDITORIAL NAVBAR */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F5EE]/95 border-b border-black/10 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-8 h-20 flex items-center justify-between gap-3">
            
            {/* Monogram Brand Emblem */}
            <Link href="/" className="flex items-center space-x-3 group shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm border border-black/20 bg-[#0F1115] flex items-center justify-center shadow-sm group-hover:border-[#C5A059] transition-all shrink-0">
                <span className="font-cinzel font-black text-sm sm:text-base text-[#DFBA68] tracking-tighter">BBS</span>
              </div>
              <div>
                <div className="font-cinzel font-bold text-xs min-[360px]:text-sm sm:text-base tracking-widest text-[#18191D] uppercase leading-none whitespace-nowrap">
                  BOULEVARD
                </div>
                <p className="text-[7.5px] min-[360px]:text-[8.5px] font-mono tracking-[0.22em] text-[#8C6B1B] uppercase mt-1 whitespace-nowrap">BARBER LOUNGE • DTLV</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#18191D]">
              <Link href="/" className="hover:text-[#8C6B1B] transition-colors">Home</Link>
              <Link href="/services" className="hover:text-[#8C6B1B] transition-colors">Services</Link>
              <Link href="/team" className="hover:text-[#8C6B1B] transition-colors">Craftsmen</Link>
              <Link href="/lookbook" className="hover:text-[#8C6B1B] transition-colors">Lookbook</Link>
              <Link href="/visit" className="hover:text-[#8C6B1B] transition-colors">Visit</Link>
            </nav>

            {/* Action CTAs */}
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <a href="tel:7023841453" className="hidden lg:inline-flex btn-editorial-dark px-4 py-2 text-xs font-mono">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#DFBA68]" />
                (702) 384-1453
              </a>
              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-editorial-dark px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs font-mono rounded-sm shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Reserve Chair
              </a>
            </div>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-grow w-full max-w-full overflow-hidden">
          {children}
        </div>

        {/* GLOBAL DIRECTORY FOOTER */}
        <footer className="bg-[#EDE7DA] border-t border-black/10 pt-16 pb-24 md:pb-12 text-[#55575E] text-xs font-mono w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand Directory */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-sm border border-black/20 bg-black flex items-center justify-center font-cinzel text-xs text-[#DFBA68] font-bold">BBS</div>
                <span className="font-cinzel font-bold text-[#18191D] text-sm tracking-wider">BOULEVARD BARBER SHOP</span>
              </div>
              <p className="text-gray-600 font-sans text-xs leading-relaxed font-normal">
                Downtown Las Vegas's quintessential grooming atelier. Combining speakeasy lounge hospitality with traditional American straight-razor craftsmanship.
              </p>
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#8C6B1B] hover:underline font-bold">
                Book on Booksy →
              </a>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-cinzel font-bold text-[#18191D] text-xs uppercase tracking-[0.2em] mb-4 border-b border-black/10 pb-1.5">
                Directory
              </h4>
              <ul className="space-y-2.5">
                <li><Link href="/" className="hover:text-[#8C6B1B] transition-colors">Homepage</Link></li>
                <li><Link href="/services" className="hover:text-[#8C6B1B] transition-colors">The Grooming Menu</Link></li>
                <li><Link href="/team" className="hover:text-[#8C6B1B] transition-colors">Master Craftsmen Roster</Link></li>
                <li><Link href="/lookbook" className="hover:text-[#8C6B1B] transition-colors">Visual Portfolio</Link></li>
                <li><Link href="/visit" className="hover:text-[#8C6B1B] transition-colors">Lounge & Location</Link></li>
              </ul>
            </div>

            {/* Column 3: Hours & Schedule */}
            <div>
              <h4 className="font-cinzel font-bold text-[#18191D] text-xs uppercase tracking-[0.2em] mb-4 border-b border-black/10 pb-1.5">
                Operating Schedule
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span>Monday – Sunday:</span>
                  <span className="text-[#18191D] font-bold">7:00 AM – 7:00 PM</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">Walk-ins welcomed 7 days a week. Appointments available 24/7 online.</p>
              </div>
            </div>

            {/* Column 4: Downtown Lounge */}
            <div>
              <h4 className="font-cinzel font-bold text-[#18191D] text-xs uppercase tracking-[0.2em] mb-4 border-b border-black/10 pb-1.5">
                Downtown Lounge
              </h4>
              <p className="text-[#18191D] font-medium">906 S 6th St #105</p>
              <p className="text-gray-600">Las Vegas, NV 89101</p>
              <p className="text-[#8C6B1B] text-[11px] mt-1">Historic 6th St & E Charleston Blvd</p>
              <div className="mt-4 pt-3 border-t border-black/10">
                <a href="tel:7023841453" className="btn-editorial-dark w-full py-2.5 text-xs">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#DFBA68]" />
                  Call (702) 384-1453
                </a>
              </div>
            </div>

          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
            <p>© {new Date().getFullYear()} Boulevard Barber Shop. All rights reserved.</p>
            <p>906 S 6th St #105, Downtown Las Vegas, NV 89101 • (702) 384-1453</p>
          </div>
        </footer>

        {/* PERSISTENT MOBILE BOTTOM NAVIGATION BAR */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F1115]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 max-w-full overflow-hidden">
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
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="flex-2 btn-editorial-hero bg-white text-black py-2 px-3 text-center text-[10px] font-mono font-bold rounded">
            Reserve
          </a>
        </div>

      </body>
    </html>
  );
}
