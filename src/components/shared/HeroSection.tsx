import CountUp from 'react-countup';
import HeroImage from "@/assets/images/hero.png";


const HeroSection = () => {
    return (
        <section className="hero bg-[#F2F0F1] relative">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center md:text-left md:w-1/2 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Find Clothes That Matches Your Style
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                            Shop Now
                        </button>
                        <button className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100">
                            View Collection
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-12 flex flex-wrap md:flex-nowrap justify-center md:justify-start text-center gap-y-8">
                        <div className="w-1/2 md:w-fit pr-6 border-r border-gray-300">
                            <h2 className="text-2xl font-bold">
                                <CountUp end={200} duration={3} />+
                            </h2>
                            <p className="text-gray-600">International Brands</p>
                        </div>
                        <div className="w-1/2 md:w-fit px-6 md:border-r border-gray-300">
                            <h2 className="text-2xl font-bold">
                            <CountUp end={2000} duration={3} />+
                                </h2>
                            <p className="text-gray-600">High-Quality Products</p>
                        </div>
                        <div className="w-1/2 md:w-fit pl-6">
                            <h2 className="text-2xl font-bold">
                            <CountUp end={30000} duration={3} />+
                            </h2>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center md:justify-end mt-10 md:mt-0 relative z-10">
                    <img
                        src={HeroImage}
                        alt="Fashion Models"
                        className="w-3/4 md:w-full object-cover"
                    />
                </div>

            </div>

        </section>
    );
};

export default HeroSection;

