import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./pages/Events";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import Societies from "./pages/Societies";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PreEventPage from "./pages/PreEventPage";
import PostEventPage from "./pages/PostEventPage";
import Team from "./pages/Team";
import WebsiteTeam from "./pages/WebsiteTeam";
import AnnualReport from "./pages/AnnualReport";
import Faculty from "./pages/Faculty";
import ResponsiveGallery from "./components/ResponsiveGallery";
import SwipeCards from "./components/SwipeCards";
import AchievementsPage from "./pages/AchievementsPage";

const Home = () => (
  <>
    <Hero />
    <About />
    <ResponsiveGallery />
    <SwipeCards />
    <Achievements />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Navbar stays fixed */}
      <Navbar />

      {/* GLOBAL OFFSET FIX */}
      <main className="pt-16 md:pt-20 min-h-screen bg-white dark:bg-ieee-dark transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/pre/:id" element={<PreEventPage />} />
          <Route path="/events/post/:id" element={<PostEventPage />} />
          <Route path="/annual-report" element={<AnnualReport />} />
          <Route path="/societies" element={<Societies />} />
          <Route path="/website-team" element={<WebsiteTeam />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
