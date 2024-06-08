import { useContext, useEffect, useState } from "react";
import OfficesCards from "../Components/Cards/OfficesCards"
import NavSearch from "../Components/Layout/NavSearch";
import { getOfficeRooms } from "./Dashboard/handlers";
import { tokenContext } from "../contexts/AuthProvidor";
import { useLang } from "../hooks/uselang";
const AvailableOffices = () => {


  const [officeRooms, setOfficeRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const token = useContext(tokenContext);
  const lang = useLang();


  function handleSearch(query) {
    setSearchQuery(query);
    const filteredTemplates = officeRooms.filter(room =>
      room.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredTemplates);
  }


  useEffect(() => {
    getOfficeRooms(setOfficeRooms, 2000, token, lang);
  }, [token, lang])


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
