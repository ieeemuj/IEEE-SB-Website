
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Tilt from 'react-parallax-tilt'; 

const testimonials = [
  {
    id: 1,
    content:
      "IEEE has a special contribution in my journey from a first-year major student to a tech enthusiast. The immense exposure to everything in the Thinkies provided through IEEE MUJ has transformed everything. The opportunities provided by IEEE prompted me to give step further and serve on the Council for the betterment of students.",
    author: "Aayush Raj",
    position: "Technical Chapter Lead",
    avatar: "/aayush.avif",
  },
  {
    id: 2,
    content:
      "Being part of IEEE has been an incredible journey of growth and learning. The collaborative environment and mentorship opportunities have shaped my technical skills and professional development.",
    author: "Sarah Chen",
    position: "Student Member",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "IEEE SB MUJ has provided me with a platform to explore cutting-edge technologies and connect with like-minded individuals. The workshops and events have been instrumental in broadening my horizons.",
    author: "Rahul Sharma",
    position: "Events Coordinator",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
              Straight from the heart
            </h2>
            <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            IEEE members and event participants share their perspectives.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Tilt
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                glareEnable={true}
                glareMaxOpacity={0.3}
                perspective={1000}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                scale={1.05}
              >
                <div className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={
                        testimonials[currentIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -left-2 sm:-left-12 transform -translate-y-1/2">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-2 sm:-right-12 transform -translate-y-1/2 ">
            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-ieee-blue"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ieee-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Join Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
