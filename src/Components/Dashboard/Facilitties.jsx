import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoVideocam } from "react-icons/io5";



const Facilitties = () => {
    return (
        <div className="flex gap-1">
            <div className="bg-white rounded-full border-2 p-1 border-gray-300 " >
                <FaWifi color="black" />
            </div>
            <div className="bg-white rounded-full border-2 p-1 border-gray-300 " >
                <PiTelevisionSimpleBold color="black" />
            </div>
            <div className="bg-white rounded-full border-2 p-1 border-gray-300 " >
                <IoVideocam color="black" />
            </div>
        </div>
    )
}

export default Facilitties
