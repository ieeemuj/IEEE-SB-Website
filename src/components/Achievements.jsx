import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BentoGrid from "./bento";

const achievementsData = [
  {
    id: 1,
    label: "Achievement 1",
    description: "test achievement 1",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    label: "Achievement 2",
    description: "test achievement 2",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    label: "Achievement 3",
    description: "test achievement 3",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 4,
    label: "Achievement 4",
    description: "test achievement 4",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 5,
    label: "Achievement 5",
    description: "test achievement 5",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 6,
    label: "Achievement 6",
    description: "test achievement 6",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 7,
    label: "Achievement 7",
    description: "test achievement 6",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 8,
    label: "A COMMUNITY OF INNOVATION",
    description: "",
    image: "",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 9,
    label: "Achievement 9",
    description: "test achievement 6",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 10,
    label: "Achievement 10",
    description: "test achievement 6",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 11,
    label: "Achievement 11",
    description: "test achievement 6",
    image: "/public/achievement.webp",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const AchievementCard = ({ achievement }) => (
  <motion.div
    className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-2 scale-90"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.02 }}
  >
    {achievement.image && (
      <div className="relative w-full h-32 overflow-hidden rounded-md"> {/* Reduced height */}
        <img
          src={achievement.image}
          alt={achievement.label || "Achievement Image"}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <h3 className="text-center text-sm font-medium text-gray-900 dark:text-white mt-1"> {/* Smaller font */}
      {achievement.label}
    </h3>
    {achievement.description && (
      <p className="text-center text-xs text-gray-600 dark:text-gray-300 mt-1"> {/* Smaller font */}
        {achievement.description}
      </p>
    )}
  </motion.div>
);


AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

function Achievements() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 ">
      <div className="">
        <div className="">
          <BentoGrid items={achievementsData} />
        </div>
      </div>
    </section>
  );
}


export default Achievements;
