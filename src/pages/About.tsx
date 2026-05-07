import { Link } from "react-router-dom";
import { BrainCircuit, ChevronLeft } from "lucide-react";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { StickyFooter } from "@/components/ui/sticky-footer";

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-blue-500/30 flex flex-col">
      <GlassFilter />
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[40%] bg-purple-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      </div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
        <GlassEffect className="rounded-full !bg-white/10 backdrop-blur-md">
          <nav className="flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl w-full max-w-sm sm:max-w-none">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/10 border border-white/20 rounded-full flex-shrink-0 flex items-center justify-center transition-all group-hover:bg-white/20">
                 <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="font-bold tracking-tight text-xs sm:text-sm uppercase text-white/80 group-hover:text-white transition-colors">Back</span>
            </Link>
            
            <div className="h-4 w-[1px] bg-white/20"></div>

            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center pl-2">
                 <span className="font-bold text-xl tracking-tight text-white">Thalassos</span>
              </div>
            </div>
          </nav>
        </GlassEffect>
      </div>

      <main className="flex-grow flex flex-col relative z-20 pt-32 lg:pt-40 pb-24">
        <div className="max-w-4xl mx-auto w-full px-4 lg:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">OUR MISSION</span>
          </div>

          <h1 className="text-[40px] sm:text-[64px] leading-[0.9] font-extrabold tracking-tighter uppercase mb-16">
            Planetary Hydrogeological <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-white/70 font-light leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-medium mb-10 leading-snug">
              Thalassos was created to rethink how global groundwater intelligence is generated, mapped, and monitored.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-16">
               <div>
                 <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">The Status Quo</h3>
                 <p>
                   Conventional environmental monitoring depends on centralized laboratories, expensive sampling logistics, and sparse field coverage. This archaic approach leaves massive gaps in our understanding of planetary water systems, often taking months to process field samples while requiring immense capital.
                 </p>
               </div>
               <div>
                 <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Our Approach</h3>
                 <p>
                   Thalassos replaces that bottleneck with scalable inference systems. By combining orbital physics, geological informatics, topological data analysis, and advanced machine learning, we reconstruct subsurface ground truth from sparse multimodal observations worldwide.
                 </p>
               </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6">Planetary Scale Impact</h2>
            <p>
              The company focuses on scalable environmental sensing with applications spanning public health, climate adaptation, infrastructure stability, mining logistics, deep agriculture, and long-term hydrological forecasting. 
            </p>
            <p className="mt-6">
              Our systems have already demonstrated validation across nearly 57,000 global testing sites, predicting contamination clusters and structural anomalies with speed and precision previously impossible through classical methodologies.
            </p>

            <div className="mt-20 p-8 border border-white/10 bg-white/5 rounded-2xl flex flex-col items-center text-center">
               <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4">Collaborate With Us</h3>
               <p className="text-white/60 max-w-lg mx-auto mb-8 text-sm">
                 We are actively deploying our models across diverse hydrogeological regions with national health agencies, NGOs, and resource enterprises.
               </p>
               <a href="/#contact" className="px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300">
                 Partner with Thalassos
               </a>
            </div>
          </div>
        </div>
      </main>

      <StickyFooter />
    </div>
  );
}
