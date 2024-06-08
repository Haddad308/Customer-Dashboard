import { Button } from "@nextui-org/react"
import { useContext, useEffect, useState } from "react"
import { getNewsDetails } from "./detailsPages.handlers"
import { useLocation } from "react-router-dom";
import News from "../../Components/Dashboard/News"
import { tokenContext } from "../../contexts/AuthProvidor";

const NewsPage = () => {

    const token = useContext(tokenContext);
    const [details, setDetails] = useState("");

    const location = useLocation();
    let { pathname } = location;

    const id = parseInt(pathname.slice(pathname.lastIndexOf("/") + 1));
    console.log(id);

    useEffect(() => {
        getNewsDetails(setDetails, id, token)
    }, [id, token])

    console.log(details);

    return (
        <div className="p-5">
            <div className="bg-white rounded-lg overflow-hidden flex mb-5 " >
                <img
                    src={details && details.image ? `http://highnox.site${details.image}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
                    alt="test5"
                    className="h-96 w-1/2" />
                <div className="p-4 flex flex-col justify-around w-1/2" >
                    <h1 className="text-2xl font-bold" >{details.title}</h1>
                    <p>{details.description}</p>
                    <Button variant="solid" className="bg-[#248ed0] text-white font-bold" >
                        Action
                    </Button>
                </div>
            </div>

            <News />
        </div>
    )
}

export default NewsPage
