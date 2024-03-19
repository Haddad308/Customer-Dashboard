import { NextUIProvider } from "@nextui-org/react"
import Layout from "./Pages/Layout/Layout"
import Dashboard from "./Pages/Dashboard"
import UnAuthorized from "./Pages/Auth/UnAuthorized"
import NotFound from "./Pages/Auth/NotFound"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Bookings from "./Pages/Bookings"
import Calendar from "./Pages/Calendar"
import FaQ from "./Pages/FAQ"
import Information from "./Pages/Information"
import Invoices from "./Pages/Invoices"
import News from "./Pages/News"
import { sideBarOpen } from "./contexts/SideBarOpen"
import { useState } from "react"
import Events from "./Pages/Events"
import AvailableRooms from "./Pages/AvailableRooms"
import AvailableOffices from "./Pages/AvailableOffices"
import Item from "./Pages/Item"
import ContactUs from "./Pages/ContactUs"
import Booking from "./Pages/Booking"

function App() {

  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Dashboard /> },
        { path: "", element: <Dashboard /> },
        { path: "bookings", element: <Bookings /> },
        { path: "calendar", element: <Calendar /> },
        { path: "FAQ", element: <FaQ /> },
        { path: "info", element: <Information /> },
        { path: "Invoices", element: <Invoices /> },
        { path: "news", element: <News /> },
        { path: "AvailableOffices", element: <AvailableOffices /> },
        { path: "AvailableRooms", element: <AvailableRooms /> },
        { path: "Events", element: <Events /> },
        { path: "item", element: <Item /> },
        { path: "ContactUs", element: <ContactUs /> },
        { path: "booking", element: <Booking /> },
      ]
    },
    { path: "unauthorized", element: <UnAuthorized /> },
    { path: "*", element: <NotFound /> },
  ])

  const SideBarStatus = useState(true);

  return (
    <>
      <NextUIProvider>
        <sideBarOpen.Provider value={SideBarStatus}>
          <RouterProvider router={routers} />
        </sideBarOpen.Provider>
      </NextUIProvider>
    </>
  )
}

export default App
