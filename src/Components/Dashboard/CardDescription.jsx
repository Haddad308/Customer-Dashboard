/* eslint-disable react/prop-types */

const CardDescription = ({text}) => {
    return (
        <p className="text-left" >
            {text.slice(0,200)}
            <span className="text-blue-500 font-semibold  hover:underline  " >View More... </span>
        </p>
    )
}

export default CardDescription
