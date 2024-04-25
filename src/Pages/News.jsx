import { useEffect, useState } from "react";
import NewsCards from "../Components/Cards/NewsCards"
import NavSearch from "../Components/Layout/NavSearch";
import { getNews } from "./Dashboard/handlers";

const News = () => {

    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFiltered] = useState([]);

    function handleSearch(query) {
        setSearchQuery(query);
        const filteredTemplates = news.filter(room =>
            room.title.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filteredTemplates);
    }

    useEffect(() => {
        console.log("hello egypt");
        getNews(setNews,2000);
    }, [])

    useEffect(() => {
        const filteredEvents = news.filter(room =>
            room.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFiltered(filteredEvents);
    }, [news, searchQuery]);

    return (
        <div className="p-5" >
            <NavSearch handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <NewsCards news={filtered} />
        </div>
    )
}

export default News
