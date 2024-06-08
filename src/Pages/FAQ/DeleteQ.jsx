/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { DeleteIcon } from "../../Components/Tables/DeleteIcon";
import { Select, SelectItem } from "@nextui-org/react";
import { DeleteQuestion } from "./FAQ.handlers";
import { useContext } from "react";
import { tokenContext } from "../../contexts/AuthProvidor";


export default function DeleteQ({ handleUpdate, data }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const token = useContext(tokenContext);

    const formHandler = useFormik({
        initialValues: {
            id: "",
        },
        validationSchema: Yup.object({
            id: Yup.string()
                .required('Name is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log("Hew 1");
            DeleteQuestion(values, handleUpdate, token);
            resetForm();
        }
    });

    return (
        <>
            <Button onPress={onOpen} color="danger" variant="ghost" >
                <DeleteIcon />
                Delete
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Delete a Question</ModalHeader>
                            <form onSubmit={formHandler.handleSubmit}>
                                <ModalBody>
                                    <div>
                                        <Select
                                            id="id"
                                            name="id"
                                            label="Select a Question"
                                            className="max-w-xs"
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.id}
                                        >
                                            {data.map(({ id, name }) => (
                                                <SelectItem key={id} value={id}>
                                                    {name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        {formHandler.touched.id && formHandler.errors.id ? (
                                            <div className='text-red-600' >{formHandler.errors.id}</div>
                                        ) : null}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="default" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="danger" type="submit" onPress={() => {
                                        if (!Object.keys(formHandler.errors).length)
                                            onClose();
                                    }}>
                                        Delete
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
