import { Calendar, Phone, Clock, Star, Scissors } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'Curated Grooming Menu | Boulevard Barber Shop',
  description: 'Explore our complete editorial service menu at Boulevard Barber Shop in Downtown Las Vegas. Master haircuts from $35, beard sculpting from $30, hot towel shaves from $30, VIP service from $80.',
};

export default function ServicesPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  const categories = [
    {
      title: "Precision Haircuts & Tapers",
      subtitle: "Tailored head contouring, skin fades, and classic scissor silhouettes",
      items: [
        {
          name: "Male Signature Haircut",
          price: "from $35",
          time: "40 min",
          description: "Consultation, personalized skin fade or classic scissor cut, steamed hot towel refresh, and razor neck cleanup."
        },
        {
          name: "Kids Haircut (Ages 12 & Under)",
          price: "from $25",
          time: "30 min",
          description: "Patient, precision haircut tailored for younger gentlemen with clean styling and comfortable finish."
        },
        {
          name: "Haircut & Beard Sculpt",
          price: "from $65",
          time: "60 min",
          description: "Complete signature haircut combined with full straight-razor beard shaping, volumetric tapering, and hot towel facial prep."
        }
      ]
    },
    {
      title: "Beard Sculpting & Straight Razor Shaves",
      subtitle: "Japanese steel double-pass precision and organic essential oil steam",
      items: [
        {
          name: "Beard Shaping & Razor Edge",
          price: "from $30",
          time: "30 min",
          description: "Sculpted beard trim, length reduction, cheek and neck straight-razor edge lineup with warm lather and cold towel finish."
        },
        {
          name: "Hot Towel Straight Razor Shave",
          price: "from $30",
          time: "30 min",
          description: "Traditional double-pass straight-razor facial shave with warm essential oil steam, rich lather, and revitalizing balm."
        },
        {
          name: "Razor Head Shave",
          price: "from $30",
          time: "30 min",
          description: "Complete scalp shave using Japanese steel straight razors, warm lather, and soothing moisturizing scalp massage."
        }
      ]
    },
    {
      title: "Executive Concierge & VIP Service",
      subtitle: "Private on-location grooming at your residence or Las Vegas Strip hotel suite",
      items: [
        {
          name: "VIP Strip Hotel / Home Service",
          price: "from $80",
          time: "60 min",
          description: "On-demand master barber service dispatched directly to your private hotel suite or Las Vegas residence."
        }
      ]
    }
  ];

  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">The Atelier Menu</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">Curated Grooming Menu</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">All grooming rituals include complimentary eucalyptus-steamed hot towels and lounge amenities.</p>
        </div>
      </FadeIn>

      {/* 2-Column Editorial Menu Book */}
      <div className="space-y-16">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="border-t border-white/15 pt-10">
            
            <div className="mb-8">
              <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">Category 0{catIdx + 1}</span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#F5F5F0] mt-1">{cat.title}</h2>
              <p className="text-xs text-[#94A3B8] font-sans mt-1">{cat.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="space-y-2 group">
                  <div className="flex items-baseline justify-between font-bold">
                    <span className="font-serif text-lg text-[#F5F5F0] group-hover:text-[#C5A059] transition-colors">{item.name}</span>
                    <span className="editorial-leader"></span>
                    <span className="font-mono text-sm text-[#C5A059] shrink-0">{item.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-mono text-[#94A3B8]">
                    <span className="font-sans text-xs text-[#94A3B8] leading-relaxed max-w-md">{item.description}</span>
                    <span className="shrink-0 ml-4 px-2 py-0.5 border border-white/10">{item.time}</span>
                  </div>
                  <div className="pt-2">
                    <a href={booksyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-[10px] font-mono text-[#C5A059] hover:underline uppercase tracking-wider font-semibold">
                      Book Service →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Persistent CTA Banner */}
      <div className="mt-20 border border-[#C5A059]/40 bg-[#080A0E] p-8 sm:p-12 text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-4xl text-[#F5F5F0]">Ready For An Impeccable Grooming Experience?</h3>
        <p className="text-sm text-[#94A3B8] font-sans max-w-xl mx-auto">Appointments are available 24/7 online. Walk-in guests are welcomed 7 days a week from 7 AM to 7 PM.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-primary">
            Reserve Appointment Online
          </a>
          <a href="tel:7023841453" className="btn-brass-outline">
            Call (702) 384-1453
          </a>
        </div>
      </div>

    </main>
  );
}
