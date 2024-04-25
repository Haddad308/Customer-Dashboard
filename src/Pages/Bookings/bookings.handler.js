
import axios from "axios";
const BASE_URL = "https://highnox.site/highnox";
const token = localStorage.getItem("userTokenC");


export default async function getBooking(setBooking, booking_id = "") {
    let data = await axios.get(`${BASE_URL}/booking/${booking_id ? `?booking_id=${booking_id}` : ""}`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error("test 312", error);
    });

    if (data?.status === 200) {
        setBooking(data.data.data);
    }
}