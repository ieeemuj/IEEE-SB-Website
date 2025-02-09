import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CircuitPattern from "./CircuitPattern";
import gsap from "gsap";
import { useState, useEffect, useRef, useMemo } from "react";
import ElectricBackground from "./background";

export default function Hero() {
  const words = useMemo(() => ["Innovation", "Technology", "Collaboration"], []);
  const wordRef = useRef(null);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const indexRef = useRef(0);
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      setCurrentWord(words[indexRef.current]);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    if (wordRef.current) {
      gsap.fromTo(
        wordRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 3 }
      );
    }
  }, [currentWord]);

  let glowTransition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 1.5,
    ease: "easeInOut",
  };

  let glowAnimation = {
    boxShadow: [
      "0px 0px 10px rgba(0, 128, 255, 0.5)",
      "0px 0px 20px rgba(0, 128, 255, 0.8)",
      "0px 0px 10px rgba(0, 128, 255, 0.5)",
    ],
  };

  return (
    <ElectricBackground>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div
          ref={ref}
          className="relative z-10 gap-12 items-center w-screen flex-col "
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className=" mt-8 text-ieee-blue dark:text-blue-400 text-xl font-semibold font-display">
                IEEE Student Branch MUJ
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-display">
                Empowering
                <br />
                <span
                  id="word-wrap"
                  className="word text-ieee-blue"
                  ref={wordRef}
                >
                  {currentWord}
                </span>
                <br />
                Together
              </h1>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join the world&apos;s largest technical professional organization
              and be part of the future of technology.
            </p>

            <div className="flex flex-wrap gap-4 w-screen justify-center">
              <motion.button
                className="bg-ieee-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                animate={glowAnimation}
                transition={glowTransition}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Events
              </motion.button>

              <motion.button
                className="border-2 border-ieee-blue text-ieee-blue dark:border-white dark:text-white px-8 py-3 rounded-md hover:bg-ieee-blue hover:text-white dark:hover:bg-white dark:hover:text-ieee-dark transition-colors duration-200"
                animate={glowAnimation}
                transition={glowTransition}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Join IEEE
              </motion.button>
            </div>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex overflow-hidden">
                {[
                  "krishna.avif",
                  "garima.avif",
                  "yashgarg.avif",
                  "aayush.avif",
                ].map((image, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-900"
                  >
                    <img
                      src={`/${image}`}
                      alt={`Person ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>Join 1000+ members in our community</p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-ieee-blue/20 to-transparent rounded-full filter blur-3xl"></div>
            <img
            // src="/placeholder.svg?height=400&width=400"
            // alt="Technology Illustration"
            // className="relative z-10 w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
      <CircuitPattern />
    </ElectricBackground>
  );
}
