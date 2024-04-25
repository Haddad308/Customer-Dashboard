import { useEffect, useState } from "react";
import OfficesCards from "../Components/Cards/OfficesCards"
import NavSearch from "../Components/Layout/NavSearch";
import { getOfficeRooms } from "./Dashboard/handlers";
const AvailableOffices = () => {


  const [officeRooms, setOfficeRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  function handleSearch(query) {
    setSearchQuery(query);
    const filteredTemplates = officeRooms.filter(room =>
      room.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredTemplates);
  }


  useEffect(() => {
    console.log("hello egypt");
    getOfficeRooms(setOfficeRooms,2000);
  }, [])


  useEffect(() => {
    const filteredEvents = officeRooms.filter(room =>
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(filteredEvents);
  }, [officeRooms, searchQuery]);

  return (
    <div className="p-5" >
      <NavSearch handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <OfficesCards className="w-6" officeRooms={filtered} />
    </div>
  )
}

export default AvailableOffices
