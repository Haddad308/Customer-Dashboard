import { instance } from "../../Network/axios";

async function getCalenderData(setCalendar, SetIsLoading, token) {
    SetIsLoading(true)
    let data = await instance.get(`/booking_calendar?token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
        SetIsLoading(false)
    });

    if (data?.status === 200) {
        console.log(data.data);
        setCalendar(data.data);
        SetIsLoading(false)
    }
}


export {
    getCalenderData
}