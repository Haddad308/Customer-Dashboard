/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */

import { Skeleton } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Event = ({ title, description, image, height, width, viewMore }) => {

    let imageUrl;

    if (image) {
        imageUrl = "http://highnox.site/" + image;
    } else {
        imageUrl = "https://www.shutterstock.com/image-vector/no-image-available-icon-template-600nw-1036735678.jpg";
    }

    return (
        <>
            {false ? 
            <div className={`bg-white flex gap-3 rounded-lg overflow-hidden w-full h-[${height}]`}   >
                <div className={`${width}  `}>
                    <Skeleton className="">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                </div>
                <div className="w-3/4  py-2 pe-1 flex flex-col justify-center" >
                    <Skeleton className="w-3/5 rounded-lg mb-4">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                </div>
            </div> 
            : 
            <div className={`bg-white flex gap-3 rounded-lg overflow-hidden w-full h-[${height}]`}   >
                    <div className={`${width}  bg-black `}>
                    <img className="w-full h-44 object-center" src={imageUrl} alt="testImage" />
                </div>
                <div className="w-3/4  py-2 pe-1 flex flex-col justify-center" >
                    <h1 className="font-semibold mb-1" >{title} </h1>
                    <p>{description.slice(0, 200)}
                        {viewMore ? <Link to={"/events"}>
                            <span className="text-blue-500 font-semibold  hover:underline  " > View More... </span>
                        </Link> : ""}
                    </p>
                </div>
            </div>
            }


        </>
    )
}

export default Event; 
