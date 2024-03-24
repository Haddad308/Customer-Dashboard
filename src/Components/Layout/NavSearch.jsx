import { Button, Input } from "@nextui-org/react";
import BackButton from "../BackButton";
import { VscSettings } from "react-icons/vsc";

const NavSearch = () => {
    return (
        <div className="mb-5 bg-white rounded-lg p-3 flex  items-center justify-between " >
            <BackButton />
            <Input
                className="w-1/3 p-0 relative"
                placeholder="Search"
                labelPlacement="outside"
                startContent={
                    <Button color="primary" className="absolute right-0 rounded-l-none" > <VscSettings size={20} />Filters
                    </Button>
                }
            />
        </div>
    )
}

export default NavSearch
