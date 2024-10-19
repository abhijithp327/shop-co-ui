

import Image01 from '@/assets/images/po1.png';
import Image02 from '@/assets/images/po2.png';
import Image03 from '@/assets/images/po3.png';
import Image04 from '@/assets/images/po4.png';
import Image05 from '@/assets/images/po5.png';

const PopularStyles = () => {
    return (
        <div className="container p-5">
            <h2 className="text-2xl font-bold mb-8 text-center"> EXPLORE NEW AND POPULAR STYLES</h2>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left column */}
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 relative">
                        <img src={Image01} alt="Fashion model" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 bg-white p-2 text-sm">
                            Brown wrap dress
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="relative">
                        <img src={Image02} alt="Men's outfit" className="w-full h-full object-cover" />
                        <div className="absolute top-0 right-0 bg-black text-white p-1 text-xs">
                            SALE
                        </div>
                    </div>
                    <div>
                        <img src={Image03} alt="Women's cardigan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={Image04} alt="Floral dress" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={Image05} alt="Men's sweater" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularStyles;
