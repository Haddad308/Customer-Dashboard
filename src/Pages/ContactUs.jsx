/* eslint-disable no-unused-vars */
import { Button, Input, Textarea } from "@nextui-org/react"
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import axios from "axios";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import toast, { Toaster } from "react-hot-toast";
import { tokenContext } from "../contexts/AuthProvidor";
const notify = () => toast.success('Thanks for contacting us!');


const ContactUs = () => {

    const [isLoading, setIsLoading] = useState(false);
    const token = useContext(tokenContext);

    async function contactUsFun(UserData, token) {
        setIsLoading(true)
        try {
            const response = await axios.post(`https://highnox.site/highnox/contact_us?token=${token}`, UserData, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                data: JSON.stringify({}),
                withCredentials: false
            });
            console.log(response.data);
            setIsLoading(false)
            notify();
        } catch (error) {
            console.log(error);
            console.error(error);
            setIsLoading(false)
        }
    }

    const formHandler = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
            phone: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Message is required'),
            phone: Yup.string()
                .required('Phone is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            contactUsFun(values, token);
            resetForm();
        }
    });

    return (
        <>
            <Toaster />
            <div className="p-5 grid grid-cols-5">
                <form onSubmit={formHandler.handleSubmit} className="bg-white rounded-lg p-5 flex flex-col justify-between gap-3 col-span-3 " >
                    <h1 className="text-xl font-semibold flex items-center gap-2" > <CiMail size={28} className="pt-1" />
                        Send us a message</h1>
                    <div className=" grid grid-cols-2 gap-3" >
                        <div>
                            <Input
                                id="email"
                                type="email"
                                variant="bordered"
                                labelPlacement="outside"
                                label="email"
                                onChange={formHandler.handleChange}
                                onBlur={formHandler.handleBlur}
                                value={formHandler.values.email}
                            />
                            {formHandler.touched.email && formHandler.errors.email ? (
                                <div className='text-red-600' >{formHandler.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <Input
                                id="phone"
                                type="phone"
                                variant="bordered"
                                labelPlacement="outside"
                                label="phone Number"
                                onChange={formHandler.handleChange}
                                onBlur={formHandler.handleBlur}
                                value={formHandler.values.phone}
                            />
                            {formHandler.touched.phone && formHandler.errors.phone ? (
                                <div className='text-red-600' >{formHandler.errors.phone}</div>
                            ) : null}
                        </div>
                    </div>


                    <Input
                        id="name"
                        type="Name"
                        variant="bordered"
                        labelPlacement="outside"
                        label="Name"
                        onChange={formHandler.handleChange}
                        onBlur={formHandler.handleBlur}
                        value={formHandler.values.name}
                    />
                    {formHandler.touched.name && formHandler.errors.name ? (
                        <div className='text-red-600' >{formHandler.errors.name}</div>
                    ) : null}
                    <Textarea
                        id="message"
                        variant="bordered"
                        placeholder="Enter your message here"
                        disableAnimation
                        disableAutosize
                        className="py-2"
                        onChange={formHandler.handleChange}
                        onBlur={formHandler.handleBlur}
                        value={formHandler.values.message}
                    />
                    {formHandler.touched.message && formHandler.errors.message ? (
                        <div className='text-red-600' >{formHandler.errors.message}</div>
                    ) : null}
                    <Button color="primary" type="submit" isLoading={isLoading} >
                        Send
                    </Button>
                </form>
                <div className="bg-primary rounded-lg  rounded-l-none p-5 flex flex-col gap-3 col-span-2" >
                    <h1 className="text-white text-xl font-semibold flex items-center gap-2"  ><RiContactsBook2Line size={25} className="pt-1" />Contact Us</h1>
                    <p className="text-white" >In order to get in touch with us via the following methods:</p>
                    <div className="flex flex-col pt-7 gap-7">
                        <div className="flex items-center gap-2" >
                            <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                                <IoLocationSharp className="text-primary" />
                            </div>
                            < p className="text-white"> Address: <span className="text-gray-200" >128 West 21th Street, New York</span></p>
                        </div>
                        <div className="flex items-center gap-2" >
                            <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                                <FaPhone className="text-primary" />
                            </div>
                            < p className="text-white"> Phone: <span className="text-gray-200" >+01281982770</span></p>
                        </div>
                        <div className="flex items-center gap-2" >
                            <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                                <FaTelegramPlane className="text-primary" />
                            </div>
                            < p className="text-white"> Email: <span className="text-gray-200" >melhaddad308@gmail.com</span></p>
                        </div>
                        <div className="flex items-center gap-2" >
                            <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                                <FaEarthAmericas className="text-primary" />
                            </div>
                            < p className="text-white"> Website: <span className="text-gray-200" >www.haddad.com</span></p>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default ContactUs
