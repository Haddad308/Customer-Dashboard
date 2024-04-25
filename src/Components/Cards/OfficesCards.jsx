/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { useContext } from "react";
import { sideBarOpen } from "../../contexts/SideBarOpen";
import Features from "../Dashboard/Features";
import CardDescription from "../Dashboard/CardDescription";
import { Link } from "react-router-dom";


const OfficesCards = ({ officeRooms }) => {
  const [sidebarOpens,] = useContext(sideBarOpen);


  return (
    <div className={`gap-3 grid grid-cols-2  ${sidebarOpens ? "sm:grid-cols-3" : "sm:grid-cols-4"} `}>
      {officeRooms?.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <Link to={`/office/${item.id}`} >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className="w-full object-fill h-[140px]"
                src={item && item.image ? `http://highnox.site${item.image}` : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
              <div className="flex justify-between  w-full" >
                <b>{item.name}</b>
              </div>
              <CardDescription text={"lorem lorem lorem loremlorem loremlorem loremlorem lorem"} />
              <Features />
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default OfficesCards
