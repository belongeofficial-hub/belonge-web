import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Categories />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
