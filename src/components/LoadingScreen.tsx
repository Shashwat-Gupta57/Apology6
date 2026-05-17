import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 800));
      setPhase(1); // Heart + first part
      await new Promise(r => setTimeout(r, 2000));
      setPhase(2); // Second part 
      await new Promise(r => setTimeout(r, 2500));
      setPhase(3); // Entering
      await new Promise(r => setTimeout(r, 1000));
      setPhase(4); // Exit out
      await new Promise(r => setTimeout(r, 800));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#16050b] flex flex-col items-center justify-center p-6 text-center z-50 overflow-hidden">
      {/* Ambient background glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.15)_0%,transparent_60%)]" 
      />

      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div
            key="engine"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className="text-rose-300/50 font-mono text-sm tracking-widest uppercase"
          >
            starting engine..
          </motion.div>
        )}

        {phase >= 1 && phase < 4 && (
          <motion.div
            key="heart-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center max-w-3xl mx-auto z-10 w-full"
          >
            <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] space-y-16">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-rose-400 drop-shadow-[0_0_50px_rgba(251,113,133,0.7)]"
              >
                <Heart size={100} fill="currentColor" strokeWidth={0} />
              </motion.div>

              <div className="space-y-12 text-2xl md:text-4xl font-serif text-rose-100/90 leading-relaxed px-4">
                <motion.p
                  initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, x: [0, -5, 5, -2, 2, 0], filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="italic text-rose-300"
                >
                  Apoorva... even though I was blind, never saw the world from your POV, and was completely the culprit here...
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: phase >= 2 ? 1 : 0, scale: phase >= 2 ? [1, 1.05, 1] : 0.9, filter: phase >= 2 ? 'blur(0px)' : 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-rose-50 font-medium text-4xl md:text-5xl"
                >
                  I really want to tell you that I do love you a lot, and cannot at all stay without you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 30, filter: phase >= 2 ? 'blur(0px)' : 'blur(10px)' }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="text-rose-400/80 text-xl md:text-2xl font-mono tracking-wide max-w-2xl mx-auto"
                >
                  Your decision of keeping me distant a bit is absolutely justified, and as the one at fault, I fully deserve it.
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Entering Text */}
      <AnimatePresence>
        {phase >= 3 && phase < 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-16 text-rose-300/70 font-mono text-sm tracking-[0.3em] uppercase flex items-center gap-2"
          >
            entering
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
