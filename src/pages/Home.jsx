import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import LatestNews from "../components/LatestNews"; // Make sure to import LatestNews

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Latest News Section */}
            <LatestNews /> {/* Added LatestNews before About */}

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
