import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Phone, Calendar, Clock, MapPin, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Boulevard Barber Shop | Downtown Las Vegas Luxury Grooming Lounge',
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
      <body className="bg-[#0B0D13] text-[#F5F5F0] min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-[#C5A059] selection:text-[#0B0D13]">
        
        {/* TOP STATUS UTILITY BAR */}
        <div className="border-b border-white/5 py-2 px-3 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#94A3B8] bg-[#080A0E] text-center overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <div className="flex items-center justify-center space-x-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shrink-0"></span>
              <span className="truncate">OPEN DAILY 7:00 AM – 7:00 PM • 906 S 6TH ST #105, DOWNTOWN LAS VEGAS</span>
            </div>
            <a href="tel:7023841453" className="hover:text-[#C5A059] flex items-center justify-center space-x-1 shrink-0 font-bold transition-colors">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>(702) 384-1453</span>
            </a>
          </div>
        </div>

        {/* STICKY LUXURY HEADER / NAVBAR */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0D13]/90 border-b border-white/10 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-3">
            
            {/* Logo Emblem with Circular HD Vector & Monogram */}
            <Link href="/" className="flex items-center space-x-3.5 group shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C5A059]/40 shadow-lg group-hover:border-[#C5A059] transition-all shrink-0 bg-white/5">
                <img src="/images/boulevard-logo.png" alt="Boulevard Barbershop Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-serif font-bold text-sm sm:text-base tracking-[0.18em] text-[#F5F5F0] uppercase leading-none whitespace-nowrap">
                  BOULEVARD
                </div>
                <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-[#C5A059] uppercase mt-1 whitespace-nowrap font-medium">BARBER LOUNGE • DTLV</p>
              </div>
            </Link>

            {/* Client-Side Navigation Links (next/link) */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
              <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
              <Link href="/team" className="hover:text-[#C5A059] transition-colors">Craftsmen</Link>
              <Link href="/lookbook" className="hover:text-[#C5A059] transition-colors">Lookbook</Link>
              <Link href="/visit" className="hover:text-[#C5A059] transition-colors">Visit</Link>
            </nav>

            {/* Persistent Action Triggers */}
            <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
              <a href="tel:7023841453" className="hidden lg:inline-flex btn-brass-outline px-4 py-2 text-xs font-mono">
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                (702) 384-1453
              </a>
              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brass-primary px-4 sm:px-6 py-2.5 text-[11px] sm:text-xs font-mono rounded-none"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Reserve Chair
              </a>
            </div>

          </div>
        </header>

        {/* MAIN PAGE VIEWPORT */}
        <div className="flex-grow w-full max-w-full overflow-hidden">
          {children}
        </div>

        {/* LUXURY EDITORIAL DIRECTORY FOOTER */}
        <footer className="bg-[#080A0E] border-t border-white/10 pt-16 pb-24 md:pb-12 text-[#94A3B8] text-xs font-mono w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand & Philosophy */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A059]/40 shrink-0 bg-white/5">
                  <img src="/images/boulevard-logo.png" alt="Boulevard Barbershop" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif font-bold text-[#F5F5F0] text-sm tracking-wider">BOULEVARD BARBERSHOP</span>
              </div>
              <p className="text-[#94A3B8] font-sans text-xs leading-relaxed font-normal">
                Downtown Las Vegas's quintessential executive grooming atelier. Combining private speakeasy hospitality with master Japanese steel straight-razor craftsmanship.
              </p>
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#C5A059] hover:underline font-bold">
                Book on Booksy →
              </a>
            </div>

            {/* Column 2: Navigation Directory */}
            <div>
              <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
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

            {/* Column 3: Hours & Appointments */}
            <div>
              <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
                Operating Schedule
              </h4>
              <div className="space-y-2 text-[#94A3B8]">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Monday – Sunday:</span>
                  <span className="text-[#F5F5F0] font-bold">7:00 AM – 7:00 PM</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] mt-2">Walk-ins welcomed 7 days a week. Private bookings available online 24/7.</p>
              </div>
            </div>

            {/* Column 4: Downtown Lounge */}
            <div>
              <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
                Downtown Lounge
              </h4>
              <p className="text-[#F5F5F0] font-medium">906 S 6th St #105</p>
              <p className="text-[#94A3B8]">Las Vegas, NV 89101</p>
              <p className="text-[#C5A059] text-[11px] mt-1">Historic 6th St Commercial District</p>
              <div className="mt-4 pt-3 border-t border-white/10">
                <a href="tel:7023841453" className="btn-brass-outline w-full py-2.5 text-xs">
                  <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                  Call (702) 384-1453
                </a>
              </div>
            </div>

          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
            <p>© {new Date().getFullYear()} Boulevard Barber Shop. All rights reserved.</p>
            <p>906 S 6th St #105, Downtown Las Vegas, NV 89101 • (702) 384-1453</p>
          </div>
        </footer>

        {/* PERSISTENT MOBILE CONCIERGE BAR */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0D13]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 max-w-full overflow-hidden">
          <Link href="/" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Home
          </Link>
          <Link href="/services" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Menu
          </Link>
          <Link href="/team" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Team
          </Link>
          <Link href="/visit" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Visit
          </Link>
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="flex-2 btn-brass-primary py-2 px-3 text-center text-[10px] font-mono font-bold">
            Reserve
          </a>
        </div>

      </body>
    </html>
  );
}
