import { Tabs, Tab, Card, CardBody, Input } from "@nextui-org/react";
import TAble from "../Components/Table/Table";
import { IoSearch } from "react-icons/io5";
const Invoices = () => {
    return (
        <div className="p-5" >
            <div className="flex w-full flex-col relative">
                <Tabs aria-label="Options" color="primary" variant="light" className="bg-white mx-1 p-2 rounded-lg">
                    <Tab key="photos" title="Photos">
                        <TAble />
                    </Tab>
                    <Tab key="music" title="Music">
                        <Card>
                            <CardBody>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="videos" title="Videos">
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
                <Input
                    className="absolute w-1/3 right-2 top-2"
                    placeholder="Search"
                    labelPlacement="outside"
                    startContent={
                        < IoSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />
            </div>
        </div>

    )
}

export default Invoices
