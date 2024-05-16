import axios from "axios";
import toast from "react-hot-toast";
const added = () => toast.success('New Question added successfully');
const deleted = () => toast.success('Question deleted successfully');
const updates = () => toast.success('Question updated successfully');


const BASE_URL = "https://highnox.site/highnox";
const token = localStorage.getItem("userTokenC");


async function getFAQ(setFAQ, SetIsLoading) {
    SetIsLoading(true)
    let data = await axios.get(`${BASE_URL}/fandq/read?token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error("test 312", error);
        SetIsLoading(false)
    });

    if (data?.status === 200) {
        setFAQ(data.data.data);
        SetIsLoading(false)
    }
}

async function AddQuestion(values, SetIsLoading, callback) {
    SetIsLoading(true)
    let data = await axios.post(`${BASE_URL}/fandq/create?token=${token}`, values, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error("test 312", error);
        SetIsLoading(false)
    });

    if (data?.status === 200) {
        added();
        SetIsLoading(false);
        callback()
    }
}

async function DeleteQuestion({ id }, callback) {
    console.log("my ID",id);
    let data = await axios.delete(`${BASE_URL}/fandq/delete?f_and_q_id=${id}&token=${token}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        // data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        deleted();
        callback()
    }
}

async function UpdateQuestion(values, callback) {
    
    let data = await axios.put(`${BASE_URL}/fandq/update?f_and_q_id=${values.id}&token=${token}`, values, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        // data: JSON.stringify({}),
        withCredentials: false
    }
    ).catch((error) => {
        console.error(error);
    });

    if (data?.status === 200) {
        updates();
        callback()
    }
}


export {
    getFAQ,
    AddQuestion,
    DeleteQuestion,
    UpdateQuestion
}