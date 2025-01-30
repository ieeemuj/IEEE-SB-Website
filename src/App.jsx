import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Events from "./components/Events";
// import Testimonials from "./components/Testimonials";
import Achievements from "./components/Achievements";
// import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import Societies from "./components/Societies";
import Contact from "./components/Contact";
import Bento from "./components/home/Bento";

const Home = () => (
  <>
    <Hero />
    <About />
    <div className="h-16"></div>
    <Bento />
    <div className="h-12"></div>
    {/*<Events />
    <Testimonials />
    <BlogPosts />
    <Achievements /> */}
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-[#151515] min-h-screen">
        <div className="flex flex-col ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={
              <div className="pt-20">
                <Events />
              </div>
            }
          />
          <Route
            path="/blog"
            element={<div className="pt-20">Blog Page</div>}
          />
          <Route
            path="/societies"
            element={
              <div className="pt-20">
                <Societies />
              </div>
            }
          />
          <Route
            path="/achievements"
            element={
              <div className="pt-20">
                <Achievements />
              </div>
            }
          />
          <Route
            path="/team"
            element={<div className="pt-20">Team Page</div>}
          />
          {/* Update the Contact route to use the Contact component */}
          <Route
            path="/contact"
            element={
              <div className="pt-20">
                <Contact />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
