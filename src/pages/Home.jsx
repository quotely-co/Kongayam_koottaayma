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
                <Gallery />
            </section>
        </div>
    );
};

export default Home;
