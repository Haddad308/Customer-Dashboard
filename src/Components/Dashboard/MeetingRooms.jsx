


import RoomsCards from "../Cards/RoomsCards";
import SeeMore from "./SeeMore";
import Title from "./Title";

const MeetingRooms = () => {

    return (
        <div>
            <div className="flex w-full justify-between" >
                <Title text={"Available meeting rooms"} />
                <SeeMore to={"/AvailableRooms"} />
            </div>
            <RoomsCards/>
        </div>
    )
}

export default MeetingRooms
