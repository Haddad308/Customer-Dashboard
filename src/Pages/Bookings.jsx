import { Tabs, Tab, Card, CardBody, Input } from "@nextui-org/react";
import TAble from "../Components/Table/Table";
import { IoSearch } from "react-icons/io5";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import Features from "../Components/Dashboard/Features";
import { CardFooter, Image } from "@nextui-org/react"
import test3 from "../assets/fa60f4784fc700982548e2679937a694.jpeg"
import CardDescription from "../Components/Dashboard/CardDescription";
const Bookings = () => {

    const list = [
        
        {
            title: "Raspberry",
            img: test3,
            price: "$10.00",
        },
        {
            title: "Raspberry",
            img: test3,
            price: "$10.00",
        },
        {
            title: "Raspberry",
            img: test3,
            price: "$10.00",
        }
    ];
    return (
        <div className="p-5" >
            <div className="flex w-full flex-col relative">
                <Tabs aria-label="Options" color="primary" variant="light" className="bg-white mx-1 p-2 rounded-lg">
                    <Tab key="Active" title="Active" >
                        <TAble />
                    </Tab>
                    <Tab key="Past" title="Past" >
                        <div className=" h-screen overflow-y-scroll overflow-x-hidden grid grid-cols-6 gap-4 " >
                            <div className=" col-span-2  flex flex-col gap-4 "  >
                                {list.map((item, index) => (
                                    <Card shadow="sm" key={index} isPressable >

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
                                            </div>
                                            <CardDescription />
                                            <Features />
                                        </CardFooter>

                                    </Card>

                                ))}
                            </div>
                            <div className="col-span-4 bg-white rounded-lg  p-3 mx-2 pt-5   " >
                                <div className="flex justify-between mx-2 " >
                                    <h1 className="font-semibold text-2xl">Gamla Stan</h1>
                                    <div>
                                        <Features />
                                    </div>
                                </div>
                                <img src={list[0].img} alt="test" className="rounded-lg border-2" />
                                <div className="py-3" >
                                    <h1 className="font-semibold text-2xl"> Room description</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos ipsum eius vero? Nobis quidem amet maxime sunt modi odit.</p>
                                </div>
                                <hr className="py-2" />
                                <div>
                                    <h1 className="font-semibold text-xl pb-3 "> Rental details</h1>
                                    <TAble></TAble>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab key="Cancelled" title="Cancelled" >
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
                <Input
                    className="absolute w-1/3 right-32 top-2"
                    placeholder="Search"
                    labelPlacement="outside"
                    startContent={
                        < IoSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <div className="absolute right-9 top-5 flex gap-3   ">
                    <IoFileTrayStackedSharp className=" hover:text-[#248ED0] transition-colors duration-300 cursor-pointer" />
                    <FaTableList className="hover:text-[#248ED0] transition-colors duration-300 cursor-pointer" />
                    <FaCalendar className="hover:text-[#248ED0] transition-colors duration-300 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Bookings
