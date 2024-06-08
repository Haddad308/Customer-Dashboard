import toast from "react-hot-toast";
import { instance } from "../../Network/axios";
const cancel = () => toast.success('The booking cancelled successfully.');
const cancelled = () => toast.error('This booking is already cancelled.');


async function getBookings(setBooking, setIsLoading, status = "", token, lang) {
    setIsLoading(true);
    try {
        const response = await instance.get(`/booking/?token=${token}${status ? `&status=${status}&lang=${lang}` : ""}`, {
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
async function getEvents(setEvents, token, lang) {
    let data = await instance.get(`/events?token=${token}&lang=${lang}`, {
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
async function getMeetingRooms(setMeetingRooms, limit, token, lang) {
    let data = await instance.get(`/meeting_room?limit=${limit}&token=${token}&lang=${lang}`, {
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
async function getOfficeRooms(setOfficeRooms, limit, token, lang) {
    let data = await instance.get(`/office_room?limit=${limit}&token=${token}&lang=${lang}`, {
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
async function getNews(setOfficeRooms, limit, token, lang) {
    let data = await instance.get(`/news?limit=${limit}&token=${token}&lang=${lang}`, {
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
async function deleteBooking(id, callback, token, lang) {
    try {
        await instance.get(`/cancel_booking?id=${id}&token=${token}&lang=${lang}`, {
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