import toast from "react-hot-toast";
import { instance } from "../../Network/axios";

const notify = () => toast.success('User Data Updated successfully');


async function editUserInfo(UserInfo, setIsLoading, token, lang) {
    setIsLoading(true);
    try {
        const response = await instance.put(`/update_my_data?token=${token}&lang=${lang}`, UserInfo, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            withCredentials: false
        });
        console.log(response.data);
        setIsLoading(false);
        // Assuming notify() is defined or imported somewhere
        notify();
    } catch (error) {
        console.error(error);
        setIsLoading(false);
    }
}


async function getUserData(setUserData, SetIsLoading, token, lang) {
    SetIsLoading(true)
    let data = await instance.get(`/get_my_data?token=${token}&lang=${lang}`, {
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
        setUserData(data.data.data);
        SetIsLoading(false)
    }
}


function createFormData(data, file) {
    const formData = new FormData();

    // Append data object to FormData
    for (let key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            formData.append(key, data[key]);
        }
    }

    // Append file to FormData
    if (file)
        formData.append('image', file);

    return formData;
}

export {
    editUserInfo,
    getUserData,
    createFormData
}

