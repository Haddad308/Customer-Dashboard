import NewsCards from "../Components/Cards/NewsCards"
import NavSearch from "../Components/Layout/NavSearch";

const News = () => {
    return (
        <div className="p-5" >
            <NavSearch/>
            <NewsCards />
        </div>
    )
}

export default News
