import { Tabs, Tab } from "@nextui-org/react";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Views from "./Views";
import { getBookings } from "../Dashboard/handlers";
import { Toaster } from "react-hot-toast";
import { tokenContext } from "../../contexts/AuthProvidor";
import { useLang } from "../../hooks/uselang";


const Bookings = () => {

    const [selectedView, setSelectedView] = useState("normal");
    const [isLoading, SetIsLoading] = useState(false);
    const token = useContext(tokenContext);
    const lang = useLang();

    const [active, setActive] = useState([])
    const [past, setPast] = useState([])
    const [cancelled, setCancelled] = useState([])

    useEffect(() => {
        getBookings(setActive, SetIsLoading, "canceled", token, lang);
        getBookings(setPast, SetIsLoading, "pending", token, lang);
        getBookings(setCancelled, SetIsLoading, "", token, lang);
    }, [selectedView, token, lang])

    const handleDelete = () => {
        getBookings(setActive, SetIsLoading, "canceled", token, lang);
        getBookings(setPast, SetIsLoading, "pending", token, lang);
        getBookings(setCancelled, SetIsLoading, "", token, lang);
    };

    return (
        <>
            <Toaster />
            <div className="p-5" >
                <div className="flex w-full flex-col relative">
                    <Tabs aria-label="Options" color="primary" variant="light" className="bg-white mx-1 p-2 rounded-lg">
                        <Tab key="Active" title="Active" >
                            <Views selectedView={selectedView} data={active} isLoading={isLoading} handleDelete={handleDelete} />
                        </Tab>
                        <Tab key="Past" title="Past" >
                            <Views selectedView={selectedView} data={past} isLoading={isLoading} handleDelete={handleDelete} />
                        </Tab>
                        <Tab key="Cancelled" title="Cancelled" >
                            <Views selectedView={selectedView} data={cancelled} isLoading={isLoading} handleDelete={handleDelete} />
                        </Tab>
                    </Tabs>
                    <div className="absolute right-9 top-5 flex gap-3   ">
                        <IoFileTrayStackedSharp onClick={() => {
                            setSelectedView("normal")
                        }} className={`hover:text-[#248ED0] ${selectedView == "normal" ? "text-[#248ED0]" : ""} transition-colors duration-300 cursor-pointer`} />
                        <FaTableList onClick={() => {
                            setSelectedView("table")
                        }} className={`hover:text-[#248ED0] ${selectedView == "table" ? "text-[#248ED0]" : ""} transition-colors duration-300 cursor-pointer `} />
                        <Link to={"/calendar"}>
                            <FaCalendar className="hover:text-[#248ED0] transition-colors duration-300 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookings
