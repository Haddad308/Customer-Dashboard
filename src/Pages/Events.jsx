import BackButton from "../Components/BackButton"
import Event from "../Components/Dashboard/Event"

const Events = () => {
  return (
    <div className="p-5  " >
      <div className="mb-5" >
        <BackButton />
      </div>
      <div className="flex flex-col gap-4">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  )
}

export default Events
