import { Avatar, Button, Chip } from "@nextui-org/react"
import { IoPrint } from "react-icons/io5";
import test from "../assets/a7535bed2bdafa25bf2a255d2a9b9389.jpeg"
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import getBooking from "./Bookings/bookings.handler";
import RentalDetailsTable from "./Bookings/RentalDetailsTable";
import { tokenContext } from "../contexts/AuthProvidor";
import { useLang } from "../hooks/uselang";


const Booking = () => {

    const token = useContext(tokenContext);
    const lang = useLang();

    const location = useLocation();
    let { pathname } = location;
    const id = parseInt(pathname.slice(pathname.lastIndexOf("/") + 1));

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        getBooking(setBooking, id, token, lang)
    }, [id, token, lang])


    return (
        <div className='p-5' >
            <div className="bg-white flex justify-between p-2 items-center rounded-2xl" >
                <div className="flex gap-2" >
                    <Button variant="solid" color="primary" className="rounded-full" >
                        Confirm
                    </Button>
                    <Button variant="ghost" color="danger" className="rounded-full">
                        Cancel
                    </Button>
                </div>
                <div className="flex gap-4" >
                    {/* <Chip color="warning" variant="flat">Draft</Chip> */}
                    <div className="flex items-center gap-1 hover:text-primary transition-colors duration-300 cursor-pointer" >
                        <IoPrint />
                        <p>Print</p>
                    </div>
                    <Chip color="success" variant="flat">Completed</Chip>

                </div>
            </div>
            <div className="bg-white rounded-2xl py-3 px-5 mt-4" >
                <h1 className="font-semibold text-2xl text-primary">Booking ID: {booking?.name}</h1>
                <div className="grid grid-cols-2 pt-4" >
                    <div className="flex flex-col gap-2" >
                        <p className="text-gray-500" >Building: <span className="text-gray-400" >{booking?.building}</span> </p>
                        <p className="text-gray-500" >Start Date: <span className="text-gray-400" >{booking?.start_date}</span> </p>
                        <p className="text-gray-500" >End Date: <span className="text-gray-400" >{booking?.end_date}</span> </p>
                        <p className="text-gray-500" >Customer Name: <span className="text-gray-400" >{booking?.customer}</span> </p>
                        <p className="text-gray-500" >City: <span className="text-gray-400" >{booking?.city}</span> </p>
                    </div>
                    <div className="flex flex-col gap-2" >
                        <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking?.payment_method}</span> </p>
                        <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking?.room_info?.name}</span> </p>
                        <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking?.building}</span> </p>
                        <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking?.building}</span> </p>
                        <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking?.building}</span> </p>
                    </div>
                </div>
                <div className="pe-5 py-4" >
                    <h1 className="font-semibold text-2xl text-primary pb-3" >Booking Details</h1>
                    <RentalDetailsTable rooms={booking?.room_info} foods={booking?.food_info} />
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-16 pt-3 mt-5" >
                    <div>
                        <div >
                            <h1 className="font-semibold" >Room Details</h1>
                            <hr />
                            <div className="px-3 py-2 mt-4 border-2 rounded-lg " >
                                This room will give the amazing view to the beach of Strandvaegen and will have etc etc etc
                            </div>
                        </div>
                        <div className="mt-5" >
                            <h1 className="font-semibold  " >Room Details</h1>
                            <hr />
                            <div className="flex flex-col gap-2 mt-4" >
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-1" >
                            <h1 className="font-semibold  " >Room Details</h1>
                            <hr />
                            <div className="flex flex-col gap-2 mt-4" >
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                                <p className="text-gray-500" >Full Name: <span className="text-gray-400" >{booking.building}</span> </p>
                            </div>
                        </div>
                        <div className="mt-4" >
                            <h1 className="font-semibold  " >Room Details</h1>
                            <hr />
                            <div className="grid grid-cols-4  gap-2 mt-4" >
                                <Avatar radius="sm" className="w-30 h-20 text-large" src={test} />
                                <Avatar radius="sm" className="w-30 h-20 text-large" src={test} />
                                <Avatar radius="sm" className="w-30 h-20 text-large" src={test} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pe-5 py-4" >
                    <h1 className="font-semibold text-2xl text-primary pb-3" >Extra Options</h1>

                </div>

            </div>
        </div>
    )
}

export default Booking
