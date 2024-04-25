/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbFileInvoice } from "react-icons/tb";
import { BsInfoCircle } from "react-icons/bs";
import { LuCalendarDays, LuLayoutDashboard } from "react-icons/lu";

import { MdOutlineEmail } from "react-icons/md";
import { LogOut } from "../logOut";

const SideBar = ({ sidebarOpen }) => {
    return (
        <div id="SideBar" className={`bg-[#248ED0]  transition-all duration-300 ${sidebarOpen ? "w-[350px] " : "w-0 "} h-screen relative`}  >
            {/* !Play here */}
            <header className={` bg-[#2076ab] h-[80px] flex flex-col  justify-center     text-2xl font-bold ${sidebarOpen ? "px-5 " : "px-0"}    `}  >
                <h1 className={`text-white flex gap-2 transition-all duration-400  relative ${sidebarOpen ? " delay-100 left-0" : "left-[-300px]"}`}   >
                    <MdOutlineMapsHomeWork size={35} />
                    Co-Working Ltd
                </h1>
            </header>
            <div className={`  ${sidebarOpen ? "" : "hidden"}`}>
                <div className="w-full bg-gray-300 h-[1.5px] " ></div>
                <ul className="my-2 font-medium">

                    <li>
                        <Link to={"/"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <LuLayoutDashboard className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Bookings"} className="flex items-center p-2 mx-3 mb-1  text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <HiOutlineShoppingCart className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">My Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Calendar"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <LuCalendarDays className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">Booking Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Invoices"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <TbFileInvoice className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">My Invoices</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Info"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <BsInfoCircle className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">My Information</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/News"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <IoNewspaperOutline className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">News</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/FAQ"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <FaQuestion className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">FAQ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/ContactUs"} className="flex items-center p-2 mx-3 mb-1 text-white rounded-lg transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                            <MdOutlineEmail className="flex-shrink-0 w-6 h-6 text-white transition duration-75  " />
                            <span className="flex-1 ms-3 whitespace-nowrap text-lg">Contact Us</span>
                        </Link>
                    </li>
                    <LogOut />
                </ul>
            </div>
        </div>
    )
}

export default SideBar
