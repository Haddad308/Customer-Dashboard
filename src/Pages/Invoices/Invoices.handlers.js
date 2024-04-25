

import axios from "axios";
const token = localStorage.getItem("userTokenC");


const BASE_URL = "https://highnox.site/highnox";


async function getInvoices(setInvoicesData, SetIsLoading,paid) {
    SetIsLoading(true)
    let data = await axios.get(`${BASE_URL}/invoices/?paid=${paid}`, {
        headers: {
            'token': token,
        }
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

