
import { useContext, useEffect, useState } from "react";
import Event from "../Components/Dashboard/Event"
import NavSearch from "../Components/Layout/NavSearch"
import { getEvents } from "./Dashboard/handlers";
import { tokenContext } from "../contexts/AuthProvidor";

const Events = () => {

  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const token = useContext(tokenContext);



  function handleSearch(query) {
    setSearchQuery(query);
    const filteredTemplates = events.filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredTemplates);
  }

  useEffect(() => {
    getEvents(setEvents, token)
  }, [token])

  useEffect(() => {
    const filteredEvents = events.filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(filteredEvents);
  }, [events, searchQuery]);

  return (
    <div className="p-5  " >
      <NavSearch handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col gap-4">
        {events.length > 0 ? (
          filtered.map(({ title, image, description }, index) => (
            <Event key={index} title={title} image={image} description={description} height={"10px"} width={"w-1/6"} viewMore={false} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Events
