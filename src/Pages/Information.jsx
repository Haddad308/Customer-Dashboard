import { Avatar, Button, Input } from "@nextui-org/react"

const Information = () => {
  return (
    <div className="p-5" >
      <div className="bg-white rounded-lg p-5 flex flex-col gap-1" >
        <h1 className="text-3xl font-semibold pb-3" >Account</h1>
        <div className="flex items-center gap-3 pb-3" >
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-24 h-24  text-large" />
          <Button color="primary" variant="solid">
            Edit
          </Button>
          {/* <Button color="danger" variant="ghost">
            Delete
          </Button>  */}
        </div>
        <h1 className="text-2xl font-semibold" >
          Personal Information
        </h1>
        <div className=" grid grid-cols-2 gap-3 items-center justify-center " >
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
        </div>
        <div className=" grid grid-cols-2 gap-3" >
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
        </div>
        <div className=" grid grid-cols-2 gap-3" >
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
        </div>
        <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
        <h1 className="text-2xl font-semibold pt-3">Invoice address</h1>
        <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
        <div className=" grid grid-cols-2 gap-3" >
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
          <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
        </div>
        <Input type="email" variant="bordered" labelPlacement="outside" label="Email" />
      <div className="flex gap-4 pt-3  justify-center" >
          <Button variant="solid" color="primary" >
            Save
          </Button>
          <Button variant="ghost" color="danger" >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Information
