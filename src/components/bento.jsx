import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function BentoGrid({ items }) {
  const disp = [
    "col-span-1 row-span-3",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-3",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
  ];

  const glowTransition = {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
    duration: 1,
    ease: "easeInOut",
  };

  const glowAnimation = {
    boxShadow: [
      "0px 0px 10px rgba(0, 128, 255, 0.2)",
      "0px 0px 20px rgba(0, 128, 255, 0.3)",
      "0px 0px 10px rgba(0, 128, 255, 0.2)",
    ],
  };

  const [popup, setPopup] = useState({
    isOpen: false,
    title: "",
    content: "",
    image: "",
  });

  const handleItemClick = (title, content, image) => {
    setPopup({ isOpen: true, title, content, image });
  };

  const handleClosePopup = () => {
    setPopup({ isOpen: false, title: "", content: "", image: "" });
  };

  return (
    <>
      <AnimatePresence>
        {popup.isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePopup}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {popup.image && (
                  <div className="w-full h-48 md:h-64 overflow-hidden">
                    <img
                      src={popup.image || "/placeholder.svg"}
                      alt={popup.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <button
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-ieee-blue mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {popup.title}
                </motion.h2>
                <motion.div
                  className="prose dark:prose-invert max-w-none"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {popup.content}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-screen flex items-center justify-center">


      <div className="w-[90vw] flex-col md:grid md:grid-cols-4 md:grid-rows-5 gap-4 p-4 *:rounded-xl *:min-h-24 ">
        {items.map((item, index) =>
          index !== 7 ? (
            <motion.div
            key={item.id}
            className={`bento-item h-auto flex items-center justify-center text-white text-lg font-bold ${disp[index]}`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
            }}
              animate={glowAnimation}
              transition={glowTransition}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                handleItemClick(item.label, item.content, item.image)
              }
            >
              <div
                className={`relative w-full rounded-xl h-full bottom-0 left-0 right-0 flex justify-center items-center ${
                  index !== 7 ? "bg-black/60" : ""
                } backdrop-blur-sm transition-all duration-300 hover:bg-black/40 ${
                  index !== 7
                  ? "dark:text-white text-white"
                  : "dark:text-white text-ieee-blue"
                } text-xl p-2 rounded-b-md`}
                >
                {item.label}
              </div>
            </motion.div>
          ) : (
            <div
            key={item.id}
            className={`bento-item h-auto flex items-center justify-center text-white text-lg font-bold ${disp[index]}`}
            >
              <motion.div className="relative rounded-xl w-full h-full bottom-0 left-0 right-0 flex justify-center items-center bg-opacity-60 text-ieee-blue text-3xl p-2 rounded-b-md">
                {item.label}
              </motion.div>
            </div>
          )
        )}
      </div>
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
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
