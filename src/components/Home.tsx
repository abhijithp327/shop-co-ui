import BrandListing from './shared/Brands';
import BrandSection from './shared/BrandSection';
import BrowseStyle from './shared/BrowseStyle';
import HeroSection from './shared/HeroSection';
import Navbar from './shared/Navbar';
import NewArrivals from './shared/NewArrivals';
import PopularStyles from './shared/PopularStyles';
import TopBar from './shared/TopBar';
import TopSelling from './shared/TopSelling';

const Home = () => {
    return (
        <div className="bg-gray-100">

            <TopBar />
            <Navbar />
            <HeroSection />
            <BrandSection />
            <TopSelling />
            <NewArrivals />
            <BrowseStyle />
            <BrandListing />
            <PopularStyles />

        </div>
    )
}

export default Home;