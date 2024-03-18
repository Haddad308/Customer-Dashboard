import Facilitties from "../Dashboard/Facilitties"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import test3 from "../../assets/fa60f4784fc700982548e2679937a694.jpeg"

import { useContext } from "react";
import { sideBarOpen } from "../../contexts/SideBarOpen";
import AvailableTime from "../Dashboard/AvailableTime";
import Features from "../Dashboard/Features";
import CardDescription from "../Dashboard/CardDescription";
import { Link } from "react-router-dom";
const RoomsCards = () => {
    const [sidebarOpens,] = useContext(sideBarOpen);
    const list = [
        {
            title: "Orange",
            img: test3,
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: test3,
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: test3,
            price: "$10.00",
        }
    ];
    return (
        <div className={`gap-3 grid grid-cols-2  ${sidebarOpens ? "sm:grid-cols-3" : "sm:grid-cols-4"} `}>
            {list.map((item, index) => (
                <Card shadow="sm" key={index} isPressable >
                    <Link to={"/item"} >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
                            <div className="flex justify-between  w-full" >
                                <b>{item.title}</b>
                                <p className="text-default-500 flex  items-center gap-3">
                                    <p>
                                        Facilities:
                                    </p>
                                    <Facilitties />
                                </p>
                            </div>
                            <CardDescription />                           <AvailableTime />
                            <Features />
                        </CardFooter>
                    </Link>
                </Card>

            ))}
        </div>
    )
}

export default RoomsCards
