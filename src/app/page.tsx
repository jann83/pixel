import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Technologies from '../components/Technologies.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services />
      <Technologies />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
