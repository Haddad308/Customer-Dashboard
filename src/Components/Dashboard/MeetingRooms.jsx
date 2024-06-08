


import { useContext, useEffect, useState } from "react";
import RoomsCards from "../Cards/RoomsCards";
import SeeMore from "./SeeMore";
import Title from "./Title";
import { getMeetingRooms } from "../../Pages/Dashboard/handlers";
import { tokenContext } from "../../contexts/AuthProvidor";

const MeetingRooms = () => {

    const [meetingRooms, setMeetingRooms] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        getMeetingRooms(setMeetingRooms, 4, token);
    }, [token])

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
