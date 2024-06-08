/* eslint-disable react/prop-types */
import { Modal, Input, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext, useState } from "react";
import { AddQuestion } from "./FAQ.handlers";
import { tokenContext } from "../../contexts/AuthProvidor";


export default function AddQ({ handleDelete }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const token = useContext(tokenContext);


    const formHandler = useFormik({
        initialValues: {
            name: "",
            description: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            description: Yup.string()
                .required('description is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            AddQuestion(values, setIsLoading, handleDelete, token);
            resetForm();
        }
    });

    return (
        <>
            <Button onPress={onOpen} color="success" variant="light" >
                <FaPlus />
                Add
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add a new Question</ModalHeader>
                            <form onSubmit={formHandler.handleSubmit}>
                                <ModalBody>
                                    <div>
                                        <Input
                                            id="name"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            label="name"
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.name}
                                        />
                                        {formHandler.touched.name && formHandler.errors.name ? (
                                            <div className='text-red-600' >{formHandler.errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Input
                                            id="description"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            label="description"
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.description}
                                        />
                                        {formHandler.touched.description && formHandler.errors.description ? (
                                            <div className='text-red-600' >{formHandler.errors.description}</div>
                                        ) : null}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" type="submit" isLoading={isLoading} onPress={() => {
                                        if (!Object.keys(formHandler.errors).length)
                                            onClose();
                                    }}>
                                        Create
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
