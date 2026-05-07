/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrainCircuit, ChevronRight, BarChart3, ShieldCheck, Zap, Activity, Globe, Database, Network, Layers, Lock, Menu, X } from "lucide-react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import { ContainerScroll as ContainerScrollAnim } from "@/components/ui/container-scroll-animation";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StickyFooter } from "@/components/ui/sticky-footer";
import { WavePath } from "@/components/ui/wave-path";
import { cn } from "@/lib/utils";
import { TheWorkflow } from "@/components/TheWorkflow";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { FadeUp, FadeUpItem } from "./components/ui/fade-up";

const easeFluid: any = [0.22, 1, 0.36, 1];
const durationFluid = 1.0;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: durationFluid, ease: easeFluid } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0 } }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityBg = useTransform(scrollY, [0, 600], [1, 0.4]);

  const navLinks = [
    { name: "Technology", href: "#what-we-do" },
    { name: "Models", href: "#models" },
    { name: "Applications", href: "#applications" },
    { name: "Validation", href: "#validation" },
    { name: "About", href: "/about", isLink: true },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-blue-500/30 flex flex-col">
      <GlassFilter />
      {/* Translucent Island Navbar */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-[100] flex justify-center w-full pointer-events-none px-4">
        <div className="pointer-events-auto w-full max-w-fit">
          <GlassEffect className="rounded-full !bg-white/10 backdrop-blur-md">
            <nav className="flex items-center gap-3 sm:gap-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl">
              <div className="flex items-center pr-2">
                 <span className="font-bold text-lg sm:text-xl tracking-tight text-white">Thalassos</span>
              </div>
              
              <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>
              
              <div className="hidden md:flex items-center gap-6 text-[10px] font-bold text-white/80 tracking-wide uppercase">
                {navLinks.map((link) => (
                  link.isLink ? (
                    <Link key={link.name} to={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                  ) : (
                    <a key={link.name} href={link.href} className="hover:text-white transition-fluid-hover">{link.name}</a>
                  )
                ))}
              </div>

              <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <a href="#contact" className="px-4 py-1.5 h-auto bg-white text-black hover:bg-white/90 text-[10px] sm:text-xs font-bold rounded-full transition-fluid-hover uppercase shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Contact
                </a>
                <button 
                  className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </nav>
          </GlassEffect>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-[90] px-4 md:hidden pointer-events-none"
          >
            <GlassEffect className="rounded-3xl !bg-black/80 backdrop-blur-xl border border-white/10 pointer-events-auto">
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.isLink ? (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="text-lg font-bold text-white/80 hover:text-white tracking-widest uppercase py-2 border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="text-lg font-bold text-white/80 hover:text-white tracking-widest uppercase py-2 border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
            </GlassEffect>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-screen pt-24 md:pt-32 text-center overflow-visible">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0 mix-blend-screen brightness-150 pointer-events-none h-[120vh]">
          <AnimatedGradientBackground Breathing={true} breathingRange={8} animationSpeed={0.015} gradientPosition="50% 10%" />
          <div className="absolute inset-0 backdrop-blur-2xl"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
        </motion.div>
        <div className="absolute inset-0 z-[5] pointer-events-none opacity-100 h-[120vh]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto z-20">
          <ContainerScrollAnim
            titleComponent={
              <FadeUp stagger delay={0.2} className="flex flex-col items-center w-full max-w-[1400px] mx-auto px-4 mb-2">
                <FadeUpItem>
                  <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 flex items-center gap-1">
                    <Zap className="w-3 h-3 inline-block" /> Planetary Hydrogeological Intelligence
                  </span>
                  </div>
                </FadeUpItem>
              
                <FadeUpItem>
                <h1 className="text-3xl sm:text-5xl md:text-[72px] lg:text-[84px] leading-[1.0] sm:leading-[0.9] font-extrabold tracking-tighter mb-6 sm:mb-8 max-w-5xl uppercase">
                  AI models for groundwater <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400">
                    contamination screening
                  </span>
                </h1>
                </FadeUpItem>
              
                <FadeUpItem>
                <p className="text-base sm:text-lg text-white/60 max-w-3xl leading-relaxed mb-6 mx-auto">
                  Thalassos combines satellite remote sensing, hydrogeology, graph theory, and machine learning to detect groundwater risk at planetary scale. Our system screens millions of wells at near-zero marginal cost and identifies arsenic, fluoride, uranium, industrial contamination, geological instability, and resource signatures before traditional lab workflows can react.
                </p>
                </FadeUpItem>
              
                <FadeUpItem>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mx-auto justify-center">
                  <div className="group relative w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>
                    <button className="relative px-8 py-4 bg-white text-black font-bold rounded-lg border-0 leading-none flex items-center w-full sm:w-auto justify-center">
                      <span className="">Request Access</span>
                    </button>
                  </div>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center">
                    <span className="">View Technical Overview</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                </FadeUpItem>
              </FadeUp>
            }
          >
            <div className="w-full h-full lg:h-full p-4 lg:p-8 bg-[#0A0A0A] text-left relative overflow-y-auto lg:overflow-hidden flex flex-col justify-start lg:justify-center">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 lg:divide-x lg:divide-white/10 h-auto lg:h-full w-full">
                
                {/* Column 1 - Validation */}
                <div className="flex flex-col flex-1 lg:pr-6 animate-in fade-in duration-500 max-h-full">
                  <div className="mb-4 lg:mb-6">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400 mb-3 inline-flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
                       Validation
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 leading-tight">Validated Environmental Modeling</h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      Validated across nearly 57,000 groundwater sites spanning deltaic aquifers, fractured bedrock systems, sedimentary basins, and mixed geological environments.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto object-bottom">
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-blue-400 mb-1">56K+</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Validated Sites</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-blue-400 mb-1">98.07%</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Hybrid Accuracy</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-blue-400 mb-1">0.86</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Remote AUC</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-blue-400 mb-1">95.7%</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Uncertainty Coverage</div>
                     </div>
                  </div>
                </div>

                {/* Column 2 - Intelligence */}
                <div className="flex flex-col flex-1 lg:px-6 animate-in fade-in duration-500 delay-100 max-h-full">
                  <div className="mb-4 lg:mb-6">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-pink-400 mb-3 inline-flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#EC4899]"></span>
                       Intelligence
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 leading-tight">Planetary Hydrogeological Intelligence</h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      Thalassos combines remote sensing, hydrogeology, spectral mineralogy, graph networks, fractal analysis, and probabilistic environmental modeling.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto object-bottom">
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-pink-400 mb-1">73</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Environmental<br/>Parameters</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-pink-400 mb-1">50+</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Detectable<br/>Substances</div>
                     </div>
                     <div className="col-span-2 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xs sm:text-sm font-bold text-white/80 leading-tight mb-1">Graph Theory & Topology</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Derived Mathematical Features</div>
                     </div>
                     <div className="col-span-2 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xs sm:text-sm font-bold text-white/80 leading-tight mb-1">Real-Time Inference</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Satellite-Geology Fusion</div>
                     </div>
                  </div>
                </div>

                {/* Column 3 - Deployment */}
                <div className="flex flex-col flex-1 lg:pl-6 animate-in fade-in duration-500 delay-200 max-h-full">
                  <div className="mb-4 lg:mb-6">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-3 inline-flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
                       Deployment
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 leading-tight">National-Scale Environmental Deployment</h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      Built for governments, NGOs, mining operations, infrastructure projects, and public health systems operating at continental scale.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto object-bottom">
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mb-1">70+</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Affected Countries</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mb-1">100M+</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Wells Scalable</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mb-1">10ms</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Inference Speed</div>
                     </div>
                     <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                       <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mb-1">99.7%</div>
                       <div className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50">Cost Reduction</div>
                     </div>
                  </div>
                </div>
                
              </div>
            </div>
          </ContainerScrollAnim>
        </div>
      </main>

      {/* What We Do Section */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 overflow-hidden bg-white/[0.02] mt-12 sm:mt-20" id="what-we-do">
         <div className="max-w-7xl mx-auto w-full px-4 lg:px-10 flow-root">
            <div className="w-full lg:w-1/2 lg:float-left flex justify-center lg:justify-start lg:pr-12 mb-12 lg:mb-4 lg:pt-8">
               <AnimatedCardStack />
            </div>
            <FadeUp stagger className="pt-8 text-left">
                  <FadeUpItem className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 flex items-center gap-1">
                      WHAT WE DO
                    </span>
                  </FadeUpItem>
                  
                  <FadeUpItem>
                    <h3 className="text-2xl sm:text-[40px] leading-[1.1] font-extrabold tracking-tighter uppercase w-full mb-8">
                      Environmental Intelligence <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">From Space</span>
                    </h3>
                  </FadeUpItem>
                  
                  <div className="text-lg text-white/60 leading-relaxed font-light space-y-6">
                    <FadeUpItem>
                      <p>
                        Over 200 million people rely on groundwater contaminated with arsenic, fluoride, uranium, and toxic heavy metals — yet most aquifers are never tested until exposure has already occurred. Traditional groundwater analysis costs $50–$200 per sample, requires centralized laboratories, and can take months to scale across a single region.
                      </p>
                    </FadeUpItem>
                    <FadeUpItem>
                      <p>
                        Thalassos changes that equation.
                      </p>
                    </FadeUpItem>
                    <FadeUpItem>
                      <p>
                        Our systems analyze 73 geological, hydrological, and mathematical parameters from satellite imagery and public geoscience data to infer groundwater risk across continental-scale terrain in milliseconds.
                      </p>
                    </FadeUpItem>
                    <FadeUpItem>
                      <p>
                        We detect contamination pathways buried 150+ feet below the surface using thermal anomalies, spectral mineral signatures, hydrological topology, gravity fields, deformation signals, and geological structure — all from orbital infrastructure operating hundreds of kilometers above Earth.
                      </p>
                    </FadeUpItem>
                    <FadeUpItem>
                      <p>
                        Thalassos currently validates against 56,000+ groundwater sites with up to 98.07% hybrid accuracy while reducing projected national testing costs by as much as 99.7%.
                      </p>
                    </FadeUpItem>
                    <FadeUpItem>
                      <p className="font-medium text-white/80">
                        From a single workstation, Thalassos transforms satellite imagery and planetary geology into a real-time environmental intelligence layer for the planet.
                      </p>
                    </FadeUpItem>
                  </div>
            </FadeUp>
         </div>
      </section>

      {/* Floating Transition Wave */}
      <div className="relative z-30 w-full h-0 flex justify-center pointer-events-none">
         <div className="w-full pointer-events-auto">
            <WavePath className="text-white/50 hover:text-white transition-colors absolute top-0 -translate-y-1/2" />
         </div>
      </div>

      {/* Brutalist Models Section */}
      <section className="relative z-20 py-16 sm:py-24 text-white w-full flex justify-center px-4 md:px-8 overflow-hidden" id="models">
        <WebGLShader className="absolute inset-0 w-full h-full block z-0 opacity-90 mix-blend-screen brightness-125" />
        <div className="relative z-10 max-w-[1200px] w-full border border-white/20 bg-black/60 shadow-2xl flex flex-col backdrop-blur-2xl rounded-xl overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-2 border-b border-white/20 px-4 py-3 text-[10px] font-bold tracking-widest uppercase bg-white/5">
            <div className="w-2.5 h-2.5 bg-blue-500 shadow-[0_0_8px_#3B82F6] rounded-full"></div>
            <span className="text-white/70">THE MODELS</span>
          </div>

          {/* Hero split */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/20 relative">
            {/* Left Hero */}
            <div className="bg-white/[0.02] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 z-0 pointer-events-none"></div>
               <div className="relative z-10">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 md:mb-12 flex rounded-2xl overflow-hidden border border-white/20 bg-white/5 p-2 sm:p-3 items-center justify-center">
                    <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                 </div>
                 <h2 className="font-sans font-extrabold text-4xl sm:text-[4.5rem] lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-4 sm:mb-6">Model Architecture</h2>
                 <p className="text-sm sm:text-lg text-white/60 max-w-sm mb-6 sm:mb-10 leading-relaxed font-light">
                   Thalassos operates three specialized intelligence systems designed for different environmental workflows.
                 </p>
               </div>
            </div>
            {/* Right Hero (Video) */}
            <div className="bg-black relative overflow-hidden min-h-[300px] md:min-h-full">
               <video 
                 src="/clo.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 ref={(el) => { if (el) el.playbackRate = 0.8; }}
                 className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
               />
            </div>
          </div>

          {/* Bottom Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white/[0.01]">
            {/* Col 1 */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/20 hover:bg-white/[0.03] transition-colors group">
               <div className="text-[10px] font-bold tracking-widest uppercase border-b border-white/20 px-6 py-4 text-white/50 flex justify-between items-center bg-white/[0.01]">
                  Geology Only Model
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
               </div>
               <div className="p-6 lg:p-8 flex flex-col h-full">
                 <h3 className="font-sans text-2xl md:text-3xl tracking-tight mb-4 font-bold">Spicy Tangerine</h3>
                 <p className="text-[14px] leading-relaxed text-white/50 font-light group-hover:text-white/70 transition-colors mb-6">
                   Operates entirely from geological, hydrological, and remote sensing inputs. Analyzes terrain structure, mineralogy, aquifer architecture, thermal anomalies, and spatial topology to estimate groundwater risk without requiring chemical sampling.
                 </p>
                 <div className="mt-auto pt-6 border-t border-white/10">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400 mb-2">Key Metric</div>
                   <div className="text-xl font-medium">86% predictive accuracy</div>
                   <div className="text-xs text-white/40">remote-only inputs</div>
                 </div>
               </div>
            </div>
            {/* Col 2 */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/20 hover:bg-white/[0.03] transition-colors group">
               <div className="text-[10px] font-bold tracking-widest uppercase border-b border-white/20 px-6 py-4 text-white/50 flex justify-between items-center bg-white/[0.01]">
                  Chemical Only Model
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-500 transition-colors shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
               </div>
               <div className="p-6 lg:p-8 flex flex-col h-full">
                 <h3 className="font-sans text-2xl md:text-3xl tracking-tight mb-4 font-bold">Yellow Mellow</h3>
                 <p className="text-[14px] leading-relaxed text-white/50 font-light group-hover:text-white/70 transition-colors mb-6">
                   Focuses on onsite chemistry and field measurements. Interprets strip-based and direct chemical indicators including arsenic, iron, manganese, pH, conductivity, hardness, sulfate, nitrate, and other measurable compounds.
                 </p>
                 <div className="mt-auto pt-6 border-t border-white/10">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-pink-400 mb-2">Key Metric</div>
                   <div className="text-xl font-medium">Real-time field interpretation</div>
                   <div className="text-xs text-white/40">smartphone-based calibration</div>
                 </div>
               </div>
            </div>
            {/* Col 3 */}
            <div className="flex flex-col hover:bg-white/[0.03] transition-colors group">
               <div className="text-[10px] font-bold tracking-widest uppercase border-b border-white/20 px-6 py-4 text-white/50 flex justify-between items-center bg-white/[0.01]">
                  Hybrid Intelligence System
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
               </div>
               <div className="p-6 lg:p-8 flex flex-col h-full">
                 <h3 className="font-sans text-2xl md:text-3xl tracking-tight mb-4 font-bold">Thalassos Ensemble</h3>
                 <p className="text-[14px] leading-relaxed text-white/50 font-light group-hover:text-white/70 transition-colors mb-6">
                   Combines geological inference and chemical validation into a single probabilistic decision system. Integrates remote sensing, topology, graph theory, hydrogeology, and onsite chemistry to produce high-confidence intelligence.
                 </p>
                 <div className="mt-auto pt-6 border-t border-white/10">
                   <div className="text-[10px] uppercase font-bold tracking-widest text-orange-400 mb-2">Key Metric</div>
                   <div className="text-xl font-medium">98.07% hybrid accuracy</div>
                   <div className="text-xs text-white/40">on validated datasets</div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Workflow */}
      <section className="relative z-10 py-24 pb-0 border-t border-white/10 bg-[#0A0A0A]" id="workflow">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-10">
          <div className="flex flex-col items-center text-center mb-0 md:mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
               <span className="flex h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">THE WORKFLOW</span>
             </div>
             <h2 className="text-3xl sm:text-[48px] md:text-[56px] leading-[0.9] font-extrabold tracking-tighter uppercase max-w-4xl">
               Two-Phase <br className="hidden sm:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligence Pipeline</span>
             </h2>
          </div>
        </div>
        <TheWorkflow />
      </section>

      {/* Applications Section */}
      <section className="relative z-20 pt-12 pb-24 text-white w-full flex flex-col items-center px-4 md:px-8 overflow-hidden bg-transparent" id="applications">
        <div className="max-w-7xl w-full mx-auto mb-16 flex flex-col items-center text-center px-4 relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
             <span className="flex h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_#F97316]"></span>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">USE CASES</span>
           </div>
           <h2 className="text-3xl sm:text-[48px] md:text-[56px] leading-[0.9] font-extrabold tracking-tighter uppercase max-w-4xl">
             Applications Across <br className="hidden sm:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Public Health & Industry</span>
           </h2>
        </div>

        <FadeUp stagger className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:auto-rows-[minmax(200px,auto)] gap-4 relative z-10">
          {/* Application 1 */}
          <FadeUpItem className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[250px] sm:min-h-[300px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">Groundwater Contamination</h3>
            <p className="text-white/60 leading-relaxed text-base sm:text-lg mb-0 max-w-md">
              Detect arsenic, fluoride, uranium, manganese, salinity, and redox instability before widespread exposure occurs.
            </p>
          </FadeUpItem>
          
          {/* Application 2 */}
          <FadeUpItem className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group md:col-span-2 md:row-span-1 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors inline-block w-fit">Mining & Resource Intelligence</h3>
            <p className="text-white/60 leading-relaxed max-w-md text-sm sm:text-base">
              Identify geological signatures associated with lithium brines, geothermal systems, iron formations, sulfide mineralization, and acid mine drainage.
            </p>
          </FadeUpItem>
          
          {/* Application 3 */}
          <FadeUpItem className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group md:col-span-1 md:row-span-1 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2 sm:mb-3 group-hover:text-pink-400 transition-colors">Environmental Monitoring</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Track illegal mining, industrial discharge, vegetation stress, groundwater depletion, and hydrological disruption using remote sensing.
            </p>
          </FadeUpItem>
          
          {/* Application 4 */}
          <FadeUpItem className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group md:col-span-1 md:row-span-1 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">Infrastructure & Urban Planning</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Analyze subsidence risk, aquifer stability, sediment thickness, and geotechnical instability for long-term infrastructure planning.
            </p>
          </FadeUpItem>
        </FadeUp>
      </section>


      {/* Field Validation & Benchmarking (Interactive notebook vibe) */}
      <section className="relative z-10 py-24 bg-[#050505] overflow-hidden" id="validation">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-10 text-center flex flex-col items-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
             <span className="flex h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">VALIDATION</span>
           </div>
           <h2 className="text-3xl sm:text-[40px] leading-[1.1] font-extrabold tracking-tighter uppercase mb-12 sm:mb-16 max-w-2xl">
             Field Validation and <span className="text-purple-400">Benchmarking</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
             <Card className="p-6 sm:p-8 bg-zinc-900 border-zinc-800 text-zinc-300 rounded-xl transition-all shadow-lg min-h-[220px]">
               <div className="uppercase tracking-widest text-xs font-bold text-zinc-500 mb-6 font-mono">Testimonial 01</div>
               <p className="text-zinc-200 text-lg sm:text-xl font-light italic leading-relaxed">
                 “Thalassos identified contamination clusters our district survey missed entirely. We redirected field teams within days instead of months.”
               </p>
               <div className="mt-8 text-sm text-zinc-500 font-bold tracking-wide">— Regional Water Authority, Bangladesh</div>
             </Card>

             <Card className="p-6 sm:p-8 bg-black border-zinc-800 text-zinc-300 rounded-xl transition-all shadow-lg min-h-[220px]">
               <div className="uppercase tracking-widest text-xs font-bold text-zinc-500 mb-6 font-mono">Testimonial 02</div>
               <p className="text-zinc-200 text-lg sm:text-xl font-light italic leading-relaxed">
                 “The combination of geological inference and strip validation reduced our screening costs by more than 90%.”
               </p>
               <div className="mt-8 text-sm text-zinc-500 font-bold tracking-wide">— NGO Water Safety Program</div>
             </Card>

             <Card className="p-6 sm:p-8 bg-zinc-900 border-zinc-800 text-zinc-300 rounded-xl transition-all shadow-lg min-h-[220px]">
               <div className="uppercase tracking-widest text-xs font-bold text-zinc-500 mb-6 font-mono">Benchmark 01</div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <h4 className="text-sm font-bold text-zinc-400 mb-2">Traditional Lab</h4>
                   <ul className="text-xs text-zinc-500 space-y-1">
                     <li>$50–$200 / sample</li>
                     <li>Centralized</li>
                     <li>Multi-month turnaround</li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-purple-400 mb-2">Thalassos Ensemble</h4>
                   <ul className="text-xs text-zinc-300 space-y-1">
                     <li>~$1.50 verification</li>
                     <li>Distributed field</li>
                     <li>Near real-time</li>
                   </ul>
                 </div>
               </div>
             </Card>
           </div>
        </div>
      </section>


      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-white/[0.02]" id="contact">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-[48px] font-extrabold tracking-tighter uppercase mb-6 text-center">Work With Thalassos</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/50 mb-12 uppercase tracking-wide">
             <span className="px-3">Government partnerships</span> • 
             <span className="px-3">Research collaborations</span> • 
             <span className="px-3">NGO deployments</span> • 
             <span className="px-3">Enterprise infrastructure</span> • 
             <span className="px-3">Mining & resource intelligence</span> • 
             <span className="px-3">Pilot programs</span>
          </div>
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-lg border-0 leading-none shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300">
             Schedule a Technical Demo
          </button>
        </div>
      </section>

      <StickyFooter />
    </div>
  );
}
