import Image01 from '@/assets/images/grid01.png';
import Image02 from '@/assets/images/grid02.png';
import Image03 from '@/assets/images/grid03.png';
import Image04 from '@/assets/images/grid04.png';


interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    salePrice?: number;
    image: string;
    tag?: 'SALE' | 'HOT';
}

const products: Product[] = [
    { id: 1, name: 'Adicolor Classics Joggers', category: 'Dress', price: 63.85, image: Image01 },
    { id: 2, name: 'Nike Sportswear Futura Luxe', category: 'Bag', price: 130.00, image: Image02 },
    { id: 3, name: 'Geometric Print Scarf', category: 'Scarf', price: 53.00, image: Image03 },
    { id: 4, name: 'Yellow Reserved Hoodie', category: 'Dress', price: 364.00, salePrice: 155.00, image: Image04 },
    // { id: 5, name: 'Basic Dress Green', category: 'Dress', price: 236.00, image: Image05 },
    // { id: 6, name: 'Nike Air Zoom Pegasus', category: 'Shoes', price: 198.00, salePrice: 130.00, image: Image06, },
    // { id: 7, name: 'Nike Repel Miler', category: 'Jacket', price: 120.50, image: Image07 },
    // { id: 8, name: 'Nike Sportswear Futura Luxe', category: 'Glasses', price: 160.00, image: Image08 },
];
const BestSeller: React.FC = () => {
    return (
        <div className="container px-4">
            <h1 className="text-3xl font-bold text-center my-4">Best Sellers</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div className="space-x-4 mb-4 sm:mb-0">
                    <button className="font-medium">All Products</button>
                    <button className="text-gray-500">T-Shirt</button>
                    <button className="text-gray-500">Hoodies</button>
                    <button className="text-gray-500">Jacket</button>
                </div>
                <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded">
                    <span>Show all</span>
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[200px] sm:h-[400px] object-cover"
                                width={312}
                                height={400}
                            />
                            {product.tag && (
                                <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold uppercase rounded ${product.tag === 'SALE' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-gray-800'}`}>
                                    {product.tag}
                                </span>
                            )}
                        </div>
                        <div className="p-2 sm:p-4">
                            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-xs sm:text-base mb-1 sm:mb-2">{product.category}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-sm sm:text-lg">${product.salePrice ?? product.price}</span>
                                {product.salePrice && (
                                    <span className="text-gray-500 line-through text-xs sm:text-base">${product.price}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSeller;