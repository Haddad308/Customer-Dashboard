import axios from "axios";
import toast from "react-hot-toast";
const cancel = () => toast.success('The booking cancelled successfully.');
const cancelled = () => toast.error('This booking is already cancelled.');

const BASE_URL = "https://highnox.site/highnox";
const token = localStorage.getItem("userTokenC");

async function getBookings(setBooking, SetIsLoading, status = "") {
    SetIsLoading(true)
    let data = await axios.get(`${BASE_URL}/booking/${status ? `?status=${status}` : ""}`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error("test 312", error);
        SetIsLoading(false)
    });

    if (data?.status === 200) {
        setBooking(data.data.data);
        SetIsLoading(false)
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

async function getFloors() {


    const options = {
        method: 'GET', // Change method to POST
        url: `${BASE_URL}/get_floor?floor_id=1`,
    };

    try {
        await axios(options, {
            headers: {
                'token': token,
            }
        });
    } catch (error) {
        console.error('Error:', error);
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
    getNews,
    getFloors
}