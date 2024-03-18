import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import test3 from "../../assets/fa60f4784fc700982548e2679937a694.jpeg"
import test5 from "../../assets/test5.jpeg"
import { FaBuilding } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import CardDescription from "../Dashboard/CardDescription";
import { useContext } from "react";
import { sideBarOpen } from "../../contexts/SideBarOpen";

const NewsCards = () => {
    const [sidebarOpens,] = useContext(sideBarOpen)
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
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[140px]"
                            src={test5}
                        />
                    </CardBody>
                    <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
                        <div className="flex justify-between  w-full" >
                            <b>{item.title}</b>

                        </div>
                        <CardDescription />
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
                </Card>
            ))}
        </div>
    )
}

export default NewsCards
