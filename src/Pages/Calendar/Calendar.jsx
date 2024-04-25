import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import { useEffect, useState } from "react";
import { getCalenderData } from "./Calendar.handlers";
import { useNavigate } from "react-router-dom";

const CAlendar = () => {

    const [calendar, setCalendar] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        getCalenderData(setCalendar, setIsLoading)
    }, [])

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
