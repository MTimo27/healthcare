import Team from './Team';
import Header from '../../components/Header';
import About from './About';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Header />

      <div
        id="home"
        className="scroll-mt-[50px] lg:scroll-mt-[100px]"
      >
        <Hero />
      </div>

      <div
        id="about"
        className="lg:scroll-mt-[100px]"
      >
        <About />
      </div>

      <div
        id="services"
        className="scroll-mt-[80px] lg:scroll-mt-[150px]"
      >
        <Services />
      </div>

      <div
        id="team"
        className="scroll-mt-[80px] lg:scroll-mt-[150px]"
      >
        <Team />
      </div>

      <div
        id="contact"
        className="scroll-mt-[50px] lg:scroll-mt-[100px]"
      >
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Home;
