import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import test3 from "../../assets/fa60f4784fc700982548e2679937a694.jpeg"
import test4 from "../../assets/test4.jpeg"
import { useContext } from "react";
import { sideBarOpen } from "../../contexts/SideBarOpen";
import Features from "../Dashboard/Features";
import CardDescription from "../Dashboard/CardDescription";


const OfficesCards = () => {
  const [sidebarOpens,] = useContext(sideBarOpen);
  const list = [
    {
      title: "Orange",
      img: test3,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: test3,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: test3,
      price: "$10.00",
    }, {
      title: "Raspberry",
      img: test3,
      price: "$10.00",
    }, {
      title: "Raspberry",
      img: test3,
      price: "$10.00",
    }
  ];

  return (
    <div className={`gap-3 grid grid-cols-2  ${sidebarOpens ? "sm:grid-cols-3" : "sm:grid-cols-4"} `}>
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={test4}
            />
          </CardBody>
          <CardFooter className="text-small flex flex-col items-start gap-2 p-3">
            <div className="flex justify-between  w-full" >
              <b>{item.title}</b>

            </div>
            <CardDescription />

            <Features />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default OfficesCards
