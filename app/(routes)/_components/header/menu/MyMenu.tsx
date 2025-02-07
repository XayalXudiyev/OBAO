"use client";
import { useState } from "react";
import { routes } from "@/constans"
import Link from "next/link"
import HamburgerMenu from "./HamburgerMenu";

const MyMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className={`menuBtn  flex items-center justify-center w-[54px] h-[54px] cursor-pointer bg-black   duration-500 ease-in-out ${isOpen ? '-rotate-180' : ''}`}>
                <HamburgerMenu isOpen={isOpen} OnClick={toggleMenu} />
            </div>
            <div className={`menu fixed top-0 left-0 w-full h-full    ${isOpen ? 'animate-menuOpen  ' : 'animate-menuClose '}`}>
                <div className={`w-full h-full  bg-[url('/menuBg.png')] bg-center bg-[length:120%_auto]  bg-repeat-y  z-10 ${isOpen ? 'opacity-100 transition-opacity duration-1000  ' : ' opacity-0 transition-opacity duration-700 '}`}>
                    <div className="w-full min-h-screen bg-[#1C1C1C] opacity-90 flex flex-col items-center justify-center">
                        <div className={`absolute top-4 right-16 flex items-center justify-center w-[54px] h-[54px] cursor-pointer bg-black  duration-500 ease-in-out ${isOpen ? '-rotate-180' : ''}`}>
                            <HamburgerMenu isOpen={isOpen} OnClick={toggleMenu} />
                        </div>
                        <h2 className="text-base text-center tracking-widest mb-20">
                            NAVIGATION
                        </h2>
                        {routes.map((route) => (
                            <Link
                                href={route.href}
                                key={route.title}
                                className="text-white text-3xl uppercase font-avenirMedium min-h-16 tracking-tight hover:text-[#FB4444] transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {route.title}
                            </Link>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyMenu;
