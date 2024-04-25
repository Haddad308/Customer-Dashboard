/* eslint-disable react/prop-types */
import { Modal, Input, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Select, SelectItem } from "@nextui-org/react";
import { EditIcon } from "../../Components/Tables/EditIcon";
import { UpdateQuestion } from "./FAQ.handlers";


export default function EditQ({ data, handleUpdate }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const formHandler = useFormik({
        initialValues: {
            id: "",
            name: "",
            description: "",
        },
        validationSchema: Yup.object({
            id: Yup.string()
                .required('Name is required'),
            name: Yup.string()
                .required('Name is required'),
            description: Yup.string()
                .required('description is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            UpdateQuestion(values, handleUpdate)
            resetForm();
        }
    });

    return (
        <>
            
            <Button onPress={onOpen}  color="primary" className="font-semibold">
                <EditIcon />
                <p>Edit</p>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add a new Question</ModalHeader>
                            <form onSubmit={formHandler.handleSubmit}>
                                <ModalBody>
                                    <div>
                                        <Select
                                            id="id"
                                            name="id"
                                            label="Select a Question"
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
                                    <Button color="secondary" type="submit" onPress={() => {
                                        if (!Object.keys(formHandler.errors).length)
                                            onClose();
                                    }}>
                                        Update
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
