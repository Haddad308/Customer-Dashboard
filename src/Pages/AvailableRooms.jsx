import RoomsCards from "../Components/Cards/RoomsCards"
import NavSearch from "../Components/Layout/NavSearch";

const AvailableRooms = () => {
    return (
        <div className="p-5" >
            <NavSearch />
            <RoomsCards />
        </div>
    )
}

export default AvailableRooms
