import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef, useMemo } from "react";
import ElectricBackground from "./background";

export default function Hero() {
  const words = useMemo(
    () => ["Innovation", "Technology", "Collaboration"],
    []
  );
  const [modalVisible, setModalVisible] = useState(false);
  const indexRef = useRef(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });

  const membershipModal = () => {
    return (
      <AnimatePresence>
        {modalVisible && (
          <motion.div
            key="membership-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setModalVisible(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6 shadow-xl z-10 text-gray-900 dark:text-gray-100"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-center w-full">
                  Why IEEE MUJ?
                </h3>
                <button
                  onClick={() => setModalVisible(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                  aria-label="Close membership modal"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-4 text-sm text-left">
                <section>
                  <h4 className="font-medium">Academic Impact & Growth</h4>
                  <p className="mt-2">
                    IEEE MUJ transforms academic learning into tangible
                    outcomes. Members work on semester-long, faculty-guided
                    projects — from publishable research and prototype hardware
                    to full-stack applications — that strengthen technical
                    competence and create demonstrable impact for campus and
                    industry.
                  </p>
                </section>

                <section>
                  <h4 className="font-medium">Opportunities & Outcomes</h4>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Interdisciplinary project teams in AI, robotics, IoT and
                      systems engineering.
                    </li>
                    <li>
                      Mentoring and network access with alumni placed at
                      top-tier tech firms.
                    </li>
                    <li>
                      Opportunities to publish, present at conferences, and
                      compete in national events.
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="font-medium">Membership Perks</h4>
                  <p className="mt-2">
                    Members get lab access, members-only workshops, priority
                    registrations, internship leads, and discounted resources —
                    all designed to accelerate learning and career readiness.
                  </p>
                </section>

                <section>
                  <h4 className="font-medium">Membership Fee</h4>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead className="sr-only">
                        <tr>
                          <th>Duration</th>
                          <th>Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="py-2 pr-4 font-medium">1 Year</td>
                          <td className="py-2">₹400</td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 pr-4 font-medium">2 Years</td>
                          <td className="py-2">₹600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h4 className="font-medium">Join Now</h4>
                  <p className="mt-2">
                    Complete the registration using the official membership
                    form. Submissions are reviewed and followed up with payment
                    and onboarding instructions.
                  </p>
                  <a
                    className="inline-block mt-3 bg-ieee-blue text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    href="https://forms.gle/asASeKRekYRAg7cr9"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setModalVisible(false)}
                  >
                    Membership Form
                  </a>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      setCurrentWord(words[indexRef.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  const memoryImages = [
const memoryImages = [
  {
    src: "https://cdn.sanity.io/images/gcb0j4e6/production/235d12a437a470bb1e8262c8fb1d0e0aecd18b0f-6000x4000.jpg",
    top: "20%",
    left: "7%",
  },
  {
    src: "https://cdn.sanity.io/images/gcb0j4e6/production/4bcf01ecd1cc7e830b18df82f4e7068a777cd86b-1600x1200.jpg",
    top: "12%",
    right: "2%",
  },
  {
    src: "https://cdn.sanity.io/images/gcb0j4e6/production/edd7bd9b7efa440bf0a6747300de4289d77ef32f-1600x1200.jpg",
    top: "45%",
    left: "2%",
  },
  {
    src: "https://cdn.sanity.io/images/gcb0j4e6/production/2c1b2f168ddd0ae226b1db29581377359f256374-6000x3376.jpg",
    top: "70%",
    left: "5%",
  },
  {
    src: "https://cdn.sanity.io/images/gcb0j4e6/production/69f31f2fdb3b852cf4d25da52147c2ce18601f02-6000x3368.jpg",
    top: "78%",
    right: "5%",
  },
];
  ];

  const isMobile = window.innerWidth < 640;

  const glowTransition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: isMobile ? 2 : 1.5,
    ease: "easeInOut",
  };

  const glowAnimation = {
    boxShadow: [
      "0px 0px 10px rgba(0, 128, 255, 0.4)",
      "0px 0px 15px rgba(0, 128, 255, 0.6)",
      "0px 0px 10px rgba(0, 128, 255, 0.4)",
    ],
  };

  return (
    <ElectricBackground>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-32 pb-20 relative">
        {/* Floating Memory Images */}
        {memoryImages.map(({ src, top, left, right }, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Memory ${i + 1}`}
            className="absolute w-20 h-16 sm:w-40 sm:h-32 object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: isMobile ? [0, -5, 0] : [0, -10, 0],
            }}
            transition={{
              duration: isMobile ? 3 : 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ top, left, right }}
          />
        ))}

        <div
          ref={ref}
          className="relative z-10 flex flex-col text-center gap-12 w-full items-center"
        >
          <div className="space-y-8">
            <h2 className="text-ieee-blue dark:text-blue-400 text-sm sm:text-xl font-semibold font-display">
              IEEE Student Branch MUJ
            </h2>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-display relative">
              Empowering
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="text-ieee-blue inline-block"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: isMobile ? 0.4 : 0.6 }}
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
              <br />
              Together
            </h1>

            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 px-2 sm:px-0">
              Join the world&apos;s largest technical professional organization
              and be part of the future of technology.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                className="bg-ieee-blue text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                animate={glowAnimation}
                transition={glowTransition}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/events"
              >
                Explore Events
              </motion.a>

              <motion.a
                className="border-2 border-ieee-blue text-ieee-blue dark:border-white dark:text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-ieee-blue hover:text-white dark:hover:bg-white dark:hover:text-ieee-dark transition-colors duration-200"
                animate={glowAnimation}
                transition={glowTransition}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalVisible(true);
                }}
              >
                Join IEEE
              </motion.a>
            </div>

            {/* People Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[
                  "krishna.avif",
                  "garima.avif",
                  "yashgarg.avif",
                  "aayush.avif",
                ].map((image, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-900"
                  >
                    <img
                      src={`/${image}`}
                      alt={`Person ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm sm:text-md text-center sm:text-left">
                Join 1500+ members in our community
              </p>
            </div>
          </div>
        </div>
      </div>
      {membershipModal()}
    </ElectricBackground>
  );
}
