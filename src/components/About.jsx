import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { client } from "../../sanity";

const StatCard = ({ targetNumber, label }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(targetNumber);
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));
        if (start >= end) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-transform perspective-500"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-ieee-blue dark:text-blue-400 mb-2 font-display">
        {count}+
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
};

StatCard.propTypes = {
  targetNumber: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    const fetchEventCount = async () => {
      try {
        const count = await client.fetch(`count(*[_type == "event"])`);
        setEventCount(count);
      } catch (error) {
        console.error("Error fetching event count:", error);
      }
    };
    fetchEventCount();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed opacity-10"
        style={{
          backgroundImage: "url('/assets/parallax-bg.jpg')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Title Section */}
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white font-display"
            >
              Institute of Electrical and Electronics Engineers
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-ieee-blue dark:text-blue-400 font-semibold"
            >
              Advancing technology for the benefit of humanity.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400"
            >
              IEEE is the world's largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
            </motion.p>
          </div>

          {/* Stats Section with Animated Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard targetNumber="500" label="Members" />
            <StatCard targetNumber={eventCount.toString()} label="Events" />
            <StatCard targetNumber="4" label="Societies" />
            <StatCard targetNumber="10" label="Mentors" />
          </div>

          {/* About Section */}
          <div className="space-y-8 sm:space-y-12">
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-display">
                About IEEE SB MUJ
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                IEEE Student Branch, Manipal University Jaipur is a group of
                driven individuals striving to create and spread awareness about
                various technologies that surround us. In our pursuit of quality
                and practical knowledge, we are guided by a group of dedicated
                faculty members who are relentless in their efforts to hone our
                potential and mold us into the best engineers we could possibly
                become.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-display">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  IEEE SB MUJ envisions itself as the world's premier provider
                  of technical knowledge, community services, educational
                  seminars, and individualized services to the world's top
                  professionals.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-display">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  IEEE SB MUJ is the biggest technical professional organization
                  of Manipal University, Jaipur. Our mission here is to work on
                  projects and development into advancing technology in order to
                  transform lives through the power of technology and education.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
