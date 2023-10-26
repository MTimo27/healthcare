import Team from './Team';
import Header from '../../components/Header';
import About from './About';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
