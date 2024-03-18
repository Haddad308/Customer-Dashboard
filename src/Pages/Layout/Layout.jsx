import { useContext } from "react";
import SideBar from "../../Components/Layout/SideBar";
import NavBar from "../../Components/Layout/NavBar";
import { Outlet } from "react-router-dom";
import { sideBarOpen } from "../../contexts/SideBarOpen";

const Layout = () => {

  const [sidebarOpens, setSidebarOpen] = useContext(sideBarOpen)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpens);
  };


  return (
    <div className="flex bg-[#edf2f6] w-screen ">
      <SideBar sidebarOpen={sidebarOpens} />
      <div className="flex flex-col w-full ">
        <NavBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpens} />
        <div className={`h-[calc(100vh-81.5px)] overflow-scroll overflow-x-hidden `}>
          <Outlet sidebarOpen={sidebarOpens}  />
        </div>
      </div>
    </div>
  )
}

export default Layout
