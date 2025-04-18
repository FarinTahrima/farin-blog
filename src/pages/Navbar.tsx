import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

  type MenuOptions = {
    text: string;
    link: string;
  }

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const myMenuOptions: MenuOptions[] = [
        { text: "My Skills" , link: "/skills" },
        { text: "My Projects" , link: "/projects" },
        { text: "Download Resume" , link: "/download-resume" },
    ];
    
    return (
        <div>
            <nav className="bg-my_dark_purple border-gray-200">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <Link to={"/"} className="logo-txt text-3xl text-white hover:text-my_pink">
                        <p>Farin's</p>
                        <p>Blog</p>
                    </Link>

                    {/* Navbar content button for mobile */}
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-purple-300 focus:outline-none"
                        onClick={() => setShowMobileMenu(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    
                    {/* Navbar Links */}
                    <div className="hidden w-full md:block md:w-auto text-white text-xl font-family-[Alexandria]" id="navbar-dropdown">
                            <ul className="flex flex-wrap items-center justify-between font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                                {myMenuOptions.map((item, key) => (
                                    <li key={key}>
                                            <Link to={item.link} className="block py-2 px-3 rounded-sm hover:text-my_pink md:hover:bg-transparent md:border-0 md:p-0">
                                                {item.text}
                                            </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                {showMobileMenu &&
                    <div className="md:hidden relative flex flex-col bg-white shadow-sm border border-slate-200 text-xl">
                        <nav className="flex min-w-[240px] flex-col">
                            {myMenuOptions.map((item, key) => (
                                <Link
                                    key={key}
                                    to={item.link}
                                    className="odd:bg-my_pink even:bg-my_light_purple font-family-[Alexandria] font-bold text-my_dark_blue p-8 flex w-full items-center p-3 transition-all"
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </nav>
                    </div>
                }
            </nav>
            <Outlet />
        </div>
    );
}

export default Navbar;
