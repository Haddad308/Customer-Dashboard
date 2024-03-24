import OfficesCards from "../Components/Cards/OfficesCards"
import NavSearch from "../Components/Layout/NavSearch";
const AvailableOffices = () => {
  return (
    <div className="p-5" >
      <NavSearch/>
      <OfficesCards className="w-6" />
    </div>
  )
}

export default AvailableOffices
