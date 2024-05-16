import axios from "axios";

const BASE_URL = "https://highnox.site/highnox";
const token = localStorage.getItem("userTokenC");


async function getRoomDetails(setMeetingRoom, id) {
    let data = await axios.get(`${BASE_URL}/meeting_room?room_id=${id}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.log(error);
    });

    if (data?.status === 200) {
        setMeetingRoom(data.data.data.rooms[0]);
    }
}

async function getOfficeDetails(setOfficeRoom, id) {
    console.log("hi Test");
    let data = await axios.get(`${BASE_URL}/office_room?room_id=${id}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.log(error);
    });

    if (data?.status === 200) {
        setOfficeRoom(data.data.data.rooms[0]);
    }
}

async function getNewsDetails(setNews, id) {
    console.log("hi Test");
    let data = await axios.get(`${BASE_URL}/news?news_id=${id}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.log(error);
    });

    if (data?.status === 200) {
        setNews(data.data.data);
        console.log(data.data.data);
    }
}


export {
    getRoomDetails,
    getOfficeDetails,
    getNewsDetails,
}