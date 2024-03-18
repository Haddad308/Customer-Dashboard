import { useContext } from "react"
import testImage from "../../assets/cc529d23a558ccecb3ab8338ecbb449e.jpeg"
import { sideBarOpen } from "../../contexts/SideBarOpen"

const Event = () => {

    const [sidebarOpens,] = useContext(sideBarOpen)
    const imageSize = sidebarOpens ? 160 : 193;
    return (
        <div className="bg-white w-full flex gap-3 rounded-lg overflow-hidden" >
            <img src={testImage} alt="testImage" width={imageSize} />
            <div className="py-2 pe-1 flex flex-col justify-center" >
                <h1 className="font-semibold mb-1" >Break fast at Nyrbroplan</h1>
                <p>Lorem ipsum, dolor exercitationem natus explicabo amet suscipit! Deleniti unde aut in sed, at sapiente molestias nam dolores dolorum reiciendis consequuntur officiis!</p>
            </div>
        </div>
    )
}

export default Event
