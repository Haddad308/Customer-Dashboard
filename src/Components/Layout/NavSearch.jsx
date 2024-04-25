/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";
import BackButton from "../BackButton";

const NavSearch = ({ handleSearch, searchQuery, setSearchQuery }) => {
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className="mb-5 bg-white rounded-lg p-3 flex items-center justify-between">
            <BackButton />
            <Input
                className="w-1/3 p-0 relative"
                placeholder="Search"
                labelPlacement="outside"
                value={searchQuery}
                onChange={handleChange}
                required
            />
        </div>
    )
}

export default NavSearch;
