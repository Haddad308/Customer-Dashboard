


import { useEffect, useState } from "react";
import RoomsCards from "../Cards/RoomsCards";
import SeeMore from "./SeeMore";
import Title from "./Title";
import { getMeetingRooms } from "../../Pages/Dashboard/handlers";

const MeetingRooms = () => {

    const [meetingRooms, setMeetingRooms] = useState([]);

    useEffect(() => {
        getMeetingRooms(setMeetingRooms,4);
    }, [])

    return (
        <div>
            <div className="flex w-full justify-between" >
                <Title text={"Available meeting rooms"} />
                <SeeMore to={"/AvailableRooms"} />
            </div>
            <RoomsCards meetingRooms={meetingRooms} />
        </div>
    )
}

export default MeetingRooms
