/* eslint-disable react/prop-types */
import Facilitties from "../Dashboard/Facilitties"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"

import { useContext } from "react";
import { sideBarOpen } from "../../contexts/SideBarOpen";
import AvailableTime from "../Dashboard/AvailableTime";
import Features from "../Dashboard/Features";
import CardDescription from "../Dashboard/CardDescription";
import { Link } from "react-router-dom";

const RoomsCards = ({ meetingRooms }) => {
    const [sidebarOpens,] = useContext(sideBarOpen);
    

    return (
        <div className={`gap-3 grid grid-cols-2  ${sidebarOpens ? "sm:grid-cols-3" : "sm:grid-cols-4"} `}>
            {meetingRooms?.map((item, index) => (
                <Card shadow="sm" key={index} isPressable >
                    <Link to={`/room/${item.id}`} >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.name}
                                className="w-full object-fill h-[140px]"
                                src={item && item.image ? `http://highnox.site${item.image}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
                            />
                        </CardBody>
                        <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
                            <div className="flex justify-between  w-full" >
                                <b>{item.name}</b>
                                <p className="text-default-500 flex  items-center gap-3">
                                    <p>
                                        Facilities:
                                    </p>
                                    <Facilitties />
                                </p>
                            </div>
                            <CardDescription text={"lorem lorem lorem loremlorem loremlorem loremlorem lorem"} />
                            <AvailableTime />
                            <Features />
                        </CardFooter>
                    </Link>
                </Card>
            ))}
        </div>
    )
}

export default RoomsCards
