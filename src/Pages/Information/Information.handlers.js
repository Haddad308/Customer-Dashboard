

import axios from "axios";
import toast from "react-hot-toast";
const token = localStorage.getItem("userTokenC");


const notify = () => toast.success('User Data Updated successfully');
const BASE_URL = "https://highnox.site/highnox";


async function editUserInfo(UserInfo, setIsLoading) {
    setIsLoading(true)
    try {
        const response = await axios.put("/user", UserInfo);
        console.log(response.data);
        setIsLoading(false)
        notify();
    } catch (error) {
        console.error(error);
        setIsLoading(false)
    }
}

async function getUserData(setUserData, SetIsLoading) {
    SetIsLoading(true)
    let data = await axios.get(`${BASE_URL}/user`, {
        headers: {
            'token': token,
        }
    }
    ).catch((error) => {
        console.error("test 312", error);
        SetIsLoading(false)
    });

    if (data?.status === 200) {
        console.log(data.data);
        setUserData(data.data);
        SetIsLoading(false)
    }
}


function 
createFormData(data, file) {
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

