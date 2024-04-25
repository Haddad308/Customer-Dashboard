/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { FaBuilding } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import CardDescription from "../Dashboard/CardDescription";
import { useContext } from "react";
import { sideBarOpen } from "../../contexts/SideBarOpen";
import { Link } from "react-router-dom";

const NewsCards = ({ news }) => {
    const [sidebarOpens,] = useContext(sideBarOpen)


    return (
        <div className={`gap-3 grid grid-cols-2  ${sidebarOpens ? "sm:grid-cols-3" : "sm:grid-cols-4"} `}>
            {news?.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <Link to={`/news/${item.id}`} >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-fill h-[140px]"
                                src={item && item.image[0] ? `http://highnox.site${item.image[0]}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
                            />
                        </CardBody>
                        <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
                            <div className="flex justify-between  w-full" >
                                <b>{item.title}</b>
                            </div>
                            <CardDescription text={item.description} />
                            <div className="flex gap-2 self-center justify-between  w-full " >
                                <div className="flex items-center gap-1" >
                                    <FaBuilding />
                                    <p>Odenplan</p>
                                </div>
                                <div className="flex items-center  gap-1" >
                                    <IoBag />
                                    <p>10.000/Man</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Link>
                </Card>
            ))}
        </div>
    )
}

export default NewsCards
