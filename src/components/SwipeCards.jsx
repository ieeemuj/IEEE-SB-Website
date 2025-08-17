import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { client } from "../../sanity";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sanity query already returns absolute poster URLs; no need to build again

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatSociety = (society) => {
  const societyMap = {
    "ieee-sb": "IEEE SB",
    "ieee-cs": "IEEE CS",
    "ieee-wie": "IEEE WIE",
    "ieee-cis": "IEEE CIS",
    ieeexacm: "IEEE X ACM",
    genesis: "Genesis",
  };
  return societyMap[society?.toLowerCase()] || society;
};

export default function SwipeCards() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const query = `*[_type == "event"] | order(startDateTime desc) [0...4] {
        _id, name, startDateTime, eventOverview, description, "poster": poster.asset->url, society
      }`;

      const data = await client.fetch(query);
      const today = new Date();

      setEvents(
        data.map((event) => ({
          ...event,
          status: new Date(event.startDateTime) > today ? "upcoming" : "past",
          poster: event.poster || "",
          formattedDate: formatDate(event.startDateTime),
          formattedSociety: formatSociety(event.society),
        }))
      );
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-ieee-dark">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-ieee-blue dark:text-ieee-light mb-6 text-center"
      >
        Events
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
        Explore upcoming and past events organized by IEEE MUJ.
      </p>
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <EventCardSection events={events} />
      </div>
    </section>
  );
}

const EventCardSection = ({ events }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    setCurrentEventIndex(0);
  }, [events]);

  if (events.length === 0) {
    return <p className="text-center text-gray-500">No events available</p>;
  }

  const currentEvent = events[currentEventIndex];

  const WORD_LIMIT = 50;
  const truncateText = (text, limit) => {
    if (!text) return "";
    const words = text.split(/\s+/);
    return words.length <= limit
      ? text
      : words.slice(0, limit).join(" ") + "...";
  };

  const handlePrev = () => {
    setCurrentEventIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentEventIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
      <div className="grid place-items-center bg-white dark:bg-ieee-dark relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-ieee-blue dark:text-ieee-light shadow-lg hover:bg-ieee-blue hover:text-white dark:hover:bg-ieee-light dark:hover:text-gray-900 transition-all"
          aria-label="Previous Event"
        >
          <FaArrowLeft size={28} />
        </button>
        <motion.img
          key={currentEvent._id}
          src={currentEvent.poster}
          alt={`Poster for ${currentEvent.name}`}
          className="h-[22rem] md:h-[31rem] w-[18rem] md:w-[25rem] origin-bottom rounded-lg bg-white object-cover shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        />
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-ieee-blue dark:text-ieee-light shadow-lg hover:bg-ieee-blue hover:text-white dark:hover:bg-ieee-light dark:hover:text-gray-900 transition-all"
          aria-label="Next Event"
        >
          <FaArrowRight size={28} />
        </button>
      </div>
      <div className="flex items-center justify-center p-6 bg-white dark:bg-ieee-dark">
        {currentEvent ? (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ieee-blue dark:text-ieee-light">
              {currentEvent.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {currentEvent.formattedSociety} | {currentEvent.formattedDate}
            </p>
            <div className="text-md md:text-lg text-gray-800 dark:text-gray-200 mb-6 space-y-4">
              {truncateText(
                currentEvent.status === "upcoming"
                  ? currentEvent.eventOverview
                  : currentEvent.description,
                WORD_LIMIT
              )
                .split("\n")
                .map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
            </div>
            <Link
              to={`/events/${
                currentEvent.status === "upcoming" ? "pre" : "post"
              }/${currentEvent._id}`}
              state={{ event: currentEvent }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        ) : (
          <p className="text-gray-500">Loading event details...</p>
        )}
      </div>
    </div>
  );
};

EventCardSection.propTypes = {
  events: PropTypes.array.isRequired,
};
