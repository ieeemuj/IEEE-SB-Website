import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const achievementsData = [
  {
    id: "achievement1",
    year: 2023,
    society: "Society A",
    title: "Achievement 1",
    description:
      "achievement test 1",
    image: "/public/achievement1.webp",
  },
  {
    id: "achievement2",
    year: 2023,
    society: "Society B",
    title: "Achievement 2",
    description:
      "achievement 2",
    image: "/public/achievement2.webp",
  },
  {
    id: "achievement3",
    year: 2022,
    society: "Society A",
    title: "Achievement 3",
    description:
      "achievement 3",
    image: "/public/achievement3.webp",
  },
];

const AchievementCard = ({ achievement, isReversed }) => (
  <motion.div
    className={`group flex flex-col sm:flex-row ${
      isReversed ? "sm:flex-row-reverse" : ""
    } items-center gap-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0 w-full sm:w-1/2">
      <motion.img
        src={achievement.image}
        alt={achievement.title}
        className="w-full h-auto object-cover rounded-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {achievement.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
    </div>
  </motion.div>
);

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    society: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isReversed: PropTypes.bool.isRequired,
};

function Achievements() {
  const [year, setYear] = useState("2023");
  const [society, setSociety] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAchievements = achievementsData.filter((achievement) => {
    return (
      (year === "" || achievement.year.toString() === year) &&
      (society === "" || achievement.society === society) &&
      (searchTerm === "" ||
        achievement.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Our Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our milestones and success stories
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search Achievements"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Year</option>
            {[...new Set(achievementsData.map((a) => a.year))].map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
          <select
            value={society}
            onChange={(e) => setSociety(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Society</option>
            {[...new Set(achievementsData.map((a) => a.society))].map((soc) => (
              <option key={soc} value={soc}>
                {soc}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-8">
          {filteredAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              isReversed={index % 2 !== 0} // Alternate layout
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
