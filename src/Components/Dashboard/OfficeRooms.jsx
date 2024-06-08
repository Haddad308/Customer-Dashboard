import { useContext, useEffect, useState } from "react";
import OfficesCards from "../Cards/OfficesCards";
import SeeMore from "./SeeMore";
import Title from "./Title";
import { getOfficeRooms } from "../../Pages/Dashboard/handlers";
import { tokenContext } from "../../contexts/AuthProvidor";

const OfficeRooms = () => {
    const [officeRooms, setOfficeRooms] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        getOfficeRooms(setOfficeRooms, 4, token);
    }, [token])

    return (
        <div>
            <div className="flex w-full justify-between" >
                <Title text={"Available office rooms"} />
                <SeeMore to={"/AvailableOffices"} />
            </div>
            <OfficesCards officeRooms={officeRooms} />
        </div>
    )
}

export default OfficeRooms
