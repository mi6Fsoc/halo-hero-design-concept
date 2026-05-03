/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

const Navbar = () => (
  <nav className="w-full px-6 md:px-10 py-6 flex items-center justify-between z-20">
    <div className="flex items-center gap-2">
      <LogoIcon className="w-7 h-7 text-black" />
      <span className="text-2xl font-medium tracking-tight text-black">Halo</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
      {['Network', 'Ecosystem', 'Rewards', 'Help', 'News'].map((link) => (
        <a
          key={link}
          href="#"
          className="hover:text-black transition-colors duration-200"
        >
          {link}
        </a>
      ))}
    </div>
    <button className="bg-black text-white text-sm font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
      Open Wallet
    </button>
  </nav>
);

const HeroBrands = () => {
  const brands = [
    { name: 'Stripe', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
    { name: 'COINBASE', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' as const } },
    { name: 'Uniswap', style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
    { name: 'AAVE', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' as const } },
    { name: 'Compound', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
    { name: 'MakerDAO', style: { fontFamily: 'Impact, "Arial Narrow", sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
    { name: 'Chainlink', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
  ];

  return (
    <div className="mt-8 w-full max-w-md overflow-hidden">
      <div className="marquee-track">
        {[...brands, ...brands].map((brand, i) => (
           <span key={i} className="mx-7 shrink-0 text-black/60 whitespace-nowrap flex items-center" style={brand.style}>
             {brand.name}
           </span>
        ))}
      </div>
    </div>
  );
};

const BackersBrands = () => {
  const brands = [
    { name: 'Fundamental Labs', style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' } },
    { name: 'KUCOIN', style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
    { name: 'NGC', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
    { name: 'NxGen', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
    { name: 'Matter Labs', style: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' } },
    { name: 'DEXTOOLS', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' as const } },
    { name: 'NGRAVE', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' } },
    { name: 'Polychain', style: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' } },
  ];
  return (
    <div className="backers-track flex">
       {[...brands, ...brands].map((brand, i) => (
        <span key={i} className="mx-5 shrink-0 text-black/40 whitespace-nowrap flex items-center" style={brand.style}>
          {brand.name}
        </span>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div 
      className="bg-[#F5F5F5] min-h-screen text-black flex flex-col font-sans" 
      style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      <div className="max-w-[88rem] w-full mx-auto flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 px-6 md:px-10 pb-10 flex flex-col gap-4">
          {/* Row 1: Hero and Small Info Cards side by side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:min-h-[440px]">
            {/* Hero Card */}
            <div className="flex-[1.8] relative rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col justify-center min-h-[440px] lg:min-h-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
              />
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center bg-white/20 backdrop-blur-sm">
                <h1 className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-[-0.04em] mb-4 text-black">
                  Your Wealth<br />Works
                </h1>
                <p className="text-black/80 text-base md:text-lg max-w-md mb-8 leading-relaxed">
                  An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
                </p>
                <div className="flex flex-col gap-10 mt-auto lg:mt-0">
                  <button className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full w-fit hover:bg-gray-800 transition-colors">
                    Join us
                    <div className="bg-white rounded-full p-2">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </button>
                  <HeroBrands />
                </div>
              </div>
            </div>

            {/* Info Cards Column */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 bg-[#2B2644] rounded-2xl p-7 flex flex-col justify-between text-white min-h-[200px]">
                <h2 className="text-2xl font-medium leading-tight">
                  Always fluid,<br />always pegged.
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.
                </p>
              </div>
              <div className="flex-1 bg-[#2B2644] rounded-2xl p-7 flex flex-col justify-between text-white min-h-[200px]">
                <h2 className="text-2xl font-medium leading-tight">
                  Fully<br />automated.
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Skip the task of tuning positions yourself. USD Halo runs in the background for you.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Medium Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:min-h-[240px]">
            {/* Savings that bloom */}
            <div 
              className="col-span-1 lg:col-span-2 rounded-2xl overflow-hidden relative group p-7 flex flex-col justify-between min-h-[240px] shadow-sm"
              style={{
                backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-black">Savings that bloom</h3>
                <p className="text-black/80 text-sm md:text-base max-w-xs mt-auto">
                  Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
                </p>
              </div>
            </div>

            {/* Meet / Backed By */}
            <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-7 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[240px]">
              <div className="flex justify-between items-start mb-6">
                <div className="text-sm text-black/50 uppercase tracking-widest font-semibold shrink-0 mr-4">Backed By</div>
                <div className="flex-1 overflow-hidden">
                  <BackersBrands />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                <p className="text-black/70 text-base md:text-lg leading-relaxed lg:max-w-[85%]">
                  USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.
                </p>
                <div className="flex items-end justify-between mt-4">
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Meet USD Halo.</h2>
                  <button className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                    Discover it
                    <div className="bg-white rounded-full p-1.5">
                      <ArrowRight className="w-3 h-3 text-black" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Use Cases */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[400px]">
            <div className="flex-1 p-10 md:p-12 flex flex-col justify-center">
              <p className="text-black/50 text-sm mb-2 font-medium uppercase tracking-widest">USD Halo in Practice</p>
              <h2 className="text-4xl md:text-5xl font-medium leading-none mb-6 text-black tracking-[-0.04em]">Use modes</h2>
              <p className="text-black/60 text-base leading-relaxed max-w-sm">
                USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more
              </p>
            </div>

            <div className="flex-[1.2] relative min-h-[300px] md:min-h-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="object-cover absolute inset-0 w-full h-full"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
              />
              <div className="relative z-10 p-10 md:p-12 flex flex-col h-full justify-end bg-black/20">
                <h3 className="text-4xl md:text-5xl font-medium leading-tight mb-5 text-white tracking-[-0.03em]">Commerce</h3>
                <p className="text-white/90 text-base max-w-md mb-8">
                  Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.
                </p>
                <a href="#" className="inline-flex items-center gap-3 w-fit text-white text-base font-medium group transition-colors">
                  <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  Know more
                </a>
              </div>
            </div>
          </div>
          {/* Row 4: Testimonials */}
          <div className="flex flex-col gap-6 pt-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-black">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[240px]">
                <p className="text-black/80 text-lg leading-relaxed mb-8">"USD Halo has completely transformed our treasury management. The automated yields are a game-changer."</p>
                <div>
                  <h4 className="font-medium text-black tracking-tight">Sarah Jenkins</h4>
                  <p className="text-black/50 text-sm">CFO, TechFlow</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[240px]">
                <p className="text-black/80 text-lg leading-relaxed mb-8">"The seamless integration and constant dollar peg give us the peace of mind we need while earning passive rewards."</p>
                <div>
                  <h4 className="font-medium text-black tracking-tight">Marcus Thorne</h4>
                  <p className="text-black/50 text-sm">Lead Developer, DeFi Connect</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[240px]">
                <p className="text-black/80 text-lg leading-relaxed mb-8">"Unlike other stablecoins, USD Halo just works in the background. Exceptional product and vision."</p>
                <div>
                  <h4 className="font-medium text-black tracking-tight">Elena Rodriguez</h4>
                  <p className="text-black/50 text-sm">Director of Operations, Nexus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-[#2B2644] rounded-2xl p-10 md:p-16 flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row w-full justify-between items-start gap-12 z-10 text-white/80">
              <div className="flex flex-col gap-6 max-w-sm">
                <div className="flex items-center gap-2 text-white">
                  <LogoIcon className="w-8 h-8" />
                  <span className="text-2xl font-medium tracking-tight">Halo</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-16">
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-2">Resources</h4>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Documentation</a>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Help Center</a>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Ecosystem</a>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Developers</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-2">Company</h4>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">About</a>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Careers</a>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Blog</a>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>
            
            <div className="w-full flex justify-between items-end z-10 mt-20 pt-8 border-t border-white/10">
              <span className="text-white/40 text-xs md:text-sm">© {new Date().getFullYear()} Halo. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-white text-xs md:text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/40 hover:text-white text-xs md:text-sm transition-colors">Terms of Service</a>
              </div>
            </div>


          </footer>
        </main>
      </div>
    </div>
  );
}
