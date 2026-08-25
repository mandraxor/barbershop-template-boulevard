'use client';
import { useState } from 'react';
import { MapPin, Phone, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function VisitPage() {
  const faqs = [
    {
      q: "Do you accept walk-ins?",
      a: "Yes! Walk-ins are welcomed 7 days a week from 7:00 AM to 7:00 PM. For weekend chairs or specific master barbers, online booking on Booksy is recommended."
    },
    {
      q: "Where is parking located on 6th Street?",
      a: "Convenient free and metered street parking is available directly in front of the shop on S 6th Street, as well as along E Charleston Blvd."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Cash, Apple Pay, Google Pay, Visa, Mastercard, American Express, and Discover."
    },
    {
      q: "Do you offer mobile or hotel suite cuts on the Las Vegas Strip?",
      a: "Yes, our VIP on-location service is available from $80. Please call us directly at (702) 384-1453 to schedule your private session."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="py-12 sm:py-20 px-3 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">Downtown Las Vegas</span>
        <h1 className="font-serif font-black text-3xl sm:text-6xl text-white uppercase tracking-tight break-words">Lounge & Location</h1>
        <p className="text-gray-400 text-xs sm:text-sm font-mono mt-3">Historic 6th Street Commercial District (S 6th St & E Charleston Blvd)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Information Card */}
        <div className="lg:col-span-5 bg-[#121620] border border-[#C5A059]/40 p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-2xl overflow-hidden">
          <div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-6">Visit Our Shop</h2>

            <div className="space-y-6 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-base">Boulevard Barber Shop</p>
                  <p className="text-gray-400">906 S 6th St #105, Las Vegas, NV 89101</p>
                  <p className="text-[#C5A059] text-xs font-mono mt-1">Between E Charleston Blvd & E Clark Ave</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <a href="tel:7023841453" className="font-bold text-white hover:text-[#C5A059] transition-colors text-base font-mono">(702) 384-1453</a>
              </div>

              <div className="pt-6 border-t border-white/10 font-mono text-xs">
                <p className="uppercase text-[#C5A059] font-bold mb-2 tracking-wider flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 shrink-0" /> Operating Schedule
                </p>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Monday – Sunday:</span>
                  <span className="font-bold text-[#E5C478]">7:00 AM – 7:00 PM</span>
                </div>
                <p className="text-gray-400 mt-2 text-[11px]">Open 7 days a week. Early morning & evening availability.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 mt-8 font-mono text-xs">
            <a 
              href="https://maps.google.com/?q=906+S+6th+St+105+Las+Vegas+NV+89101" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brass-solid py-3 text-center"
            >
              Google Maps
            </a>
            <a 
              href="https://maps.apple.com/?address=906+S+6th+St+105,Las+Vegas,NV+89101" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brass-outline py-3 text-center"
            >
              Apple Maps
            </a>
          </div>
        </div>

        {/* Right Embedded Google Map */}
        <div className="lg:col-span-7 bg-[#121620] border border-[#C5A059]/40 rounded-lg overflow-hidden min-h-[360px] shadow-2xl">
          <iframe 
            src="https://maps.google.com/maps?q=906%20S%206th%20St%20%23105%20Las%20Vegas%20NV%2089101&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '380px', filter: 'grayscale(0.9) invert(0.92) contrast(1.2)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Boulevard Barber Shop Google Map Location"
          />
        </div>

      </div>

      {/* Expandable FAQ Accordion */}
      <div className="max-w-4xl mx-auto pt-10 border-t border-[#C5A059]/20">
        <h2 className="font-serif font-black text-2xl sm:text-3xl text-white uppercase text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4 font-mono text-xs">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-[#C5A059]/30 rounded-lg bg-[#121620] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-white flex justify-between items-center hover:text-[#C5A059] transition-colors"
                >
                  <span className="pr-2">{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#C5A059]" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 font-sans text-xs text-gray-300 leading-relaxed font-light border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </main>
  );
}
