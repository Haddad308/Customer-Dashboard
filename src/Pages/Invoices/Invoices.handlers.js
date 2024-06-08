import { instance } from "../../Network/axios";


async function getInvoices(setInvoicesData, SetIsLoading, paid, token) {
    SetIsLoading(true)
    let data = await instance.get(`/invoices/?paid=${paid}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error("test 312", error);
        SetIsLoading(false)
    });

    if (data?.status === 200) {
        setInvoicesData(data.data.data.invoices);
        SetIsLoading(false)
    }
}

export {
    getInvoices
}

