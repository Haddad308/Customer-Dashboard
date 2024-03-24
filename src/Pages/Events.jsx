
import Event from "../Components/Dashboard/Event"
import NavSearch from "../Components/Layout/NavSearch"

const Events = () => {
  return (
    <div className="p-5  " >
      <NavSearch/>
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
