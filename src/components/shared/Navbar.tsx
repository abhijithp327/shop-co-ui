import React from 'react';
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isShopDropdownOpen, setIsShopDropdownOpen] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = React.useState(false);

    // Toggle the shop dropdown menu
    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(!isShopDropdownOpen);
    };

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle the mobile search input
    const toggleSearchInput = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Toggle the profile dropdown menu
    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto flex gap-12 justify-between items-center py-4 px-4 md:px-8">

                {/* Left: Logo and Hamburger menu */}
                <div className="flex items-center space-x-4">
                    {/* Hamburger menu for mobile */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden focus:outline-none"
                    >
                        <FaBars className="h-6 w-6" />
                    </button>

                    {/* Logo */}
                    <div className="text-2xl font-bold flex items-center space-x-2">
                        <a href="/" className="text-xl">SHOP.CO</a>
                    </div>
                </div>

                {/* Middle: Navigation links for larger screens */}
                <ul className={`hidden md:flex space-x-6 font-medium relative ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <li className="relative">
                        <button
                            onClick={toggleShopDropdown}
                            className="hover:text-gray-600 flex items-center space-x-1 focus:outline-none"
                        >
                            <span>Shop</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {isShopDropdownOpen && (
                            <ul className="absolute z-50 left-0 mt-2 space-y-2 bg-white shadow-md w-48">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                        Men's Fashion
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                        Women's Fashion
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                        Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                        Shoes
                                    </a>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-2 text-sm text-white bg-black hover:bg-gray-900">
                                        Shop All Categories
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><a href="#" className="hover:text-gray-600">On Sale</a></li>
                    <li><a href="#" className="hover:text-gray-600">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-gray-600">Brands</a></li>
                </ul>

                {/* Right: Search icon, Cart, and Account Icons */}
                <div className="flex md:flex-grow items-center gap-12">
                    {/* Search input for larger screens */}
                    <div className="hidden md:block flex-grow relative">
                        <input
                            type="text"
                            className="border rounded-full w-full px-3 py-2 text-sm focus:border-gray-300"
                            placeholder="Search for products..."
                        />
                    </div>

                    <div className='flex items-center gap-4 md:gap-12'>
                        {/* Search icon for mobile */}
                        <button
                            onClick={toggleSearchInput} // Toggle the search input on mobile
                            className="md:hidden focus:outline-none"
                        >
                            <FaSearch className="h-5 w-5" />
                        </button>

                        {/* Mobile search input */}
                        {isSearchOpen && (
                            <div className="md:hidden flex-grow relative">
                                <input
                                    type="text"
                                    className="border rounded-full w-full px-3 py-2 text-sm focus:border-gray-300"
                                    placeholder="Search for products..."
                                />
                            </div>
                        )}

                        {/* Cart icon with notification */}
                        <a href="#" className="relative hover:text-gray-600">
                            <FaShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-3 h-3 text-xs text-white bg-red-500 rounded-full">
                                0
                            </span>
                        </a>

                        {/* Profile icon with dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleProfileDropdown}
                                className="hover:text-gray-600 focus:outline-none"
                            >
                                <FaUserCircle className="h-5 w-5" />
                            </button>

                            {/* Profile dropdown menu */}
                            {isProfileDropdownOpen && (
                                <ul className="absolute right-0 mt-2 space-y-2 bg-white shadow-md w-48">
                                    <li>
                                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                            View Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/logout" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-white shadow-md space-y-2 p-4">
                    <li>
                        <button
                            onClick={toggleShopDropdown}
                            className="w-full text-left flex items-center space-x-1 hover:text-gray-600"
                        >
                            <span>Shop</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        {isShopDropdownOpen && (
                            <ul className="mt-2 space-y-2 bg-white shadow-md">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Men's Fashion</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Women's Fashion</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accessories</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Shoes</a>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-2 text-white bg-black hover:bg-gray-900">
                                        Shop All Categories
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#" className="block py-2 text-gray-600 hover:bg-gray-100">On Sale</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 text-gray-600 hover:bg-gray-100">New Arrivals</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 text-gray-600 hover:bg-gray-100">Brands</a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
