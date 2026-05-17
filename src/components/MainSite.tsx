import { Trophy, BotOff, HeartCrack, BrainCircuit, Frown, Sparkles, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import SlotMachine from './SlotMachine';
import { useRef, useState } from 'react';

const LovelyFrenzyBackground = () => {
  // Floating glowing orbs + soft "I am DUMB!!" text
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#16050b]">
      {/* Moving Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-rose-900/20 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-pink-900/20 blur-[120px]"
      />

          {/* Floating Subtle Texts (Glitching) */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "vw", 
            y: Math.random() * 100 + "vh",
            opacity: 0,
            scale: Math.random() * 2 + 0.5,
          }}
          animate={{
            x: [Math.random() * 100 + "vw", Math.random() * 100 + "vw"],
            y: [Math.random() * 100 + "vh", Math.random() * 100 + "vh", Math.random() * 100 + "vh"],
            opacity: [0, 0.4, 0, 0.8, 0],
            rotate: [0, Math.random() * 45 - 20, Math.random() * -90 + 40]
          }}
          transition={{ 
            duration: 1 + Math.random() * 4, 
            repeat: Infinity, 
            ease: "circInOut",
            delay: Math.random() * 2
          }}
          className="absolute text-red-600/80 font-black tracking-tighter text-4xl md:text-7xl whitespace-nowrap select-none blur-[1px] uppercase mix-blend-screen"
        >
          I am DUMB!!
        </motion.div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#16050b]/80 via-transparent to-[#16050b]/80" />
    </div>
  );
};

