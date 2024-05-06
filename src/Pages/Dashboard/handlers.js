import axios from "axios";
import toast from "react-hot-toast";
const cancel = () => toast.success('The booking cancelled successfully.');
const cancelled = () => toast.error('This booking is already cancelled.');

const BASE_URL = "http://146.190.50.2:8069/highnox";
const token = localStorage.getItem("userTokenC");

async function getBookings(setBooking, setIsLoading, status = "") {
    setIsLoading(true);
    try {
        const response = await axios.get(`${BASE_URL}/booking/${status ? `?status=${status}` : ""}`, {
            headers: {
                'token': token,
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
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


async function getEvents(setEvents) {
    let data = await axios.get(`${BASE_URL}/events`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setEvents(data.data.data);
    }
}

async function getMeetingRooms(setMeetingRooms, limit) {
    let data = await axios.get(`${BASE_URL}/meeting_room?limit=${limit}`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setMeetingRooms(data.data.data.rooms);
    }
}

async function getOfficeRooms(setOfficeRooms, limit) {
    let data = await axios.get(`${BASE_URL}/office_room?limit=${limit}`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setOfficeRooms(data.data.data.rooms);
    }
}

async function getNews(setOfficeRooms, limit) {
    let data = await axios.get(`${BASE_URL}/news?limit=${limit}`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        setOfficeRooms(data.data.data);
    }
}



async function deleteBooking(id, callback) {
    try {
        await axios.get(`${BASE_URL}/cancel_booking?id=${id}`, {
            headers: {
                'token': token,
            }
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