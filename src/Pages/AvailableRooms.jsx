import { useContext, useEffect, useState } from "react";
import RoomsCards from "../Components/Cards/RoomsCards"
import NavSearch from "../Components/Layout/NavSearch";
import { getMeetingRooms } from "../Pages/Dashboard/handlers"
import { tokenContext } from "../contexts/AuthProvidor";
import { useLang } from "../hooks/uselang";

const AvailableRooms = () => {

    const [meetingRooms, setMeetingRooms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFiltered] = useState([]);
    const token = useContext(tokenContext);
    const lang = useLang();

    function handleSearch(query) {
        setSearchQuery(query);
        const filteredTemplates = meetingRooms.filter(room =>
            room.name.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filteredTemplates);
    }

    useEffect(() => {
        getMeetingRooms(setMeetingRooms, 2000, token, lang);
    }, [token, lang])


    useEffect(() => {
        const filteredEvents = meetingRooms.filter(room =>
            room.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFiltered(filteredEvents);
    }, [meetingRooms, searchQuery]);

    return (
        <div className="p-5" >
            <NavSearch handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <RoomsCards meetingRooms={filtered} />
        </div>
    )
}

export default AvailableRooms
