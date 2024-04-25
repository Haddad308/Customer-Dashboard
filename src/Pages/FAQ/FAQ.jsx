import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getFAQ } from "./FAQ.handlers";
import AddQ from "./AddQ";
import { Toaster } from "react-hot-toast";
import DeleteQ from "./DeleteQ";
import EditQ from "./EditQ";

const FaQ = () => {

    const [FAQ, setFAQ] = useState([]);
    const [, setIsLoading] = useState(false);


    const handleUpdate = () => {
        getFAQ(setFAQ, setIsLoading)
    };

    useEffect(() => {
        getFAQ(setFAQ, setIsLoading)
    }, [])

    return (
        <>
            <Toaster />
            <div className="p-5" >
                <div className=" pb-3 flex justify-between gap-3 pe-1" >
                    <AddQ handleDelete={handleUpdate} />
                    <div className="flex gap-3"  >
                        <DeleteQ data={FAQ} handleUpdate={handleUpdate} />
                        <EditQ data={FAQ} handleUpdate={handleUpdate} />
                    </div>
                </div>
                <Accordion className="bg-white" variant="bordered" selectionMode="multiple">
                    {FAQ.map(({ id, name, description }) => {
                        return <AccordionItem key={id} aria-label={name} title={name}>
                            {description}
                        </AccordionItem>
                    })}
                </Accordion>
            </div>
        
        </>
    )
}

export default FaQ
