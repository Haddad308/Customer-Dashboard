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

function App() {

  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Dashboard /> },
        { path:"", element: <Dashboard /> },
        { path:"bookings", element: <Bookings /> },
        { path:"calendar", element: <Calendar /> },
        { path:"FAQ", element: <FaQ /> },
        { path:"info", element: <Information /> },
        { path:"invoices", element: <Invoices /> },
        { path:"news", element: <News /> },
      ]
    },
    { path: "unauthorized", element: <UnAuthorized /> },
    { path: "*", element: <NotFound /> },
  ])

  return (
    <>
      <NextUIProvider>
        <RouterProvider router={routers} />
      </NextUIProvider>
    </>
  )
}

export default App
