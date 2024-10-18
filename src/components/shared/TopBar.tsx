import React from 'react';

const TopBar = () => {

    const [isVisible, setIsVisible] = React.useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="bg-black text-white text-center py-2 text-sm relative">
            <span>
                Sign up and get 20% off your first order.{' '}
                <a href="#" className="underline">
                    Sign Up Now
                </a>
            </span>
            <button
                onClick={handleClose}
                className="absolute top-0 right-0 p-2 text-white"
                aria-label="Close"
            >
                &#10005;
            </button>
        </div>
    )
};

export default TopBar;