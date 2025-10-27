import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from "../../sanity";
import { Container } from '../components/Container';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { SiGooglescholar } from 'react-icons/si';
import imageUrlBuilder from '@sanity/image-url';
import Modal from 'react-modal'; 
import { FaLinkedin, FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaUser, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


Modal.setAppElement('#root');

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  if (!source || !source.asset) return null;
  return builder.image(source).width(400).height(400).auto('format').fit('max').url();
};

const Faculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [departments, setDepartments] = useState([]);
  const [modalFaculty, setModalFaculty] = useState(null); 

  // Fetch faculty data
  useEffect(() => {
    const fetchFacultyData = async () => {
      setLoading(true);
      const query = `*[_type == "faculty"] {
        name,
        email,
        department,
        designation,
        educationalQualifications,
        linkedinUrl,
        googleScholarUrl,
        notableWorks,
        photo
      } | order(department, designation)`;

      try {
        const data = await client.fetch(query);
        setFacultyData(data);
        
        // Extract unique departments
        const uniqueDepartments = [...new Set(data.map(faculty => faculty.department))];
        setDepartments(["All", ...uniqueDepartments]);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
        setError('Failed to load faculty data.');
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  const filteredFaculty = selectedDepartment === "All" 
    ? facultyData 
    : facultyData.filter(faculty => faculty.department === selectedDepartment);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-ieee-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-ieee-blue mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading faculty information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-ieee-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-ieee-blue text-white rounded-lg hover:bg-ieee-blue-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-ieee-dark transition-colors duration-300">
      <Container>
        <div className="py-20">
          {/* Header Section */}
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-ieee-blue">Faculty</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Meet the dedicated faculty members who guide and support IEEE Student Branch MUJ 
                in our journey of innovation and excellence.
              </p>
            </div>
          </FadeIn>

          {/* Department Filter */}
          <FadeIn>
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                      selectedDepartment === dept
                        ? 'bg-ieee-blue text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
              
              {/* Results count */}
              <div className="text-center mt-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {filteredFaculty.length} faculty member{filteredFaculty.length !== 1 ? 's' : ''} 
                  {selectedDepartment !== "All" && ` in ${selectedDepartment}`}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Faculty Grid */}
          <FadeInStagger>
            {filteredFaculty.length === 0 ? (
              <FadeIn>
                <div className="text-center py-20">
                  <FaUser className="text-6xl text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    No faculty members found for the selected department.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {filteredFaculty.map((faculty, index) => (
                  <FadeIn key={faculty._id || index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                      onClick={() => setModalFaculty(faculty)} // opens modal on click
                    >
                      {/* Faculty Photo */}
                      <div className="relative h-48 sm:h-56 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                        {faculty.photo ? (
                          <img
                            src={urlFor(faculty.photo)}
                            alt={faculty.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-ieee-blue to-ieee-blue-dark flex items-center justify-center">
                            <FaUser className="text-3xl text-white opacity-50" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      {/* Faculty Information */}
                      <div className="p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                          {faculty.name}
                        </h3>
                        <p className="text-sm text-ieee-blue font-medium truncate">
                          {faculty.designation}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                          {faculty.department}
                        </p>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            )}
          </FadeInStagger>
        </div>
      </Container>

      {/* Faculty modal */}
      {modalFaculty && (
        <Modal
          isOpen={!!modalFaculty}
          onRequestClose={() => setModalFaculty(null)}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl mx-auto my-12 p-8 outline-none relative"
          overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          {/* Close button (X in corner) */}
          <button
            onClick={() => setModalFaculty(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"
          >
            <FaTimes size={18} />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Photo */}
            {modalFaculty.photo ? (
              <img
                src={urlFor(modalFaculty.photo)}
                alt={modalFaculty.name}
                className="w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-ieee-blue flex items-center justify-center">
                <FaUser className="text-5xl text-white opacity-70" />
              </div>
            )}

            {/* Detailed Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{modalFaculty.name}</h2>
              <p className="text-ieee-blue font-medium text-lg">{modalFaculty.designation}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{modalFaculty.department}</p>

              {/* Qualifications */}
              {modalFaculty.educationalQualifications && (
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Educational Qualifications</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {modalFaculty.educationalQualifications}
                  </p>
                </div>
              )}

              {/* Notable Works */}
              {modalFaculty.notableWorks && (
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Notable Works</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {modalFaculty.notableWorks}
                  </p>
                </div>
              )}

              {/* Contact Info */}
              {modalFaculty.email && (
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Contact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                    <FaEnvelope className="text-red-500" /> {modalFaculty.email}
                  </p>
                </div>
              )}

              {/* External Links */}
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                {modalFaculty.linkedinUrl && (
                  <a
                    href={modalFaculty.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                )}
                {modalFaculty.googleScholarUrl && (
                  <a
                    href={modalFaculty.googleScholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:underline"
                  >
                    <SiGooglescholar /> Google Scholar
                  </a>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Navigation Arrows (outside modal, floating) */}
      {modalFaculty && (
        <>
          {/* Left Arrow */}
          <button
            onClick={() => {
              const currentIndex = filteredFaculty.indexOf(modalFaculty);
              const prevIndex = (currentIndex - 1 + filteredFaculty.length) % filteredFaculty.length;
              setModalFaculty(filteredFaculty[prevIndex]);
            }}
            className="fixed left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full shadow-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition z-50"
          >
            <FaChevronLeft size={22} className="text-gray-700 dark:text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              const currentIndex = filteredFaculty.indexOf(modalFaculty);
              const nextIndex = (currentIndex + 1) % filteredFaculty.length;
              setModalFaculty(filteredFaculty[nextIndex]);
            }}
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full shadow-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition z-50"
          >
            <FaChevronRight size={22} className="text-gray-700 dark:text-white" />
          </button>
        </>
      )}
    </div>
  );
};

export default Faculty;
