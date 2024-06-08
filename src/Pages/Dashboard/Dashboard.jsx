
import Board from "../../Components/Dashboard/Board"
import MeetingRooms from "../../Components/Dashboard/MeetingRooms"
import OfficeRooms from "../../Components/Dashboard/OfficeRooms"
import News from "../../Components/Dashboard/News"
import BookingTable from "../../Components/Tables/BookingTable"
import { getBookings, getEvents } from "./handlers"
import { useContext, useEffect, useState } from "react"
import { Toaster } from "react-hot-toast";
import { tokenContext } from "../../contexts/AuthProvidor"



const Dashboard = () => {

    const token = useContext(tokenContext);

    const [bookings, setBooking] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);

    const [events, setEvents] = useState([]);

    const handleDelete = () => {
        getBookings(setBooking, SetIsLoading, "", token);
    };

    useEffect(() => {
        getBookings(setBooking, SetIsLoading, "", token);
        getEvents(setEvents, token)
    }, [token])

    return (
        <>
            <Toaster />
            <div className="flex flex-col gap-5 p-5" >
                <div>
                    <h2 className="text-[#2499E3] font-semibold text-lg mb-2 " >Today&apos;s bookings</h2>
                    <BookingTable data={bookings} isLoading={isLoading} handleDelete={handleDelete} />
                </div>
                <Board events={events.slice(0, 2)} />
                <MeetingRooms />
                <OfficeRooms />
                <News />
            </div>
        </>


    )
}

export default Dashboard
