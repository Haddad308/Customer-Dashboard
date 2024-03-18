import OfficesCards from "../Components/Cards/OfficesCards"
import BackButton from "../Components/BackButton";
const AvailableOffices = () => {
  return (
    <div className="p-5" >
      <div className="mb-5" >
        <BackButton />
      </div>
      <OfficesCards className="w-6" />
    </div>
  )
}

export default AvailableOffices
