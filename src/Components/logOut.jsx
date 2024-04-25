/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export function LogOut() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    let navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("userTokenC");
        navigate("/login")
    }

    return (
        <>
            <li onClick={onOpen} className="flex cursor-pointer items-center p-2 mx-3 mb-1  text-white hover:text-red-500 rounded-lg  transition duration-75 hover:bg-[#66b0de] focus:bg-[#66b0de] group">
                <TbLogout2 className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-red-500 " />
                <span className="flex-1 ms-3 whitespace-nowrap text-lg">Logout</span>
            </li>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log out</ModalHeader>
                            <ModalBody>
                                Are you sure you want to log out?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="danger" onPress={() => {
                                    logOut()
                                    onClose()
                                }}

                                >
                                    Yes
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}