import { Button } from "@nextui-org/react"
import Features from "../../Components/Dashboard/Features"
import { useEffect, useState } from "react"
import { getOfficeDetails } from "./detailsPages.handlers"
import { useLocation } from "react-router-dom";
import OfficeRooms from "../../Components/Dashboard/OfficeRooms"

const OfficePage = () => {


    const [details, setDetails] = useState("");

    const location = useLocation();
    let { pathname } = location;

    const id = parseInt(pathname.slice(pathname.lastIndexOf("/") + 1));
    console.log(id);

    useEffect(() => {
        getOfficeDetails(setDetails, id)
    }, [id])


    return (
        <div className="p-5">
            <div className="bg-white rounded-lg overflow-hidden flex mb-5 " >
                <img
                    src={details && details.image ? `http://highnox.site${details.image}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
                    alt="test5"
                    className="h-96 w-1/3"
                />
                <div className="p-4 flex flex-col justify-around" >
                    <h1 className="text-2xl font-bold" >{details.name}</h1>
                    <p>{details.name}</p>
                    <Features building={details.building_id} floor={details.floor_id} users={details.number_of_people} price={details.price} />
                    <Button variant="solid" className="bg-[#248ed0] text-white font-bold" >
                        Action
                    </Button>
                </div>
            </div>
            <OfficeRooms />
        </div>
    )
}

export default OfficePage
