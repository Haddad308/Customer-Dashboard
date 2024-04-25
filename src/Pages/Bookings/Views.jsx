/* eslint-disable react/prop-types */
import BookingTable from "../../Components/Tables/BookingTable"
import NormalView from "./NormalView";

const Views = ({ selectedView, data, isLoading, handleDelete }) => {

    

    return (
        <div>
            {selectedView === "table" ? <BookingTable data={data} isLoading={isLoading} handleDelete={handleDelete} />
                : <NormalView data={data} />}
        </div>
    )
}

export default Views
