import BestSeller from './shared/BestSeller';
import BrandListing from './shared/Brands';
import BrandSection from './shared/BrandSection';
import BrowseStyle from './shared/BrowseStyle';
import Feedback from './shared/Feedback';
import HeroSection from './shared/HeroSection';
import ImageShowcase from './shared/ImageShowCase';
import InstagramFeeds from './shared/InstaFeeds';
import Navbar from './shared/Navbar';
import NewArrivals from './shared/NewArrivals';
import PopularStyles from './shared/PopularStyles';
import ProductGrid from './shared/ProductGrid';
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
            <ProductGrid />
            <ImageShowcase />
            <BestSeller />
            <InstagramFeeds />
            <Feedback />

        </div>
    )
}

export default Home;