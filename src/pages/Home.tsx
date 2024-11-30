import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import ProductsSection from "../components/home/ProductsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import FaqSection from "../components/home/FaqSection";
import PartnersSlider from "../components/home/PartnersSlider";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ProjectsSection />
      <FaqSection />
      <PartnersSlider />
    </main>
  );
};

export default Home;
