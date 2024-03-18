import OfficesCards from "../Cards/OfficesCards";
import SeeMore from "./SeeMore";
import Title from "./Title";

const OfficeRooms = () => {
    
    return (
        <div>
            <div className="flex w-full justify-between" >
                <Title text={"Available office rooms"} />
                <SeeMore to={"/AvailableOffices"} />
            </div>
            <OfficesCards/>
        </div>
    )
}

export default OfficeRooms
