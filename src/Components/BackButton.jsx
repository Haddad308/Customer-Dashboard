import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BackButton = () => {
    return (

        <Link to={"/"} className="rounded-full flex items-center border-2 w-20 text-primary-400 border-primary-400 p-2 hover:text-primary-300 transition-all duration-300 ">
            <MdKeyboardArrowLeft size={20} />
            <p className="font-semibold ">Back</p>
        </Link>

    )
}

export default BackButton
