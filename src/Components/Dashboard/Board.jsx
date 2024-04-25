/* eslint-disable react/prop-types */
import { Button, Skeleton } from "@nextui-org/react"
import test2 from "../../assets/test2.jpeg"
import { useContext } from "react"
import { sideBarOpen } from "../../contexts/SideBarOpen"
import SeeMore from "./SeeMore"
import Title from "./Title"
import Event from "./Event"

const Board = ({ events }) => {

    const [sidebarOpens,] = useContext(sideBarOpen)

    return (
        <div className="grid grid-cols-5 gap-5" >
            <div className="col-span-3" >
                <div className="flex w-full justify-between" >
                    <Title text={"Today's events"} />
                    <SeeMore to={"/Events"} />
                </div>
                <div className="flex flex-col gap-3" >
                    {events.length > 0 ? (
                        events.map(({ title, image, description }, index) => (
                            <Event
                                key={index}
                                title={title}
                                image={image}
                                description={description}
                                height={"110px"}
                                width={"w-1/5"}
                                viewMore={true}
                            />
                        ))
                    ) : (
                        <>
                            <div className={`bg-white flex gap-3 rounded-lg overflow-hidden w-full  `}>
                                <div className={`w-1/5`}>
                                    <Skeleton className="">
                                        <div className="h-24 rounded-lg bg-default-300"></div>
                                    </Skeleton>
                                </div>
                                <div className="w-3/4 py-2 pe-1 flex flex-col justify-center">
                                    <Skeleton className="w-3/5 rounded-lg mb-4">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                </div>
                            </div>
                            <div className={`bg-white flex gap-3 rounded-lg overflow-hidden w-full  `}>
                                <div className={`w-1/5`}>
                                    <Skeleton className="">
                                        <div className="h-24 rounded-lg bg-default-300"></div>
                                    </Skeleton>
                                </div>
                                <div className="w-3/4 py-2 pe-1 flex flex-col justify-center">
                                    <Skeleton className="w-3/5 rounded-lg mb-4">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="col-span-2 relative  w-full" >
                <h2 className="text-[#2499E3] font-semibold text-lg mb-2 " >Today&apos;s deal</h2>
                <img src={test2} alt="Deal" className="w-full rounded-lg" />
                <div className={`absolute ${sidebarOpens ? "top-12" : "top-16"}  left-2 w-3/5`} >
                    <h1 className="font-medium text-lg mb-2" >Basic Bread <br /> Making Techniques</h1>
                    <p className="mb-2" > Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. </p>
                    <Button color="primary" className="p-2" >
                        <p className="font-semibold" >View</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Board
