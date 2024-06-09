import { instance } from "../../Network/axios";


export default async function getBooking(setBooking, booking_id = "", token, lang) {
    let data = await instance.get(`/booking/?token=${token}${booking_id ? `&booking_id=${booking_id}` : ""}&lang=${lang}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error("test 312", error);
    });

    if (data?.status === 200) {
        setBooking(data.data.data);
    }
}

