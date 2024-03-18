/* eslint-disable react/prop-types */
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SeeMore = ({ to }) => {
    return (
        <Link to={to} >
            <h2 className="text-[#6c40ff] font-semibold text-base mb-2 flex items-center cursor-pointer transition-colors duration-300 hover:text-blue-900 " >
                <p className="pb-1" >More</p>
                <MdKeyboardArrowRight className="w-6 h-6" />
            </h2>
        </Link>
    )
}

export default SeeMore
