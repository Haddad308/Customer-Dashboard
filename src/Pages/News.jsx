import NewsCards from "../Components/Cards/NewsCards"
import BackButton from "../Components/BackButton";

const News = () => {
    return (
        <div className="p-5" >
            <div className="mb-5" >
                <BackButton />
            </div>
            <NewsCards />
        </div>
    )
}

export default News
