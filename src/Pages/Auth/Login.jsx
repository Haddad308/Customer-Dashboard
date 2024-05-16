import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from 'yup';
import axios from "axios";
import { Button, Input } from "@nextui-org/react"
import { EyeSlashFilledIcon } from "../../Components/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../Components/Icons/EyeFilledIcon";
import { tokenContext } from "../../contexts/AuthProvidor";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [, SetToken] = useContext(tokenContext);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const navigate = useNavigate();

    async function loginFun(UserData) {
        setIsLoading(true)
        setError("");
        try {
            const response = await axios.post("https://highnox.site/highnox/login", UserData);
            const token = response?.data.data.token;
            setIsLoading(false)
            navigate('/');
            SetToken(token);
            localStorage.setItem('userTokenC', token);
        } catch (error) {
            console.error(error);
            setError(error?.response?.data?.message);
            setIsLoading(false)
        }
    }

    const formHandler = useFormik({
        initialValues: {
            db: "",
            login: "",
            password: ""
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('password is required'),
            db: Yup.string()
                .required('database name is required')
        }),
        onSubmit: (values) => {
            loginFun(values);
        }
    });

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <form onSubmit={formHandler.handleSubmit} className="flex flex-col justify-center " >
                    <h1 className="text-2xl font-semibold mb-4 text-center">Login to Highnox Dashboard</h1>
                    <div>
                        <Input
                            id="login"
                            type="login"
                            variant="bordered"
                            labelPlacement="outside"
                            label="login"
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            value={formHandler.values.login}
                        />
                        {formHandler.touched.login && formHandler.errors.login ? (
                            <div className='text-red-600' >{formHandler.errors.login}</div>
                        ) : null}
                    </div>
                    <div className="mt-3">
                        <Input
                            id="password"
                            variant="bordered"
                            labelPlacement="outside"
                            label="password"
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            value={formHandler.values.password}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                        />
                        {formHandler.touched.password && formHandler.errors.password ? (
                            <div className='text-red-600' >{formHandler.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mt-3">
                        <Input
                            id="db"
                            variant="bordered"
                            labelPlacement="outside"
                            label="database"
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            value={formHandler.values.db}
                            type="text"
                        />
                        {formHandler.touched.db && formHandler.errors.db ? (
                            <div className='text-red-600' >{formHandler.errors.db}</div>
                        ) : null}
                    </div>
                    <Button color="primary" type="submit" isLoading={isLoading} className="mt-4 font-semibold text-medium" >
                        Login
                    </Button>
                    {error ? <div className="bg-danger-300 p-3 text-white font-semibold rounded-xl mt-5" >
                        <p>
                            {error}
                        </p>
                    </div> : ""}
                </form>
            </div>
        </div>
    )
}

export default Login
