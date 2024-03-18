
import NewsCards from "../Cards/NewsCards";
import SeeMore from "./SeeMore";

const News = () => {



    return (
        <div>
            <div className="flex w-full justify-between" >
                <h2 className="text-[#2499E3] font-semibold text-lg mb-2 " >All News</h2>
                <SeeMore to={"/news"} />
            </div>
            <NewsCards/>
        </div>
    )
}

export default News
