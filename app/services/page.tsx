import { Scissors, Clock, Sparkles, ShieldCheck, Calendar, Phone } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'The Grooming Atelier Menu | Boulevard Barber Shop',
  description: 'Explore the complete grooming menu for Boulevard Barber Shop. Transparent starting prices on haircuts, beard sculpts, and straight razor shaves.',
};

export default function ServicesPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  return (
    <main className="py-12 sm:py-20 px-3 sm:px-8 max-w-6xl mx-auto overflow-hidden">
      
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">The Atelier Service Book</span>
          <h1 className="font-cinzel font-black text-3xl sm:text-6xl text-white uppercase tracking-tight break-words">The Grooming Menu</h1>
          <p className="text-gray-400 text-xs sm:text-sm font-mono mt-3">Transparent starting rates across all chairs in Downtown Las Vegas.</p>
        </div>
      </FadeIn>

      {/* 2-Column Editorial Menu Book */}
      <div className="bg-[#10131B] border-2 border-[#C5A059]/40 p-5 sm:p-12 rounded-lg shadow-2xl space-y-12">
        
        {/* Category 1: Signature Cuts */}
        <div>
          <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-[#DFBA68] uppercase tracking-wider border-b border-[#C5A059]/30 pb-3 mb-6 flex items-center justify-between">
            <span>Signature Cuts</span>
            <Scissors className="w-5 h-5 text-[#C5A059]" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Male Haircut */}
            <div className="p-5 rounded bg-[#0B0D13] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-cinzel font-bold text-base sm:text-lg text-white">Male Haircut</span>
                  <span className="leader-dots hidden sm:block"></span>
                  <span className="font-mono font-bold text-[#DFBA68] text-base sm:text-lg">$35</span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-1.5 mb-4">Precision skin fade, taper, crop, or classic scissor cut tailored to head shape. Includes hot lather razor neck clean-up & styling.</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1 text-[#C5A059]" /> 40 min</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-4 py-1.5 text-[11px]">Book</a>
              </div>
            </div>

            {/* Kids Haircut */}
            <div className="p-5 rounded bg-[#0B0D13] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-cinzel font-bold text-base sm:text-lg text-white">Kids Haircut (10 & Under)</span>
                  <span className="leader-dots hidden sm:block"></span>
                  <span className="font-mono font-bold text-[#DFBA68] text-base sm:text-lg">$25</span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-1.5 mb-4">Sharp, patient children's haircut in a welcoming and relaxed chair environment.</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1 text-[#C5A059]" /> 30 min</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-4 py-1.5 text-[11px]">Book</a>
              </div>
            </div>

          </div>
        </div>

        {/* Category 2: Beard & Straight Razor */}
        <div>
          <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-[#DFBA68] uppercase tracking-wider border-b border-[#C5A059]/30 pb-3 mb-6 flex items-center justify-between">
            <span>Beard & Straight Razor</span>
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Item 1 */}
            <div className="p-5 rounded bg-[#0B0D13] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-cinzel font-bold text-base sm:text-lg text-white">Haircut & Beard Sculpt</span>
                  <span className="leader-dots hidden sm:block"></span>
                  <span className="font-mono font-bold text-[#DFBA68] text-base sm:text-lg">$65</span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-1.5 mb-4">The definitive full grooming experience. Custom precision haircut plus full beard shaping, straight razor edge lining, hot towel, and beard oil.</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1 text-[#C5A059]" /> 60 min</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-4 py-1.5 text-[11px]">Book</a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-5 rounded bg-[#0B0D13] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-cinzel font-bold text-base sm:text-lg text-white">Beard Shaping & Razor Edge</span>
                  <span className="leader-dots hidden sm:block"></span>
                  <span className="font-mono font-bold text-[#DFBA68] text-base sm:text-lg">$30</span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-1.5 mb-4">Detailed beard sculpting, length reduction, cheek/jawline straight razor defining, and soothing hot towel application.</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1 text-[#C5A059]" /> 30 min</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-4 py-1.5 text-[11px]">Book</a>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-5 rounded bg-[#0B0D13] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-cinzel font-bold text-base sm:text-lg text-white">Hot Towel Straight Razor Shave</span>
                  <span className="leader-dots hidden sm:block"></span>
                  <span className="font-mono font-bold text-[#DFBA68] text-base sm:text-lg">$30</span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-1.5 mb-4">Old-school classic barber shave. Pre-shave oil, two steaming hot towels, rich warm lather, double-pass razor shave, and cooling tonic.</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1 text-[#C5A059]" /> 30 min</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-4 py-1.5 text-[11px]">Book</a>
              </div>
            </div>

            {/* Item 4 */}
            <div className="p-5 rounded bg-[#0B0D13] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-cinzel font-bold text-base sm:text-lg text-white">Razor Head Shave</span>
                  <span className="leader-dots hidden sm:block"></span>
                  <span className="font-mono font-bold text-[#DFBA68] text-base sm:text-lg">$30</span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-1.5 mb-4">Complete full scalp straight razor shave with essential oil hot towel prep, rich lather, and moisturizing post-shave scalp treatment.</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1 text-[#C5A059]" /> 30 min</span>
                <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-4 py-1.5 text-[11px]">Book</a>
              </div>
            </div>

          </div>
        </div>

        {/* Category 3: VIP On-Location */}
        <div>
          <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-[#DFBA68] uppercase tracking-wider border-b border-[#C5A059]/30 pb-3 mb-6 flex items-center justify-between">
            <span>VIP On-Location Packages</span>
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
          </h2>

          <div className="p-6 rounded bg-[#08090E] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-baseline space-x-3 mb-1">
                <span className="font-cinzel font-bold text-lg sm:text-xl text-white">VIP Home / Strip Hotel Suite Service</span>
                <span className="font-mono font-bold text-[#DFBA68] text-lg">$80</span>
              </div>
              <p className="text-xs text-gray-400 font-light">Executive on-location master barber service dispatched directly to your hotel room or residence. Full mobile setup.</p>
            </div>
            <div className="flex items-center space-x-4 shrink-0 font-mono text-xs">
              <span className="text-gray-500">60 min</span>
              <a href="tel:7023841453" className="btn-brass-solid px-6 py-2.5">
                <Phone className="w-3.5 h-3.5 mr-1" /> Call To Book
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Persistent Bottom Action Box */}
      <div className="text-center mt-12">
        <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid px-10 py-4 text-xs sm:text-sm font-mono font-bold shadow-2xl">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule All Appointments on Booksy
        </a>
      </div>

    </main>
  );
}