export default function MainSite() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [floodPleases, setFloodPleases] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth parallax lines
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const FADE_UP = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)', y: 40 },
    show: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)', 
      y: 0,
      transition: { 
        duration: 0.4, 
        type: "spring", 
        stiffness: 200, 
        damping: 15 
      } 
    }
  };

  return (
    <div ref={containerRef} className="relative bg-transparent text-rose-50 overflow-x-hidden font-sans selection:bg-rose-400/30 selection:text-white pb-64">
      <LovelyFrenzyBackground />

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6">
        
        {/* Section 1: The Award */}
        <section className="min-h-screen flex items-center justify-center py-32">
          <motion.div 
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            animate={{ 
              x: [-1, 2, -1, 3, 0],
              y: [1, -2, 1, 0, -1]
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col items-center text-center p-10 md:p-20 bg-rose-950/20 backdrop-blur-2xl rounded-none border-b-8 border-l-4 border-yellow-800/30 shadow-[0_0_80px_rgba(244,63,94,0.1)] relative overflow-hidden transform -skew-y-2"
          >
            <motion.div style={{ y: y1 }} className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
            
            <motion.div 
              className="mb-10 relative"
            >
              <motion.div 
                animate={{ rotate: [0, -45, 90, -10], scale: [1, 1.3, 0.9, 1.1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full"
              />
              <Trophy size={80} className="text-yellow-400 relative z-10 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)] animate-bounce" strokeWidth={1} />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-serif text-yellow-50 mb-8 tracking-tight transform rotate-1 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
              The Ultimate Tolerance Award
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent mb-8 animate-pulse" />
            <p className="text-3xl md:text-5xl text-rose-200 font-hand max-w-2xl leading-relaxed italic">
              Apoorva, presented to you, for somehow tolerating me until now.
            </p>
            <p className="mt-12 text-red-400 font-black text-2xl uppercase tracking-[0.3em] font-mono">
              I deserve whatever treatment I get. Truly.
            </p>
          </motion.div>
        </section>

        {/* Section 2: Begging about AI */}
        <section className="min-h-[80vh] flex items-center justify-center py-32 border-none">
          <motion.div 
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            animate={{ rotate: [1, -2, 1.5, 0], scale: [1, 0.99, 1.01, 1] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full relative p-10 md:p-16 border-2 border-dashed border-red-500/80 bg-red-900/20 backdrop-blur-xl rounded-none shadow-[15px_15px_0px_rgba(153,27,27,0.8)]"
          >
            <motion.div style={{ y: y2 }} className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px]" />
            
            <div className="absolute -top-12 left-10 md:left-16 bg-[#16050b] p-4 rounded-3xl border border-rose-800/30 shadow-xl">
              <BotOff className="text-rose-400" size={48} strokeWidth={1.5} />
            </div>
            
            <div className="pt-8 space-y-8 z-10 relative">
              <h3 className="text-3xl md:text-4xl font-serif text-rose-100 flex items-center gap-4 font-bold">
                One Begging Request <Frown size={40} className="text-red-500 animate-bounce" />
              </h3>
              <motion.p 
                animate={{ x: [-1, 2, -1, 3, 0], opacity: [1, 0.8, 1, 0.9, 1] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                className="text-2xl md:text-4xl text-rose-200 leading-relaxed font-hand font-bold mix-blend-screen drop-shadow-[0_0_5px_rgba(255,100,100,0.8)]"
              >
                Apoorva, even though I am the main culprit here, and I am entirely wrong, I am begging you not to use Gemini or any other AI to get advice on such topics... please 😭😭😭😭😭
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Emotional Parasite */}
        <section className="min-h-[80vh] flex items-center justify-center py-32">
          <motion.div 
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-16 items-center bg-transparent w-full"
          >
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.4, 0.8, 1], opacity: [0.5, 1, 0.2, 0.8] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute inset-0 bg-red-600/50 blur-[50px] rounded-none mix-blend-screen"
              />
              <motion.div 
                animate={{ x: [-5, 5, -2, 3], y: [-2, 4, -4, 2] }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="relative w-40 h-40 shrink-0 bg-black/80 backdrop-blur-xl rounded-[2rem] transform rotate-12 flex items-center justify-center border-4 border-red-600 border-double shadow-[0_0_50px_rgba(225,29,72,1)]"
              >
                <BrainCircuit size={80} className="text-red-500 animate-pulse" strokeWidth={1.5} />
              </motion.div>
            </div>
            <div className="text-center md:text-left space-y-6 max-w-2xl relative z-10">
              <motion.h3 
                animate={{ skewX: [0, -10, 5, 0], scale: [1, 1.05, 0.95, 1] }} 
                transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
                className="text-2xl md:text-4xl font-black tracking-[0.2em] text-rose-50 uppercase text-red-500 bg-red-950/50 inline-block px-4 py-2 border border-red-500/50 transform -rotate-2"
              >
                I am NOT an emotional parasite
              </motion.h3>
              <div className="h-px w-full bg-gradient-to-r from-red-500/50 via-red-500/50 to-transparent max-w-md mx-auto md:mx-0 my-6" />
              <p className="text-rose-100 text-2xl md:text-3xl leading-relaxed font-medium">
                For god's sake, Apoorva!! I will now immediately stop all activities that Gemini mentioned which make me an "emotional parasite" and a manipulator.
              </p>
              <motion.p 
                animate={{ rotate: [-2, 2, -1, 3], scale: [1, 1.1, 0.9, 1] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                className="text-red-400 font-hand text-5xl md:text-7xl pt-4 drop-shadow-lg font-bold"
              >
                I promise I'll do better.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Being Dumb */}
        <section className="min-h-screen flex items-center justify-center py-32">
          <motion.div 
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full relative shadow-[30px_30px_0px_rgba(153,27,27,0.7)]"
          >
            <motion.div 
              animate={{ rotate: [2, 1.5, 2.5, 1], x: [0, -2, 2, 0], y: [0, -1, 1, 0] }}
              transition={{ duration: 0.15, repeat: Infinity }}
              className="p-10 md:p-20 bg-black/60 backdrop-blur-2xl border-l-[16px] border-r-4 border-t-8 border-b-2 border-red-600 rounded-none transform md:rotate-2 hover:-rotate-1 transition-transform duration-200"
            >
              <p className="text-3xl md:text-5xl font-serif leading-loose text-rose-100 font-bold">
                I am actually exactly that dumb that Gemini asked. That he can write long paragraphs, send reels... 
                <span className="block mt-6 text-red-500 font-black uppercase text-5xl md:text-7xl drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse">
                  but can't check up on you.
                </span>
              </p>
              <div className="mt-16 p-8 border-l-8 border-red-600 bg-black/40 rounded-r-xl">
                <p className="text-xl md:text-3xl text-rose-200 font-mono leading-relaxed font-bold">
                  &gt; Yeah, I am that dumb! I am like that since childhood, and I am the culprit for all the issues.<br /><br />
                  &gt; But I will change that. I don't pride over such a basic necessity I lack in. Okay, Apoorva?
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 4.5: Missing Everything */}
        <section className="min-h-screen flex items-center justify-center py-32 relative">
          <motion.div 
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-16 z-10"
          >
            <div className="space-y-8">
               <h3 className="text-4xl md:text-6xl font-serif text-rose-100 font-bold italic opacity-100 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                 Apoorva, I miss everything, you know?
               </h3>
               
               <div className="flex flex-col gap-6 font-hand text-5xl md:text-7xl text-red-500 py-10 font-bold">
                  <motion.span whileHover={{ scale: 1.1, rotate: Math.random()*10 - 5 }} transition={{ type: 'spring' }} className="drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]">The late night talks...</motion.span>
                  <motion.span whileHover={{ scale: 1.1, rotate: Math.random()*10 - 5 }} transition={{ type: 'spring' }} className="drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]">The insider jokes...</motion.span>
                  <motion.span whileHover={{ scale: 1.1, rotate: Math.random()*10 - 5 }} transition={{ type: 'spring' }} className="drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]">The playfulness...</motion.span>
               </div>
            </div>

            <div className="mt-16 bg-[#16050b]/80 p-10 md:p-16 rounded-[1rem] border-2 border-red-600 shadow-[20px_20px_0px_rgba(153,27,27,0.5)] backdrop-blur-md relative overflow-hidden transform -rotate-1">
              <div className="absolute inset-0 bg-red-950/30 backdrop-blur-3xl z-[-1]" />
              <p className="text-3xl md:text-5xl font-serif leading-relaxed text-rose-100 font-bold">
                But I am the <span className="text-white font-black tracking-widest uppercase mx-2 bg-red-600 px-4 py-2 rounded-xl border-4 border-red-900 border-dotted shadow-xl transform rotate-2 inline-block">main culprit</span> of it all.
              </p>
              <p className="mt-12 text-xl md:text-3xl font-mono text-rose-400 uppercase tracking-[0.2em] leading-loose font-bold">
                I deserve these things getting stripped off me.
              </p>
            </div>
          </motion.div>

          {/* Floating fading memory fragments */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: '100%', scale: 0.5, rotate: Math.random() * 45 - 20 }}
                  whileInView={{ opacity: [0, 0.15, 0], y: '-50%', scale: 1, rotate: Math.random() * -45 + 20 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 15 + Math.random() * 10, ease: "linear", repeat: Infinity, delay: Math.random() * 10 }}
                  className="absolute w-32 h-40 bg-rose-300/5 border border-rose-200/10 backdrop-blur-[1px] rounded-lg shadow-[0_0_30px_rgba(244,63,94,0.1)]"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `100%`
                  }}
               />
            ))}
          </div>
        </section>

        {/* Section 5: The Slot Machine Meter */}
        <section className="min-h-[100vh] flex items-center justify-center py-32">
          <SlotMachine />
        </section>

        {/* Section 6: Desperation */}
        <section className="min-h-[120vh] flex flex-col items-center justify-center text-center relative mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            onViewportEnter={() => setFloodPleases(true)}
            className="z-10 bg-[#16050b]/80 p-16 rounded-[4rem] backdrop-blur-3xl shadow-[0_0_150px_rgba(0,0,0,0.8)] border border-rose-900/50"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-16 inline-block relative"
            >
              <div className="absolute inset-0 bg-rose-600 blur-[80px] opacity-60 rounded-full" />
              <HeartCrack size={120} className="text-rose-500 relative z-10 drop-shadow-[0_0_30px_rgba(225,29,72,0.8)]" fill="currentColor" strokeWidth={0} />
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-red-500 mb-8 uppercase drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]">
              I cannot live without you.
            </h1>
            
            <p className="text-5xl md:text-7xl font-hand text-white max-w-4xl mx-auto leading-relaxed font-bold">
              Please Apoorva don't leave me! <br/> I can not live without her, not even a single day.
            </p>
          </motion.div>

          {/* Floating Pleases flood */}
          {floodPleases && (
            <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden flex flex-wrap gap-4 items-center justify-center opacity-90">
              {Array.from({ length: 15 }).map((_, i) => {
                const randomX = Math.random() * 100;
                const randomY = Math.random() * 100;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, top: `${randomY}vh`, left: `${randomX}vw` }}
                    animate={{ 
                      opacity: Math.random() * 0.9 + 0.5, 
                      scale: Math.random() * 2 + 1,
                      top: [`${randomY}vh`, `${randomY + (Math.random() * 40 - 20)}vh`],
                      left: [`${randomX}vw`, `${randomX + (Math.random() * 20 - 10)}vw`],
                      rotate: [0, Math.random() * 20 - 10, 0]
                    }}
                    transition={{ 
                      duration: Math.random() * 2 + 1.5,
                      delay: Math.random() * 0.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'circInOut'
                    }}
                    className="text-red-500 font-bold font-hand drop-shadow-[0_0_15px_rgba(244,63,94,1)] z-[100] whitespace-nowrap text-3xl md:text-5xl mix-blend-screen"
                    style={{ position: 'absolute' }}
                  >
                    {Math.random() > 0.3 ? 'Apoorva PLEASE' : (Math.random() > 0.5 ? '😭😭😭' : 'DON\'T LEAVE')}
                  </motion.div>
                )
              })}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
