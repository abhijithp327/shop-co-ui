
import BrandImg01 from '../../assets/images/zara.png';
import BrandImg02 from '../../assets/images/Vector.png';
import BrandImg03 from '../../assets/images/Group.png';

const BrandSection = () => {
    return (
        <section className="bg-black py-8">
            <div className="container mx-auto px-4">
                {/* Brand Grid */}
                <div className="flex justify-center gap-5 items-center space-x-6 md:space-x-12">
                    {/* Brand Logo */}
                    <div className="brand-logo">
                        <img
                            src={BrandImg01}
                            alt="Zara Logo"
                            className="h-[35px] w-full"
                        />
                    </div>
                    <div className="brand-logo">
                        <img
                            src={BrandImg02}
                            alt="Gucci Logo"
                            className="h-[35px] w-full"
                        />
                    </div>
                    <div className="brand-logo">
                        <img
                            src={BrandImg03}
                            alt="Prada Logo"
                            className="h-[35px] w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;
