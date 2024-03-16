import { useState } from "react";
import SideBar from "../../Components/Layout/SideBar";
import NavBar from "../../Components/Layout/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div className="flex bg-[#edf2f6] w-screen ">
      <SideBar sidebarOpen={sidebarOpen} />
      <div className="flex flex-col w-full ">
        <NavBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className={`h-[calc(100%-81.5px)]`}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout
