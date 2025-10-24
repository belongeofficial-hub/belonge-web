import Header from "../components/Header";
import Hero from "../components/Hero";
import Onboarding from "../components/Onboarding";
import Categories from "../components/Categories";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BelongeHeroSlider from "../components/BelongeHeroSlider";


export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
     <BelongeHeroSlider />
       <Onboarding /> 
      <Categories />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

