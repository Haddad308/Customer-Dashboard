import { instance } from "../../Network/axios";



async function getRoomDetails(setMeetingRoom, id, token) {
    let data = await instance.get(`/meeting_room?room_id=${id}&token=${token}`, {
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

async function getOfficeDetails(setOfficeRoom, id, token) {
    console.log("hi Test");
    let data = await instance.get(`/office_room?room_id=${id}&token=${token}`, {
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

async function getNewsDetails(setNews, id, token) {
    console.log("hi Test");
    let data = await instance.get(`/news?news_id=${id}&token=${token}`, {
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