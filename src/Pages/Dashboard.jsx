import TAble from "../Components/Table/Table"

import Board from "../Components/Dashboard/Board"
import MeetingRooms from "../Components/Dashboard/MeetingRooms"
import OfficeRooms from "../Components/Dashboard/OfficeRooms"
import News from "../Components/Dashboard/News"
const Dashboard = () => {


    return (
        <div className="flex flex-col gap-5 p-5" >

            <div>
                <h2 className="text-[#2499E3] font-semibold text-lg mb-2 " >Today&apos;s bookings</h2>
                <TAble />
            </div>

            <Board />

            <MeetingRooms />

            <OfficeRooms />

            <News />

        </div>

    )
}

export default Dashboard
