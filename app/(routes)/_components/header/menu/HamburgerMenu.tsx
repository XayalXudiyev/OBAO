"use client"

const HamburgerMenu = ({ isOpen, OnClick }: { isOpen: boolean, OnClick: any }) => {

    return (
        <div
            onClick={OnClick}
            className='relative h-[30px] w-[30px] '>
            <span
                className={`block absolute w-[30px] h-[2px] bg-[#D2B48C] rounded-md transition-all duration-500 ease-in-out ${isOpen ? 'transform rotate-45 top-3.5' : 'top-[4px]'
                    }`}
            ></span>
            <span
                className={`block absolute w-[30px] h-[2px] bg-[#D2B48C] rounded-md transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 w-0' : 'top-1/2'
                    }`}
            ></span>
            <span
                className={`block absolute w-[30px] h-[2px] bg-[#D2B48C] rounded-md transition-all duration-500 ease-in-out ${isOpen ? 'transform -rotate-45 top-3.5 ' : 'bottom-[4px]'
                    }`}
            ></span>
        </div>
    );
};

export default HamburgerMenu;
