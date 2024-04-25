/* eslint-disable react/prop-types */
import { FaBuilding } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const Features = ({building,floor,users,price}) => {
    return (
        <div className="flex gap-4  self-center justify-center w-full" >
            <div className="flex items-center gap-1" >
                <FaBuilding />
                <p>{building}</p>
            </div>
            <div className="flex items-center gap-1" >
                <GiStack />
                <p>{floor}</p>
            </div>
            <div className="flex items-center gap-1" >
                <FaUser />
                <p>{users}</p>
            </div>
            <div className="flex items-center gap-1" >
                <IoBag />
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Features
