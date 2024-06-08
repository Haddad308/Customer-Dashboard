import toast from "react-hot-toast";
import { instance } from "../../Network/axios";
const added = () => toast.success('New Question added successfully');
const deleted = () => toast.success('Question deleted successfully');
const updates = () => toast.success('Question updated successfully');



async function getFAQ(setFAQ, SetIsLoading, token) {
    SetIsLoading(true)
    let data = await instance
        .get(`/fandq/read?token=${token}`, {
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

async function AddQuestion(values, SetIsLoading, callback, token) {
    SetIsLoading(true)
    let data = await instance
        .post(`/fandq/create?token=${token}`, values, {
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

async function DeleteQuestion({ id }, callback, token) {
    console.log("my ID", id);

    try {
        let response = await instance
            .request({
                method: 'delete',
                url: `/fandq/delete?token=${token}&f_and_q_id=${id}`,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                withCredentials: false
            });

        if (response?.status === 200) {
            deleted();
            callback();
        }
    } catch (error) {
        console.error(error);
    }
}


async function UpdateQuestion(values, callback, token) {

    let data = await instance
        .put(`/fandq/update?token=${token}&f_and_q_id=${values.id}`, values, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
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