import { MapPin, Phone, Clock, ShieldCheck, Car, Calendar } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'Visit The Lounge & Directions | Boulevard Barber Shop',
  description: 'Find Boulevard Barber Shop at 906 S 6th St #105, Downtown Las Vegas, NV 89101. Operating hours, parking information, and booking FAQ.',
};

export default function VisitPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  const faqs = [
    {
      q: "Do you accept walk-in appointments?",
      a: "Yes. Walk-in clients are welcomed 7 days a week from 7:00 AM to 7:00 PM. To avoid wait times during peak afternoon hours, we recommend booking online via Booksy."
    },
    {
      q: "Where should I park when visiting?",
      a: "Dedicated guest parking is located directly in front of Suite #105 along the Historic 6th Street commercial plaza, with free street parking along 6th St and E Charleston Blvd."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit cards, debit, Apple Pay, Google Pay, Booksy direct in-app payments, and cash."
    },
    {
      q: "How does the VIP On-Location service work?",
      a: "Our master barbers are fully equipped to provide private haircuts and hot towel razor shaves at your residence or Las Vegas Strip hotel suite (starting from $80). Book online or call directly to schedule."
    }
  ];

  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">Downtown Atelier</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">Visit The Lounge</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">Historic 6th Street Commercial District, Downtown Las Vegas.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Contact & Hours Column */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="border border-white/10 p-8 bg-[#080A0E] space-y-6">
            <h2 className="font-serif text-2xl text-[#F5F5F0]">Operating Hours</h2>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#94A3B8]">Monday – Sunday</span>
                <span className="text-[#C5A059] font-bold">7:00 AM – 7:00 PM</span>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans">Open 7 days a week with active master barbers on staff every day.</p>
          </div>

          <div className="border border-white/10 p-8 bg-[#080A0E] space-y-6">
            <h2 className="font-serif text-2xl text-[#F5F5F0]">Lounge Address</h2>
            <div className="space-y-2 font-mono text-xs">
              <p className="text-[#F5F5F0] text-sm font-bold">906 S 6th St #105</p>
              <p className="text-[#94A3B8]">Las Vegas, NV 89101</p>
              <p className="text-[#C5A059] text-[11px]">Historic 6th St & E Charleston Blvd</p>
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:7023841453" className="btn-brass-outline w-full py-2.5 text-xs text-center font-mono">
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                Call (702) 384-1453
              </a>
              <a href={booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-primary w-full py-2.5 text-xs text-center font-mono">
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book Online (Booksy)
              </a>
            </div>
          </div>

        </div>

        {/* Map Embed Column */}
        <div className="lg:col-span-7 border border-white/10 overflow-hidden h-[450px] lg:h-auto min-h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=906%20S%206th%20St%20%23105%20Las%20Vegas%20NV%2089101&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Boulevard Barber Shop Google Map"
          />
        </div>

      </div>

      {/* FAQ Accordion Section */}
      <div className="border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Concierge Info</span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#F5F5F0] mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-6">
              <h3 className="font-serif font-bold text-lg text-[#F5F5F0] mb-2">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
