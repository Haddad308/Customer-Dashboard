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
import { useState } from "react"
import Events from "./Pages/Events"
import AvailableRooms from "./Pages/AvailableRooms"
import AvailableOffices from "./Pages/AvailableOffices"
import ContactUs from "./Pages/ContactUs"
import Booking from "./Pages/Booking"
import Login from "./Pages/Auth/Login"
import ProtectRoutes from "./Pages/Auth/ProtectRoutes"
import RoomPage from "./Pages/DetailsPages/RoomPage"
import OfficePage from "./Pages/DetailsPages/OfficePage"
import NewsPage from "./Pages/DetailsPages/NewsPage"

function App() {

  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <ProtectRoutes><Dashboard /> </ProtectRoutes> },
        {
          path: "", element: <ProtectRoutes><Dashboard /></ProtectRoutes>
        },
        { path: "bookings", element: <ProtectRoutes><Bookings /></ProtectRoutes> },
        { path: "calendar", element: <ProtectRoutes><Calendar /> </ProtectRoutes> },
        { path: "FAQ", element: <ProtectRoutes><FaQ /></ProtectRoutes> },
        { path: "info", element: <ProtectRoutes><Information /></ProtectRoutes> },
        { path: "Invoices", element: <ProtectRoutes> <Invoices /></ProtectRoutes> },
        { path: "news", element: <ProtectRoutes><News /></ProtectRoutes> },
        { path: "AvailableOffices", element: <ProtectRoutes><AvailableOffices /></ProtectRoutes> },
        { path: "AvailableRooms", element: <ProtectRoutes><AvailableRooms /></ProtectRoutes> },
        { path: "Events", element: <ProtectRoutes><Events /> </ProtectRoutes> },
        { path: "room/:id", element: <ProtectRoutes><RoomPage /> </ProtectRoutes> },
        { path: "office/:id", element: <ProtectRoutes><OfficePage /> </ProtectRoutes> },
        { path: "news/:id", element: <ProtectRoutes><NewsPage /> </ProtectRoutes> },
        { path: "ContactUs", element: <ProtectRoutes><ContactUs /></ProtectRoutes> },
        { path: "booking/:id", element: <ProtectRoutes><Booking /></ProtectRoutes> },
      ]
    },
    { path: "login", element: <Login /> },
    { path: "unauthorized", element: <UnAuthorized /> },
    { path: "*", element: <NotFound /> },
  ])

  const SideBarStatus = useState(true);
  const eventLoader = useState(false);

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
