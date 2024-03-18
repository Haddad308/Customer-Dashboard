import { FaBuilding } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
const Features = () => {
    return (
        <div className="flex gap-2  self-center justify-stretch w-full" >
            <div className="flex items-center gap-1" >
                <FaBuilding />
                <p>Odenplan</p>
            </div>
            <div className="flex items-center gap-1" >
                <GiStack />
                <p>Floor 6 </p>
            </div>
            <div className="flex items-center gap-1" >
                <FaUser />
                <p>10</p>
            </div>
            <div className="flex items-center gap-1" >
                <IoBag />
                <p>10.000/Man</p>
            </div>
        </div>
    )
}

export default Features
