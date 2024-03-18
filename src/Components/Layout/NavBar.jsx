/* eslint-disable react/prop-types */
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";

const NavBar = ({ toggleSidebar }) => {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["English (US)"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const location = useLocation();
    let { pathname } = location;
    pathname = pathname.slice(1)
    pathname = pathname? pathname : "Dashboard"
    return (
        <div className={`bg-white transition-all duration-300  h-[81.5px] flex items-center justify-between `}  >
            <div className="flex" >
                <button className=" " onClick={toggleSidebar} >
                    <IoMenu size={35} className="ms-4  transition-all duration-300 hover:text-[#0070F0]" />
                </button>
                <h3 className="ms-5 text-2xl font-semibold mb-1" > {pathname} </h3>
            </div>
            <div className="flex items-center gap-3" >
                <Dropdown >
                    <DropdownTrigger>
                        <Button
                            variant="light"
                        >
                            {selectedValue}
                            <IoIosArrowDown />

                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Example with disabled actions"
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="English (US)">English (US)</DropdownItem>
                        <DropdownItem key="Swedish">Swedish</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Avatar className="me-3" radius="lg" size="lg" color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </div>
        </div>
    )
}

export default NavBar
