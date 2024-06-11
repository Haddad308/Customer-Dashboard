import { NextUIProvider } from "@nextui-org/react"
import Layout from "./Pages/Layout/Layout"
import Dashboard from "./Pages/Dashboard/Dashboard"
import UnAuthorized from "./Pages/Auth/UnAuthorized"
import NotFound from "./Pages/Auth/NotFound"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Bookings from "./Pages/Bookings/Bookings"
import Calendar from "./Pages/Calendar/Calendar"
import FaQ from "./Pages/FAQ/FAQ"
import Information from "./Pages/Information/Information"
import Invoices from "./Pages/Invoices/Invoices"
import News from "./Pages/News"
import { sideBarOpen } from "./contexts/SideBarOpen"
import { eventsloading } from "./contexts/isLoadingE"
import { useEffect, useState } from "react"
import Events from "./Pages/Events"
import AvailableRooms from "./Pages/AvailableRooms"
import AvailableOffices from "./Pages/AvailableOffices"
import ContactUs from "./Pages/ContactUs"
import Booking from "./Pages/Booking/Booking"
import RoomPage from "./Pages/DetailsPages/RoomPage"
import OfficePage from "./Pages/DetailsPages/OfficePage"
import NewsPage from "./Pages/DetailsPages/NewsPage"


import './i18n';
function App() {

  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Dashboard /> },
        { path: "bookings", element: <Bookings /> },
        { path: "calendar", element: <Calendar /> },
        { path: "FAQ", element: <FaQ /> },
        { path: "info", element: <Information /> },
        { path: "Invoices", element: <Invoices /> },
        { path: "news", element: <News /> },
        { path: "AvailableOffices", element: <AvailableOffices /> },
        { path: "AvailableRooms", element: <AvailableRooms /> },
        { path: "Events", element: <Events /> },
        { path: "room/:id", element: <RoomPage /> },
        { path: "office/:id", element: <OfficePage /> },
        { path: "news/:id", element: <NewsPage /> },
        { path: "ContactUs", element: <ContactUs /> },
        { path: "booking/:id", element: <Booking /> },
      ]
    },
    // { path: "login", element: <Login /> },
    { path: "unauthorized", element: <UnAuthorized /> },
    { path: "*", element: <NotFound /> },
  ])

  const SideBarStatus = useState(true);
  const eventLoader = useState(false);

  useEffect(() => {
    localStorage.setItem("customer_dash_token", "8e453dd249b10ede0828004d0ec22b8197873f3d")
  })

  return (
    <>
      <NextUIProvider>
        <sideBarOpen.Provider value={SideBarStatus}>
          <eventsloading.Provider value={eventLoader}>
            <RouterProvider router={routers} />
          </eventsloading.Provider>
        </sideBarOpen.Provider>
      </NextUIProvider>
    </>
  )
}

export default App
