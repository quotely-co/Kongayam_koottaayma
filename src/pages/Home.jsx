import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Gallery Preview */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Impact</h2>
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
