import { Button, Input, Textarea } from "@nextui-org/react"
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="p-5  grid grid-cols-5" >
            <div className="bg-white rounded-lg p-5 flex flex-col gap-3 col-span-3 " >
                <h1 className="text-xl font-semibold flex items-center gap-2" > <CiMail size={28} className="pt-1" />
                    Send us a message</h1>
                <div className=" grid grid-cols-2 gap-3" >
                    <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
                    <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
                </div>
                <div className=" grid grid-cols-2 gap-3" >
                    <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
                    <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
                </div>
                <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
                <Textarea
                    label="Description"
                    variant="bordered"
                    placeholder="Enter your description"
                    disableAnimation
                    disableAutosize
                    className="py-2"
                />
                <Button color="primary" >
                    Send
                </Button>
            </div>
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
        </div>
    )
}

export default ContactUs
