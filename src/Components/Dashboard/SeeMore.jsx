/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SeeMore = ({ to }) => {
    return (
        <Link to={to} >
            <h2 className="text-black font-semibold text-base flex items-center cursor-pointer transition-colors duration-300 hover:text-primary pt-1 " >
                <p className="pb-1 underline" >More</p>
            </h2>
        </Link>
    )
}

export default SeeMore
