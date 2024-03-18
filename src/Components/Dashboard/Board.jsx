import { Button } from "@nextui-org/react"
import test2 from "../../assets/test2.jpeg"
import { useContext } from "react"
import { sideBarOpen } from "../../contexts/SideBarOpen"
import SeeMore from "./SeeMore"
import Title from "./Title"
import Event from "./Event"

const Board = () => {

    const [sidebarOpens,] = useContext(sideBarOpen)

    return (
        <div className="grid grid-cols-5 gap-5" >
            <div className="col-span-3" >
                <div className="flex w-full justify-between" >
                    <Title text={"Today's events"} />
                    <SeeMore to={"/Events"} />
                </div>
                <div className="flex flex-col gap-3" >
                    <Event />
                    <Event />
                </div>
            </div>
            <div className="col-span-2 relative" >
                <h2 className="text-[#2499E3] font-semibold text-lg mb-2 " >Today&apos;s deal</h2>
                <img src={test2} alt="" className="w-full rounded-lg" />
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
