import RoomsCards from "../Components/Cards/RoomsCards"
import BackButton from "../Components/BackButton";

const AvailableRooms = () => {
    return (
        <div className="p-5" >
            <div className="mb-5" >
                <BackButton />
            </div>
            <RoomsCards />
        </div>
    )
}

export default AvailableRooms
