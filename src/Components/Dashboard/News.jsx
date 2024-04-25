
import { useEffect, useState } from "react";
import NewsCards from "../Cards/NewsCards";
import SeeMore from "./SeeMore";
import { getNews } from "../../Pages/Dashboard/handlers";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews(setNews,4);
    }, [])

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
