import { Button, Input, Textarea } from "@nextui-org/react"

const ContactUs = () => {
    return (
        <div className="p-5  " >
            <div className="bg-white rounded-lg p-5 flex flex-col gap-3" >
                <h1 className="text-xl font-semibold" >Contact Us</h1>
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
                <Button variant="shadow" color="primary" >
                    Hamo
                </Button>
            </div>
        </div>
    )
}

export default ContactUs
