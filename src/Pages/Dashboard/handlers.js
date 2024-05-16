import axios from "axios";
import toast from "react-hot-toast";
const cancel = () => toast.success('The booking cancelled successfully.');
const cancelled = () => toast.error('This booking is already cancelled.');

const BASE_URL = "https://highnox.site/highnox";
const token = localStorage.getItem("userTokenC");

// *Done
async function getBookings(setBooking, setIsLoading, status = "") {
    setIsLoading(true);
    try {
        const response = await axios.get(`${BASE_URL}/booking/?token=${token}${status ? `&status=${status}` : ""}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            data: JSON.stringify({}),
            withCredentials: false
        });

        if (response.status === 200) {
            setBooking(response.data.data);
            setIsLoading(false);
        }
    } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
    }
}

// *Done
async function getEvents(setEvents) {
    let data = await axios.get(`${BASE_URL}/events?token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setEvents(data.data.data);
    }
}

// *Done
async function getMeetingRooms(setMeetingRooms, limit) {
    let data = await axios.get(`${BASE_URL}/meeting_room?limit=${limit}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setMeetingRooms(data.data.data.rooms);
    }
}

// *Done
async function getOfficeRooms(setOfficeRooms, limit) {
    let data = await axios.get(`${BASE_URL}/office_room?limit=${limit}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setOfficeRooms(data.data.data.rooms);
    }
}

// *Done
async function getNews(setOfficeRooms, limit) {
    let data = await axios.get(`${BASE_URL}/news?limit=${limit}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setOfficeRooms(data.data.data);
    }
}

// *Done
async function deleteBooking(id, callback) {
    try {
        await axios.get(`${BASE_URL}/cancel_booking?id=${id}&token=${token}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            withCredentials: false
        });
        callback();
        cancel();
    } catch (error) {
        cancelled();
        console.error("This is our Error", error);
    }
}

export {
    getBookings,
    deleteBooking,
    getEvents,
    getMeetingRooms,
    getOfficeRooms,
    getNews
}