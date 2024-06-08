
import { useContext, useEffect, useState } from "react";
import NewsCards from "../Cards/NewsCards";
import SeeMore from "./SeeMore";
import { getNews } from "../../Pages/Dashboard/handlers";
import { tokenContext } from "../../contexts/AuthProvidor";

const News = () => {

    const [news, setNews] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        getNews(setNews, 4, token);
    }, [token])

    return (
        <div>
            <div className="flex w-full justify-between" >
                <h2 className="text-[#2499E3] font-semibold text-lg mb-2 " >All News</h2>
                <SeeMore to={"/news"} />
            </div>
            <NewsCards news={news} />
        </div>
    )
}

export default News
