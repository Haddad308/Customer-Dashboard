import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { MdOutlineAccessTime } from "react-icons/md";

const AvailableTime = () => {


    return (
        <Popover placement="bottom" showArrow={true} backdrop="opaque" onClick={(e) => {
            e.preventDefault()
        }}>
            <PopoverTrigger>
                <Button className="my-1 self-center" color="primary" onClick={(e) => {
                    e.preventDefault()
                }}>  Available Time
                    <MdOutlineAccessTime />
                </Button>
            </PopoverTrigger>
            <PopoverContent onClick={(e) => {
                e.preventDefault()
            }}>
                <div className={`grid  grid-cols-4 gap-1 py-2`} >
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                    <p className="bg-[#248ed0] p-1 rounded-lg text-white transition-all duration-300 hover:bg-success-500" >13:00-14:00</p>
                </div>
            </PopoverContent>
        </Popover>

    )
}

export default AvailableTime
