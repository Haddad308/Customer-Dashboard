/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { createOrder, getProducts } from "../Dashboard/handlers";
import { tokenContext } from "../../contexts/AuthProvidor";
import { useLang } from "../../hooks/uselang";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Counter from "./Counter";

export function AddProduct({ id, room_id }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [products, setProducts] = useState([]);
    const [, setIsLoading] = useState(true);
    const token = useContext(tokenContext);
    const lang = useLang();
    const [order, setOrder] = useState(
        {
            booking_id: id,
            foods: [],
        }
    );



    const formHandler = useFormik({
        initialValues: order,
        enableReinitialize: true, // Ensures formik reinitializes values on state change
        validationSchema: Yup.object({
            foods: Yup.array().min(1, "Please select at least one food item").required("Please select at least one food item"),
        }),
        onSubmit: (values) => {
            console.log("hhhh", values);
            createOrder(values, token)
        }
    });

    useEffect(() => {
        getProducts(setProducts, setIsLoading, token, lang)
    }, [token, lang])

    useEffect(() => {
        setOrder(prevOrder => ({
            ...prevOrder,
            booking_id: id
        }));
    }, [id]);


    useEffect(() => {
        console.log("Order updated:", order);
    }, [order]);

    useEffect(() => {
        console.log("Formik values:", formHandler.values);
    }, [formHandler.values]);


    return (
        <>

            <Button onClick={onOpen} variant="ghost" color="success" className="rounded-full">
                Add product +
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    <form onSubmit={formHandler.handleSubmit} className="flex flex-col gap-4" >
                        <ModalHeader className="flex flex-col gap-1">Cancel Floor Map</ModalHeader>
                        <ModalBody>
                            <h1 className="text-xl" >Food</h1>
                            <div>
                                {products?.food?.map(({ id, name, price, image }, index) => (
                                    <div key={index} className="flex gap-2 items-center justify-between" >
                                        <div className="flex justify-center gap-2 items-center">
                                            <img src={"https://highnox.site/" + image[0]} alt="img" className="rounded-xl" width={60} height={60} />
                                            <div className="flex flex-col" >
                                                <p>{name}</p>
                                                <p>{price}$</p>
                                            </div>
                                        </div>
                                        <Counter order={order} setOrder={setOrder} productId={id} roomId={room_id} />
                                    </div>
                                ))}
                            </div>
                            <h1 className="text-xl" >deserts</h1>
                            <div>
                                {products?.deserts?.map(({ id, name, price, image }, index) => (
                                    <div key={index} className="flex gap-2 items-center justify-between" >
                                        <div className="flex justify-center gap-2 items-center">
                                            <img src={"https://highnox.site/" + image[0]} alt="img" className="rounded-xl" width={60} height={60} />
                                            <div className="flex flex-col" >
                                                <p>{name}</p>
                                                <p>{price}$</p>
                                            </div>
                                        </div>
                                        <Counter order={order} setOrder={setOrder} productId={id} roomId={room_id} />
                                    </div>
                                ))}
                            </div>
                            <h1 className="text-xl" >coffe</h1>
                            <div>
                                {products?.coffe?.map(({ id, name, price, image }, index) => (
                                    <div key={index} className="flex gap-2 items-center justify-between" >
                                        <div className="flex justify-center gap-2 items-center">
                                            <img src={"https://highnox.site/" + image[0]} alt="img" className="rounded-xl" width={60} height={60} />
                                            <div className="flex flex-col" >
                                                <p>{name}</p>
                                                <p>{price}$</p>
                                            </div>
                                        </div>
                                        <Counter order={order} setOrder={setOrder} productId={id} roomId={room_id} />
                                    </div>
                                ))}
                            </div>
                            <h1 className="text-xl" >snacks</h1>
                            <div>
                                {products?.snacks?.map(({ id, name, price, image }, index) => (
                                    <div key={index} className="flex gap-2 items-center justify-between" >
                                        <div className="flex justify-center gap-2 items-center">
                                            <img src={"https://highnox.site/" + image[0]} alt="img" className="rounded-xl" width={60} height={60} />
                                            <div className="flex flex-col" >
                                                <p>{name}</p>
                                                <p>{price}$</p>
                                            </div>
                                        </div>
                                        <Counter order={order} setOrder={setOrder} productId={id} roomId={room_id} />
                                    </div>
                                ))}
                            </div>

                            <div>
                                {formHandler.errors.foods && formHandler.touched.foods && <p className="text-red-500" >{formHandler.errors.foods}</p>}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" >
                                Close
                            </Button>
                            <Button color="danger" type="submit">
                                Confirm
                            </Button>

                        </ModalFooter>


                    </form>
                </ModalContent>
            </Modal >
        </>
    );
}
