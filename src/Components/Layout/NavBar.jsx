/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const NavBar = ({ toggleSidebar }) => {

    const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
    const location = useLocation();
    let { pathname } = location;
    pathname = pathname.slice(1);
    pathname = pathname ? pathname : "Dashboard";

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className={`bg-white transition-all duration-300  h-[81.5px] flex items-center justify-between `}  >
            <div className="flex w-12" >
                <button className=" " onClick={toggleSidebar} >
                    <IoMenu size={35} className="ms-4  transition-all duration-300 hover:text-[#0070F0]" />
                </button>
                <h3 className="ms-5 text-2xl font-semibold mb-1" > {pathname} </h3>
            </div>
            <div className="ms-24">
                <Link to={"/calendar"} className="flex items-center bg-primary px-3 py-2 hover:bg-primary-600   text-white  transition duration-75 rounded-xl shadow-md  group" >
                        <FaPlus className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                        <span className="flex-1 whitespace-nowrap text-lg font-semibold">New Booking</span>
                </Link>
            </div>
            <div className="flex items-center gap-3 " >
                <Dropdown className="w-20 " >
                    <DropdownTrigger>
                        <Button
                            variant="light"
                            className="w-32"
                        >
                            {selectedLanguage}
                            <IoIosArrowDown />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Example with disabled actions">
                        <DropdownItem onClick={() => handleLanguageChange("English (US)")} selected={selectedLanguage === "English (US)"}>
                            English (US)
                        </DropdownItem>
                        <DropdownItem onClick={() => handleLanguageChange("Swedish")} selected={selectedLanguage === "Swedish"}>
                            Swedish
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Avatar className="me-3" radius="lg" size="lg" color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </div>
        </div>
    );
};

export default NavBar;
