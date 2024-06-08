import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import { useContext, useEffect, useState } from "react";
import { getCalenderData } from "./Calendar.handlers";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../contexts/AuthProvidor";

const CAlendar = () => {

    const [calendar, setCalendar] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        getCalenderData(setCalendar, setIsLoading, token)
    }, [token])

    const navigate = useNavigate()

    return (
        <div className="relative p-5 w-full h-full">
            <Scheduler
                // !Remove Splice after testing.
                data={calendar.splice(0, 60)}
                isLoading={isLoading}
                onRangeChange={(newRange) => console.log(newRange)}
                onTileClick={(clickedResource) => navigate(`/booking/${clickedResource.id}`)}
                onItemClick={(item) => console.log(item)}
                config={{
                    zoom: -1,
                    display: "block"
                }}
            />
        </div>
    )
}

export default CAlendar
