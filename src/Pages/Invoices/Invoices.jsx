/* eslint-disable no-unused-vars */
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { getInvoices } from "./Invoices.handlers";
import InvoiceTable from "./InvoicesTable";
import { tokenContext } from "../../contexts/AuthProvidor";

const Invoices = () => {

    const [paidInvoices, setPaidInvoices] = useState([]);
    const [notPaidInvoices, setNotPaidInvoices] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const token = useContext(tokenContext);


    useEffect(() => {
        getInvoices(setPaidInvoices, setIsLoading, "True", token)
        getInvoices(setNotPaidInvoices, setIsLoading, "False", token)
    }, [token])


    return (
        <div className="p-5" >
            <div className="flex w-full flex-col relative">
                <Tabs aria-label="Options" color="primary" variant="light" className="bg-white mx-1 p-2 rounded-lg">
                    <Tab key="paid" title="Paid">
                        <InvoiceTable data={paidInvoices} isLoading={isLoading} />
                    </Tab>
                    <Tab key="not Paid" title="Not Paid">
                        <InvoiceTable data={notPaidInvoices} isLoading={isLoading} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Invoices
