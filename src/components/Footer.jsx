import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "IEEE.org", href: "https://www.ieee.org" },
        { name: "IEEE Xplore", href: "https://ieeexplore.ieee.org" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Join IEEE", href: "https://www.ieee.org" },
        { name: "Newsletter", href: "/blog" },
        { name: "FAQs", href: "/contact" },
      ],
    },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ieeemuj/",
      icon: <FaInstagram className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ieeesbmuj/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-ieee-blue dark:text-white"
              >
                IEEE SB MUJ
              </motion.span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Empowering innovation and fostering technological advancement
              through professional excellence and collaborative learning.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} IEEE Student Branch MUJ. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
