import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Track scroll position
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "BLOG", path: "https://medium.com/@ieeemuj" },
    { name: "SOCIETIES", path: "/societies" },
    { name: "TEAM", path: "/team" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen bg-white/90 dark:bg-ieee-dark/90 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out border-b border-gray-200 dark:border-gray-800 ${
        scrolling ? "h-14" : "h-20" // Navbar height change based on scroll
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full pt-2">
          <Link to="/" className="flex-shrink-0">
            <motion.span
              className={`text-ieee-blue dark:text-white font-display font-bold transition-all duration-500 ease-in-out ${
                scrolling ? "text-lg" : "text-3xl"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              IEEE SB MUJ
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 ease-in-out ${
                    location.pathname === item.path
                      ? "text-ieee-blue dark:text-white bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white"
                  } ${scrolling ? "text-xs" : "text-base"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 ease-in-out ${
                scrolling ? "text-lg" : "text-xl"
              }`}
              animate={{
                boxShadow: [
                  "0px 0px 10px rgba(0, 128, 255, 0.5)",
                  "0px 0px 20px rgba(0, 128, 255, 0.8)",
                  "0px 0px 10px rgba(0, 128, 255, 0.5)",
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-ieee-blue" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:block bg-ieee-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-500 ease-in-out ${
                scrolling ? "text-sm py-1 px-3" : "text-lg py-2 px-4"
              }`}
            >
              JOIN NOW
            </motion.button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-ieee-blue dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-ieee-blue dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-ieee-dark border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-ieee-blue dark:text-white bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300"
                  } ${scrolling ? "text-xs" : "text-base"}`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-ieee-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-500 ease-in-out"
              >
                JOIN NOW
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
