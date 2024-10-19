import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaCcVisa, FaCcPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container px-4">
                {/* Newsletter Section */}
                <div className="bg-black text-white p-10 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 w-full md:w-auto rounded-full outline-none text-black"
                        />
                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12 text-gray-700">
                    {/* Shop Information */}
                    <div>
                        <h3 className="text-lg font-bold">SHOP.CO</h3>
                        <p className="mt-4">
                            We have clothes that suit your style and which you’re proud to wear. From women to men.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <FaPinterest className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-bold">COMPANY</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <h3 className="text-lg font-bold">HELP</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Delivery Details</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* FAQ Links */}
                    <div>
                        <h3 className="text-lg font-bold">FAQ</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Manage Deliveries</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Payments</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-lg font-bold">RESOURCES</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#">Free eBooks</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How-to Blog</a></li>
                            <li><a href="#">YouTube Playlist</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <FaCcVisa className="w-10 h-6" />
                        <FaCcPaypal className="w-10 h-6" />
                        <FaApplePay className="w-10 h-6" />
                        <FaGooglePay className="w-10 h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
