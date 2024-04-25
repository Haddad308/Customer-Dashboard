/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Card, CardBody } from "@nextui-org/react";
import Features from "../../Components/Dashboard/Features";
import { CardFooter, Image } from "@nextui-org/react"
import CardDescription from "../../Components/Dashboard/CardDescription";
import { useEffect, useState } from "react";
import getBooking from "./bookings.handler";
import RentalDetailsTable from "./RentalDetailsTable";
import { useNavigate } from "react-router-dom";



const NormalView = ({ data }) => {

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        setBooking(data[0]);
    }, [data])

    const navigate = useNavigate();

    return (
        <div className=" h-screen overflow-y-scroll overflow-x-hidden grid grid-cols-6 gap-4 " >
            <div className=" col-span-2  flex flex-col gap-4 "  >
                {data.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onClick={() => { getBooking(setBooking, item.id) }} >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item && item.room_info ? `http://highnox.site${item.room_info[0]?.image}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
                            />
                        </CardBody>
                        <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
                            <div className="flex flex-col  items-start   w-full" >
                                <b>Booking ID: {item.name}</b>
                            </div>
                            <CardDescription text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, impedit."} />
                            <Features
                                building={item.building}
                                floor={item.room_info && item.room_info.length > 0 ? item.room_info[0].floor : null}
                                users={item.room_info && item.room_info.length > 0 ? item.room_info[0].participant : null}
                                price={item.room_info && item.room_info.length > 0 ? item.room_info[0].room_price : null}
                            />
                            </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="col-span-4 bg-white rounded-lg  p-3 mx-2 pt-5   " >
                <div className="flex justify-between mx-2 " >
                    <h1 className="font-semibold text-2xl">{booking?.name}</h1>
                    <div>
                        <Features
                            building={booking?.building}
                            floor={booking?.room_info && booking?.room_info.length > 0 ? booking.room_info[0].floor : null}
                            users={booking?.room_info && booking?.room_info.length > 0 ? booking.room_info[0].participant : null}
                            price={booking?.room_info && booking?.room_info.length > 0 ? booking.room_info[0].room_price : null}
                        />
                    </div>
                </div>
                <img
                    src={booking && booking.room_info ? `http://highnox.site${booking.room_info[0]?.image}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
                    alt="test"
                    className="rounded-lg border-2 w-4/5 object-center" />
                <div className="py-3" >
                    <h1 className="font-semibold text-2xl"> Room description</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam suscipit debitis possimus. Suscipit, consequuntur delectus recusandae mollitia tempore atque</p>
                </div>
                <hr className="py-2" />
                <div>
                    <h1 className="font-semibold text-xl pb-3 "> Rental details</h1>
                    <RentalDetailsTable rooms={booking?.room_info} foods={booking?.food_info} />
                </div>
                <div className="flex justify-center mt-4">

                <Button color="primary" onClick={()=>navigate(`/booking/${booking.id}`)} >
                    View More 
                </Button>
                </div>
            </div>
        </div>
    )
}

export default NormalView
