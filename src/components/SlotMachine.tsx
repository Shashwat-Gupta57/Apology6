import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function SlotMachine() {
  const [value, setValue] = useState(999);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !spinning && value > 0) {
          setSpinning(true);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById('slot-machine');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [spinning, value]);

  useEffect(() => {
    if (spinning && value > 0) {
      const interval = setInterval(() => {
        setValue(v => {
          if (v <= 10) {
            clearInterval(interval);
            return 0;
          }
          return v - Math.floor(Math.random() * 150 + 50);
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [spinning, value]);

  const displayValue = value.toString().padStart(3, '0');

  return (
    <div id="slot-machine" className="flex flex-col items-center w-full max-w-xl mx-auto py-24 relative">
      
      {/* Ambient glow behind slot machine */}
      <div className="absolute inset-0 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-rose-300 uppercase tracking-[0.3em] font-medium text-sm md:text-base mb-8 z-10"
      >
        Stats that I deserve you
      </motion.p>
      
      <motion.div 
        animate={{ rotate: [-1, 2, 0, -2, 1], x: [0, 2, -2, 3, -1], y: [0, -2, 1, -1, 2] }}
        transition={{ duration: 0.2, repeat: Infinity }}
        className="flex gap-4 bg-rose-950/40 backdrop-blur-xl p-6 md:p-8 rounded-none border-4 border-dashed border-rose-800 shadow-[20px_20px_0px_rgba(225,29,72,0.4)] z-10 transform -skew-x-2"
      >
        {displayValue.split('').map((digit, i) => (
          <div key={i} className="relative w-20 h-28 md:w-24 md:h-36 bg-black/80 rounded-none overflow-hidden flex items-center justify-center border-t-8 border-r-2 border-rose-500 shadow-inner">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 pointer-events-none z-10" />
            <motion.div
              key={digit}
              initial={{ y: -80, filter: 'blur(8px)', opacity: 0 }}
              animate={{ y: [0, -5, 5, 0], filter: 'blur(0px)', opacity: 1, x: [-2, 2, 0] }}
              transition={{ type: 'spring', damping: 15, stiffness: 100, x: { repeat: Infinity, duration: 0.1 }, y: { repeat: Infinity, duration: 0.1 } }}
              className="text-6xl md:text-8xl font-serif text-red-500 font-bold drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            >
              {digit}
            </motion.div>
          </div>
        ))}
      </motion.div>
      
      <div className="min-h-[100px] mt-12 flex items-center justify-center w-full z-10">
        {value === 0 && (
          <motion.p
            initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: [1, 1.1, 0.95, 1], filter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-rose-200 font-hand text-4xl md:text-6xl text-center leading-relaxed font-bold animate-pulse"
          >
            Apoorva, whatever I ever said... <br /> please just forget that. Please.
          </motion.p>
        )}
      </div>
    </div>
  );
}
