import { Calendar, Award, Star, Scissors } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: 'Master Craftsmen Lookbook | Boulevard Barber Shop',
  description: 'Meet the veteran barber roster at Boulevard Barber Shop in Downtown Las Vegas: Elier, Bryan Lorenzo Otero, Ramírez Lay Jiménez, and Henry Classic V.',
};

export default function TeamPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  const barbers = [
    {
      name: "Elier",
      title: "Master Barber & Razor Architect",
      experience: "10+ yrs exp",
      image: "/images/barber-master.jpg",
      tags: ["Lead Master Barber", "Skin Fade Architect", "Beard Sculpting"],
      bio: "Renowned across Downtown Las Vegas for surgical precision on high skin fades, razor-sharp beard transitions, and signature hot towel razor finishes."
    },
    {
      name: "Bryan Lorenzo Otero",
      title: "Senior Barber & Beard Artist",
      experience: "8+ yrs exp",
      image: "/images/crew-lasvegas.jpg",
      tags: ["Precision Stylist", "Textured Crops", "Drop Fades"],
      bio: "Expert in textured modern crops, low drop tapers, and custom scissor silhouettes tailored to individual lifestyle and head contours."
    },
    {
      name: "Ramírez Lay Jiménez",
      title: "Precision Stylist & Fade Specialist",
      experience: "9+ yrs exp",
      image: "/images/beard-shave.jpg",
      tags: ["Straight Razor Artisan", "Hot Towel Shaves", "Taper Specialist"],
      bio: "Master of the traditional hot towel straight-razor shave, razor head shaving, and immaculate executive line-ups with essential oil steam."
    },
    {
      name: "Henry Classic V",
      title: "Traditional Master Craftsman",
      experience: "12+ yrs exp",
      image: "/images/hair-design.jpg",
      tags: ["Classic Scissor Cuts", "Pompadours", "Beard Contouring"],
      bio: "Specializing in timeless gentleman's scissor cuts, pompadours, classic side parts, and detailed beard shaping with decades of refined craft."
    }
  ];

  return (
    <main className="py-12 sm:py-20 px-3 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">The Artisans</span>
          <h1 className="font-cinzel font-black text-3xl sm:text-6xl text-white uppercase tracking-tight break-words">Master Craftsmen</h1>
          <p className="text-gray-400 text-xs sm:text-sm font-mono mt-3">Book directly with your preferred master barber or walk in any day from 7 AM to 7 PM.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        
        {barbers.map((barber, index) => (
          <div key={index} className="bg-[#10131B] border border-[#C5A059]/30 rounded-lg overflow-hidden flex flex-col sm:flex-row justify-between group hover:border-[#C5A059] transition-all">
            
            {/* Portrait Image */}
            <div className="sm:w-2/5 relative h-64 sm:h-auto min-h-[230px] bg-black overflow-hidden shrink-0">
              <img 
                src={barber.image} 
                alt={barber.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059]/60 text-[#DFBA68] text-[9px] font-mono uppercase tracking-wider rounded-sm">
                {barber.experience}
              </span>
            </div>

            {/* Details Column */}
            <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white mb-1">{barber.name}</h3>
                <p className="text-xs font-mono text-[#DFBA68] mb-3">{barber.title}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {barber.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 bg-[#08090E] border border-white/10 text-[9.5px] font-mono text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-300 font-light leading-relaxed mb-6">
                  {barber.bio}
                </p>
              </div>

              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brass-solid w-full py-2.5 text-xs text-center font-mono"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Book Chair
              </a>
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
