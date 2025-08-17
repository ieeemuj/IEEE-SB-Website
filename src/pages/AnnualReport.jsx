import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../sanity";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCalendar, FiUsers } from "react-icons/fi";

const AnnualReport = () => {
  const [events, setEvents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const query = `*[_type == "event"] | order(startDateTime desc) {
        name, 
        description, 
        society,
        startDateTime, 
        "posterUrl": poster.asset->url,
        _id
      }`;
      const data = await client.fetch(query);

      const today = new Date();
      const pastEvents = data.filter(
        (event) => new Date(event.startDateTime) <= today
      );

      setEvents(pastEvents);

      // Set featured event (latest event from current year)
      const currentYearEvents = pastEvents.filter(
        (event) => new Date(event.startDateTime).getFullYear() === selectedYear
      );
      if (currentYearEvents.length > 0) {
        setFeaturedEvent(currentYearEvents[0]);
      }
    };
    fetchEvents();
  }, [selectedYear]);

  const groupedEvents = events.reduce((acc, event) => {
    const year = new Date(event.startDateTime).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-ieee-dark text-gray-900 dark:text-white">
      {/* Magazine Header */}
      <motion.div
        className="relative w-full bg-gradient-to-r from-ieee-blue-dark via-ieee-blue to-ieee-blue-light text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="text-6xl lg:text-8xl font-bold mb-4 tracking-wider font-display"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              IEEE MUJ
            </motion.h1>
            <motion.div
              className="text-2xl lg:text-3xl font-light mb-2 font-sans"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ANNUAL REPORT
            </motion.div>
            <motion.div
              className="text-lg opacity-80 font-light font-sans"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {selectedYear} • A Year in Review
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Year Selector */}
      <div className="sticky top-0 z-30 bg-white dark:bg-ieee-dark border-b border-ieee-blue/20 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="text-sm font-semibold tracking-wide uppercase text-ieee-blue dark:text-ieee-light">
            Year in Focus
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-2 bg-ieee-blue text-white rounded-full shadow-md hover:bg-ieee-blue-dark transition-all font-semibold"
            >
              <span className="text-lg">{selectedYear}</span>
              <FiChevronDown
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 z-40"
                  onClick={() => setDropdownOpen(false)}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-2 w-full bg-white dark:bg-ieee-dark rounded-lg shadow-xl z-50 border border-ieee-blue/20 overflow-hidden"
                >
                  {Object.keys(groupedEvents)
                    .sort((a, b) => b - a)
                    .map((year) => (
                      <motion.li
                        key={year}
                        onClick={() => {
                          setSelectedYear(Number(year));
                          setDropdownOpen(false);
                        }}
                        className="px-6 py-3 hover:bg-ieee-blue/10 dark:hover:bg-ieee-blue/20 cursor-pointer transition-all font-semibold"
                        whileHover={{ scale: 1.02 }}
                      >
                        {year}
                      </motion.li>
                    ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Featured Article Section */}
      {featuredEvent && (
        <motion.div
          className="max-w-6xl mx-auto px-8 py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm font-semibold tracking-wide uppercase text-ieee-blue dark:text-ieee-light mb-4">
            Featured Story
          </div>
          <div
            className="relative bg-gray-100 dark:bg-ieee-dark-blue rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => navigate(`/events/post/${featuredEvent._id}`)}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {featuredEvent.posterUrl && (
                <motion.div
                  className="relative h-80 lg:h-96 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={featuredEvent.posterUrl}
                    alt={featuredEvent.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              )}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-sm font-semibold tracking-wide uppercase text-ieee-blue dark:text-ieee-light mb-2">
                  {featuredEvent.society
                    ? featuredEvent.society.toUpperCase()
                    : "IEEE MUJ"}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
                  {featuredEvent.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {featuredEvent.description &&
                  featuredEvent.description.length > 200
                    ? `${featuredEvent.description.substring(0, 200)}...`
                    : featuredEvent.description ||
                      "An extraordinary event that showcased innovation and collaboration."}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {new Date(featuredEvent.startDateTime).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Magazine Grid Layout */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Events & Activities</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {groupedEvents[selectedYear]?.length || 0} events in {selectedYear}
          </div>
        </div>

        {groupedEvents[selectedYear]?.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {groupedEvents[selectedYear].map((event, index) => (
              <motion.div
                key={event._id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => navigate(`/events/post/${event._id}`)}
              >
                <motion.div
                  className="relative h-64 overflow-hidden rounded-xl mb-4"
                  whileHover={{ scale: 1.03 }}
                >
                  {event.posterUrl ? (
                    <img
                      src={event.posterUrl}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-ieee-blue to-ieee-blue-dark flex items-center justify-center">
                      <FiUsers className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </motion.div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold tracking-wide uppercase text-ieee-blue dark:text-ieee-light">
                    {event.society ? event.society.toUpperCase() : "IEEE MUJ"}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-ieee-blue dark:group-hover:text-ieee-light transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {event.description && event.description.length > 150
                      ? `${event.description.substring(0, 150)}...`
                      : event.description ||
                        "An engaging event that brought together innovation and learning."}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4" />
                    {new Date(event.startDateTime).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold mb-2">No Events This Year</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Check back later or explore other years.
            </p>
          </motion.div>
        )}
      </div>

      {/* Magazine Footer */}
      <div className="bg-gray-100 dark:bg-ieee-dark-blue mt-20">
        <div className="max-w-6xl mx-auto px-8 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">IEEE MUJ Student Branch</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering students through technology, innovation, and professional
            development. Join us in shaping the future of engineering and
            technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
