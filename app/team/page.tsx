import { Calendar, Phone } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'Master Craftsmen Lookbook | Boulevard Barber Shop',
  description: 'Meet the master barber roster at Boulevard Barber Shop in Downtown Las Vegas: Elier, Bryan Lorenzo Otero, Ramírez Lay Jiménez, and Henry Classic V.',
};

export default function TeamPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  const barbers = [
    {
      name: "Elier",
      title: "Master Barber & Razor Architect",
      experience: "10+ yrs exp",
      rate: "from $35",
      image: "/images/elier-portrait.jpg",
      tags: ["Lead Master Barber", "Skin Fade Architect", "Beard Sculpting"],
      bio: "Renowned across Downtown Las Vegas for surgical precision on high skin fades, razor-sharp beard transitions, and signature hot towel razor finishes."
    },
    {
      name: "Bryan Lorenzo Otero",
      title: "Senior Barber & Beard Artist",
      experience: "8+ yrs exp",
      rate: "from $35",
      image: "/images/bryan-action.jpg",
      tags: ["Precision Stylist", "Textured Crops", "Drop Fades"],
      bio: "Expert in textured modern crops, low drop tapers, and custom scissor silhouettes tailored to individual lifestyle and head contours."
    },
    {
      name: "Ramírez Lay Jiménez",
      title: "Precision Stylist & Fade Specialist",
      experience: "9+ yrs exp",
      rate: "from $30",
      image: "/images/lay-portrait.jpg",
      tags: ["Straight Razor Artisan", "Hot Towel Shaves", "Taper Specialist"],
      bio: "Master of the traditional hot towel straight-razor shave, razor head shaving, and immaculate executive line-ups with essential oil steam."
    },
    {
      name: "Henry Classic V",
      title: "Traditional Master Craftsman",
      experience: "12+ yrs exp",
      rate: "from $35",
      image: "/images/henry-classic.jpg",
      tags: ["Classic Scissor Cuts", "Pompadours", "Beard Contouring"],
      bio: "Specializing in timeless gentleman's scissor cuts, pompadours, classic side parts, and detailed beard shaping with decades of refined craft."
    }
  ];

  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">The Artisans</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">Master Craftsmen Roster</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">Book directly with your preferred master barber or walk in any day from 7 AM to 7 PM.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {barbers.map((barber, index) => (
          <div key={index} className="border border-white/10 bg-[#080A0E] overflow-hidden flex flex-col sm:flex-row group hover:border-[#C5A059] transition-all">
            
            {/* Portrait Image */}
            <div className="sm:w-2/5 relative h-72 sm:h-auto min-h-[260px] bg-black overflow-hidden shrink-0">
              <img 
                src={barber.image} 
                alt={barber.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase tracking-wider">
                {barber.experience}
              </span>
            </div>

            {/* Details Column */}
            <div className="sm:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F5F5F0]">{barber.name}</h3>
                  <span className="font-mono text-xs text-[#C5A059] font-bold">{barber.rate}</span>
                </div>
                <p className="text-xs font-mono text-[#C5A059] mb-3">{barber.title}</p>
                
                {/* Specialty Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {barber.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9.5px] font-mono text-[#94A3B8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed mb-6">
                  {barber.bio}
                </p>
              </div>

              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brass-primary w-full py-2.5 text-xs text-center font-mono"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Reserve with {barber.name}
              </a>
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
