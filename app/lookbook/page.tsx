export const metadata = {
  title: 'Visual Portfolio & Lookbook | Boulevard Barber Shop',
  description: 'Explore signature skin fades, beard lineups, tapers, and executive salon interior shots at Boulevard Barber Shop in Downtown Las Vegas.',
};

export default function LookbookPage() {
  const booksyUrl = "https://booksy.com/en-us/705462_boulevard-barber-shop_barber-shop_134764_las-vegas";

  const gallery = [
    { title: "Mid Skin Fade with Textured Top", src: "/images/fade-textured.jpg", category: "Skin Fade" },
    { title: "Low Taper Fade & Sculpted Beard", src: "/images/low-taper-beard.jpg", category: "Beard Sculpt" },
    { title: "Drop Fade & Precision Razor Lineup", src: "/images/mid-drop-fade.jpg", category: "Lineup" },
    { title: "Hot Lather Straight Razor Shave", src: "/images/beard-shave.jpg", category: "Shave" },
    { title: "Executive Lounge Interior", src: "/images/hero-interior.jpg", category: "Lounge" },
    { title: "Scissor Craft & Shear Texture", src: "/images/crew-lasvegas.jpg", category: "Scissor Work" },
    { title: "Custom Razor Edge Design", src: "/images/hair-design.jpg", category: "Design" },
    { title: "Young Gentleman's Clean Cut", src: "/images/kids-cut.jpg", category: "Kids Cut" },
  ];

  return (
    <main className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2">Visual Portfolio</span>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">The Lookbook</h1>
          <p className="text-gray-400 text-xs sm:text-sm font-mono mt-2">Captured fresh from the chairs at 906 S 6th St.</p>
        </div>
        <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-solid mt-4 md:mt-0 px-6 py-2.5 text-xs font-mono">
          Book Any Style
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gallery.map((item, index) => (
          <div key={index} className="bg-[#121620] border border-[#C5A059]/30 rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative h-72 overflow-hidden bg-black">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">{item.category}</span>
                <p className="font-serif font-bold text-sm text-white">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
