import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CakePartyScreen() {
  const [partyStarted, setPartyStarted] = useState(false);

  const handleCakeClick = () => {
    setPartyStarted(true);
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden font-sans">
      {/* Glow behind the cake */}
      {partyStarted && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 230, 150, 0.3) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Confetti */}
      <AnimatePresence>
        {partyStarted &&
          [...Array(40)].map((_, i) => (
            <motion.img
              key={i}
              src="/confetti.png"
              alt="confetti"
              className="w-16 h-16 absolute z-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -100,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                y: window.innerHeight,
                rotate: 360 + Math.random() * 360,
                opacity: 1,
              }}
              transition={{
                duration: 2 + Math.random() * 1.5,
                delay: i * 0.05,
              }}
            />
          ))}
      </AnimatePresence>

      {/* Happy Birthday Sandeep message */}
      <AnimatePresence>
        {partyStarted && (
          <motion.h1
            className="absolute top-16 text-yellow-300 text-5xl md:text-6xl font-bold z-50 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            🎉 Happy Birthday Sandeep! 🎉
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Cake */}
      <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={handleCakeClick}
        className="z-10 flex flex-col items-center cursor-pointer mt-20"
      >
        {/* Candles */}
        <div className="flex gap-5 mb-6 z-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className="w-2 h-20 bg-yellow-400 rounded-sm shadow-sm" />
              {partyStarted && (
                <>
                  <motion.div
                    className="absolute top-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(255,200,100,0.7) 0%, transparent 80%)",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <motion.img
                    src="/flame.png"
                    alt="flame"
                    className="w-6 absolute -top-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Beautiful Cake Body */}
        <div className="flex flex-col items-center">
          {/* Top layer */}
          <div className="w-[320px] h-[40px] bg-pink-400 rounded-t-full shadow-lg border-4 border-pink-500 relative z-10">
            <div className="absolute -bottom-3 left-0 w-full h-5 bg-pink-200 rounded-b-full shadow-inner"></div>
          </div>

          {/* Second layer */}
          <div className="w-[360px] h-[60px] bg-white border-t-4 border-pink-300 rounded-b-3xl shadow-xl relative -mt-1">
            <div className="absolute top-0 w-full h-4 bg-pink-100 rounded-b-full"></div>
          </div>

          {/* Third layer */}
          <div className="w-[380px] h-[40px] bg-yellow-200 border-t-2 border-yellow-300 rounded-b-2xl shadow-md -mt-2"></div>

          {/* Decorative cream dots */}
          <div className="flex justify-between w-[300px] mt-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-white shadow-md border border-pink-200"
              ></div>
            ))}
          </div>

          {/* Base Plate */}
          <div className="w-[400px] h-6 bg-gray-300 rounded-b-full shadow-inner mt-4"></div>
        </div>

        {!partyStarted && (
          <div className="mt-6 text-yellow-200 text-xl font-semibold">
            Tap the Cake to Light Candles 🎂
          </div>
        )}
      </motion.div>
    </div>
  );
}
