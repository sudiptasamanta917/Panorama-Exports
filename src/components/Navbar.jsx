import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

import firstImg from "../assets/images/first.jpg";
import secondImg from "../assets/images/first.jpg";
import thirdImg from "../assets/images/first.jpg";
import fourthImg from "../assets/images/first.jpg";
import fifthImg from "../assets/images/first.jpg";
import sixthImg from "../assets/images/first.jpg";

export default function Navbar() {
    const navItems = [
        {
            label: "OUR STORY",
            path: "",
            subItems: [
                {
                    label: "Roots Of Excellence",
                    path: "/ourstory/excellenceroots",
                    image: firstImg,
                },
                {
                    label: "Strategic Outlook",
                    path: "/ourstory/strategicoutlook",
                    image: secondImg,
                },
                {
                    label: "Core Values",
                    path: "/ourstory/corevalues",
                    image: thirdImg,
                },
                {
                    label: "Leadership",
                    path: "/ourstory/leadership",
                    image: fourthImg,
                },
                {
                    label: "Milestones",
                    path: "/ourstory/milestones",
                    image: fifthImg,
                },
                {
                    label: "Our Purpose",
                    path: "/ourstory/ourpurpose",
                    image: sixthImg,
                },
            ],
        },
        {
            label: "CRAFTED PRECISION",
            path: "",
            subItems: [
                {
                    label: "Mfg. Excellence",
                    path: "/craftedprecision/manufacturingexcellence",
                    image: firstImg,
                },
                {
                    label: "Smart Warehousing",
                    path: "/craftedprecision/smartwarehousing",
                    image: secondImg,
                },
                {
                    label: "Art in Every Thread",
                    path: "/craftedprecision/artthread",
                    image: thirdImg,
                },
                {
                    label: "Exacting Standards",
                    path: "/craftedprecision/exactingstandards",
                    image: fourthImg,
                },
                {
                    label: "Sustainable Designs",
                    path: "/craftedprecision/sustainabledesigns",
                    image: fifthImg,
                },
                {
                    label: "Advanced Washing",
                    path: "/craftedprecision/advancedwashing",
                    image: sixthImg,
                },
                {
                    label: "Adaptive Capacity",
                    path: "/craftedprecision/adaptivecapacity",
                    image: sixthImg,
                },
            ],
        },
        {
            label: "INNOVATION",
            path: "",
            subItems: [
                {
                    label: "Innovation that Leads",
                    path: "/innovation/innovationleads",
                    image: firstImg,
                },
                {
                    label: "Standard Of Perfection",
                    path: "/innovation/standardperfection",
                    image: secondImg,
                },
                {
                    label: "Handcrafted Luxury",
                    path: "/innovation/handcraftedluxury",
                    image: thirdImg,
                },
            ],
        },
        {
            label: "PRODUCTS",
            path: "",
        },
        {
            label: "PEOPLE",
            path: "",
        },
        {
            label: "RESPONSIBILITY",
            path: "",
        },
        {
            label: "MEDIA",
            path: "",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                scrolled ? "bg-white" : "bg-transparent backdrop-blur-md"
            } shadow-md 2xl:h-24 sm:h-20 max-h-20 fixed top-0 left-0 right-0 z-50 transition-colors duration-500`}
        >
            <div className=" mx-auto xl:px-4 px-2 2xl:h-24 sm:h-20 max-h-20 flex items-center justify-end xl:gap-3 gap-2">
                {/* Logo */}
                {/* <Link
                    to="/"
                    className="flex items-center h-full justify-center 2xl:w-[30%] xl:w-[20%] w-[15%]"
                >
                    <img
                        src="/panoramalogo.jpg"
                        alt="Panorama Exports Logo"
                        className="2xl:h-24 sm:h-20 max-h-20 w-auto object-contain"
                    />
                </Link> */}

                {/* Navigation Links */}
                <ul className="2xl:w-[62%] xl:w-[70%] w-[80%] hidden lg:flex xl:gap-8 gap-6 justify-end items-center relative text-white 2xl:text-base text-sm mr-5">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <Link
                                to={item.path}
                                className={`${
                                    scrolled
                                        ? "text-[#073281] hover:text-[#073281]"
                                        : "text-white hover:text-red-300"
                                } transition-colors duration-500 font-medium hover:underline underline-offset-4`}
                            >
                                {item.label}
                            </Link>

                            {item.subItems && (
                                <ul className="absolute left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col shadow-lg rounded-sm text-base z-10 w-[220px]">
                                    <div
                                        className={`flex justify-center xl:text-2xl text-lg ${
                                            scrolled
                                                ? "text-[#073281] hover:text-[#073281]"
                                                : "text-white hover:text-red-300"
                                        } transition-colors duration-500`}
                                    >
                                        <IoMdArrowDropdown />
                                    </div>
                                    <div className="bg-white rounded-sm grid grid-cols-1 border-t">
                                        {item.subItems.map(
                                            (subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="hover:bg-blue-950 hover:text-white px-2 text-black whitespace-nowrap border-b"
                                                >
                                                    <Link to={subItem.path}>
                                                        <h3 className="py-2">{subItem.label}</h3>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </div>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                {/* <div
                    className={`${
                        scrolled
                            ? "text-[#073281] hover:text-[#073281]"
                            : "text-white hover:text-red-300"
                    } transition-colors duration-500 hidden lg:flex text-white mr-5 px-2 xl:text-base text-sm font-medium hover:underline underline-offset-4`}
                >
                    MORE
                </div> */}

                <div className="flex">
                    {/* Language Switcher */}
                    {/* <div
                        className={`flex items-center space-x-2 2xl:ml-16 ml:2 xl:mr-2 ${
                            scrolled ? "text-[#073281]" : "text-white"
                        }`}
                    >
                        <button
                            className={`2xl:text-base text-sm transition-colors duration-500 ${
                                scrolled
                                    ? "text-[#073281] hover:text-[#073281]"
                                    : "hover:text-red-300"
                            }`}
                        >
                            EN
                        </button>
                        <span className="text-sm">|</span>
                        <button
                            className={`2xl:text-base text-sm transition-colors duration-500 ${
                                scrolled
                                    ? "text-[#073281] hover:text-[#073281]"
                                    : "hover:text-red-300"
                            }`}
                        >
                            HI
                        </button>
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-white hover:text-red-300 ml-10"
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black bg-opacity-80 px-4 py-6 space-y-4 text-white text-base">
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Ourstory" onClick={() => setIsOpen(false)}>
                            Our Story
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/manufacturing"
                            onClick={() => setIsOpen(false)}
                        >
                            Manufacturing
                        </Link>
                    </li>
                    <li>
                        <Link to="/people" onClick={() => setIsOpen(false)}>
                            People
                        </Link>
                    </li>
                    <li>
                        <Link to="/innovation" onClick={() => setIsOpen(false)}>
                            Innovation
                        </Link>
                    </li>
                    <li>
                        <Link to="/media" onClick={() => setIsOpen(false)}>
                            Media
                        </Link>
                    </li>
                    <li className="flex space-x-4 pt-2">
                        <button className="hover:text-red-300">EN</button>
                        <span>|</span>
                        <button className="hover:text-red-300">HI</button>
                    </li>
                </ul>
            )}
        </nav>
    );
}
