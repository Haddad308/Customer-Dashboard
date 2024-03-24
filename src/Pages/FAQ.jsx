import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { EditIcon } from "../Components/Table/EditIcon";
import { DeleteIcon } from "../Components/Table/DeleteIcon";

const FaQ = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className="p-5" >
            <div className=" pb-3 flex justify-end gap-3 pe-1" >
                <Button color="danger" variant="faded" >
                    <DeleteIcon />
                    Delete
                </Button>
                <Button color="primary" className="font-semibold">
                    <EditIcon />
                    <p>Edit</p>
                </Button>

            </div>
            <Accordion className="bg-white" variant="bordered" selectionMode="multiple">
                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>

    )
}

export default FaQ
