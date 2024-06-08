import { useContext, useEffect, useState } from "react";
import NewsCards from "../Components/Cards/NewsCards"
import NavSearch from "../Components/Layout/NavSearch";
import { getNews } from "./Dashboard/handlers";
import { tokenContext } from "../contexts/AuthProvidor";

const News = () => {

    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFiltered] = useState([]);
    const token = useContext(tokenContext);

    function handleSearch(query) {
        setSearchQuery(query);
        const filteredTemplates = news.filter(room =>
            room.title.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filteredTemplates);
    }

    useEffect(() => {
        getNews(setNews, 2000, token);
    }, [token])

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
