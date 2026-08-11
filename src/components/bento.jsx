import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const extractYear = (title) => {
  const match = title.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : null;
};

const truncateText = (text, maxLength = 80) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

export default function BentoGrid({ items }) {
  const [popup, setPopup] = useState({
    isOpen: false,
    title: "",
    content: "",
    image: "",
    year: null,
  });

  const handleItemClick = (title, content, image) => {
    setPopup({ isOpen: true, title, content, image, year: extractYear(title) });
  };

  const handleClosePopup = () => {
    setPopup({ isOpen: false, title: "", content: "", image: "", year: null });
  };

  const featuredItem = items[0];
  const gridItems = items.slice(1);

  return (
    <>
      <AnimatePresence>
        {popup.isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePopup}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-[30vh] md:h-[45vh] relative">
                  <img
                    src={popup.image || "/placeholder.svg"}
                    alt={popup.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col bg-white dark:bg-gray-800">
                  <button
                    onClick={handleClosePopup}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <motion.h2
                    className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {popup.title}
                  </motion.h2>
                  {popup.year && (
                    <motion.span
                      className="text-sm text-gray-500 dark:text-gray-400 mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      {popup.year}
                    </motion.span>
                  )}
                  <motion.div
                    className="text-base text-gray-700 dark:text-gray-300 leading-relaxed overflow-y-auto flex-1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p>{popup.content}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:max-w-[900px] mx-auto">
        <motion.div
          key={featuredItem.id}
          className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden cursor-pointer group"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            handleItemClick(
              featuredItem.label,
              featuredItem.content,
              featuredItem.image,
            )
          }
        >
          <img
            src={featuredItem.image || "/placeholder.svg"}
            alt={featuredItem.label}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-2">
              {featuredItem.label}
            </h3>
            {extractYear(featuredItem.label) && (
              <span className="text-xs text-gray-300">
                {extractYear(featuredItem.label)}
              </span>
            )}
            <p className="text-sm text-gray-200 mt-2 line-clamp-2">
              {truncateText(featuredItem.content, 100)}
            </p>
          </div>
        </motion.div>

        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              handleItemClick(item.label, item.content, item.image)
            }
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">
                {item.label}
              </h3>
              {extractYear(item.label) && (
                <span className="text-xs text-gray-300">
                  {extractYear(item.label)}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

BentoGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
  ).isRequired,
};
