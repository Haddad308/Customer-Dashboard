import { Button } from "@nextui-org/react"
import Features from "../Components/Dashboard/Features"
import test5 from "../assets/test4.jpeg"
import MeetingRooms from "../Components/Dashboard/MeetingRooms"

const Item = () => {
    return (
        <div className="p-5">
            <div className="bg-white rounded-lg overflow-hidden flex mb-5 " >
                <img src={test5} alt="test5" className="h-96" />
                <div className="p-4 flex flex-col justify-around" >
                    <h1 className="text-2xl font-bold" >Discount 10%</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, voluptas sed dignissimos praesentium, veritatis magni veniam saepe sit ducimus amet iure labore, doloremque sint fuga repellendus dicta excepturi quod accusantium mollitia ullam molestiae dolor rem. Ducimus corporis autem accusamus reiciendis.</p>
                    <Features />
                    <Button variant="solid" className="bg-[#248ed0] text-white font-bold" >
                        Action
                    </Button>
                </div>
            </div>

            <MeetingRooms />
        </div>
    )
}

export default Item
