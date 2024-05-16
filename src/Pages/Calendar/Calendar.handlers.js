import axios from "axios";

const BASE_URL = "https://highnox.site/highnox";
const token = localStorage.getItem("userTokenC");

async function getCalenderData(setCalendar, SetIsLoading) {
    SetIsLoading(true)
    let data = await axios.get(`${BASE_URL}/booking_calendar?token=${token}`, {
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