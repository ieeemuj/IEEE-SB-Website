import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 py-8 px-4 lg:px-20 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center mb-16 text-ieee-blue dark:text-ieee-light">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center text-ieee-blue dark:text-ieee-light">
            Our Team
          </h2>
          <div className="space-y-6">
            {[
              { name: "Arunanshu Basu", role: "Chairperson", phone: "+91 7869486315" },
              { name: "Pratyush Sharma", role: "Vice Chairperson", phone: "+91 9811499046" },
              { name: "Yatharth Rajpoot", role: "General Secretary", phone: "+91 9319927106" },
              { name: "Anushka Srivastav", role: "Managing Director", phone: "+91 7985212566" },
              { name: "Aadrit Kaushik", role: "Treasurer", phone: "+91 9873013772" },
              { name: "Navya Bhardwaj", role: "Human Resources Director", phone: "+91 9810263661" },
              { name: "Shrinivas Kharpade", role: "Community and Media Director", phone: "+91 8999550884" },
              { name: "Yogesh Jajoria", role: "Technical Projects Mentor", phone: "+91 9418307527" },
            ].map(({ name, role, phone }) => (
              <motion.div
                key={name}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md transform transition-transform hover:scale-105"
              >

                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                  {name.charAt(0)}
                </div>

                <div className="flex-1">
                  <p className="text-base font-medium">{name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center space-x-1 text-sm text-gray-700 dark:text-gray-300 hover:underline"
                    aria-label={`Call ${name}`}
                  >
                    <FaPhoneAlt />
                    <span>{phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center text-ieee-blue dark:text-ieee-light">
            Get in Touch
          </h2>
          <form className="space-y-6" autoComplete="on">

            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>


            <motion.button
              type="submit"
              className="w-full py-3 text-sm font-medium rounded-lg bg-blue-500 text-white shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>


      <div className="mt-16 space-y-8">
        <h2 className="text-3xl font-semibold text-center text-ieee-blue dark:text-ieee-light">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
           {
            question: "What does IEEE stand for, and what is its purpose?",
            answer:
              "IEEE stands for the Institute of Electrical and Electronics Engineers. It is a global organization dedicated to advancing technology for the benefit of humanity. At Manipal University Jaipur (MUJ), IEEE serves as a vibrant student community that fosters innovation, technical learning, and professional development. Its purpose is to provide students with opportunities to enhance their knowledge through workshops, seminars, hackathons, and networking events, while also encouraging them to engage in collaborative projects and stay updated with the latest advancements in technology.",
          },
          {
            question: "What benefits do I get as an IEEE member?",
            answer:
              "Being a part of IEEE provides numerous benefits, including access to IEEE Xplore, technical workshops, certifications, and exclusive networking opportunities with industry professionals and fellow tech enthusiasts. You can stay updated with the latest advancements in technology and gain practical skills through events and projects. Being an IEEE member always allows to grow in multiple ways. From attending workshops that sharpen technical skills to organizing events that boost leadership and teamwork abilities. It’s a platform that supports innovation, learning, and collaboration, helping members unlock their full potential.",
          },
          {
            question: "How can I contribute to IEEE events and initiatives? & Can students from non-engineering backgrounds join IEEE?",
            answer:
              "You can contribute by volunteering to organize events, proposing innovative event ideas, participating in activities, collaborating on projects. Active participation will help both the organization and your professional growth. Yes, IEEE MUJ is open to students from all disciplines. IEEE MUJ recognizes and values the innovation that thrives when people from different backgrounds collaborate.",
          },
          {
            question: "What kinds of events does IEEE organize?",
            answer:
              "IEEE offers students opportunities to expand their knowledge through workshops, seminars, hackathons, and networking events. It also encourages active participation in collaborative projects and helps them stay informed about the latest technological advancements.",
          },
          {
            question: "How can I network with industry professionals through IEEE?",
            answer:
              "IEEE provides an excellent platform for networking with industry professionals and leveraging its vast alumni network. Many IEEE alumni are employed at top global companies such as Google, NVIDIA, and others, offering valuable opportunities to connect with experienced professionals. Additionally, IEEE regularly organizes seminars, workshops, and sessions featuring industry experts, enabling members to interact, gain insights, and build meaningful professional relationships. These initiatives help foster connections with leaders in various fields and create pathways for career growth and collaboration.",
          },
          
          ].map(({ question, answer }, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div>
                <h3 className="font-medium text-lg">{question}</h3>
              </div>

              <motion.div
                className="mt-2 text-sm text-gray-600 dark:text-gray-400 opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p>{answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center py-8 px-4 lg:px-20">
        <div className="text-gray-900 dark:text-gray-100 max-w-md space-y-4">
          <h3 className="text-2xl font-semibold text-ieee-blue dark:text-ieee-light">
            Discover what IEEE has to offer. Become a member.
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Be a part of a community that prepares you for college and beyond.
          </p>
        </div>
        <motion.a
          className="py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md transform transition-transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
          href="https://www.ieee.org/"
        >
          Join Now
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
