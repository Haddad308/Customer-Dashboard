/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export function CancelBooking({ onDelete }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>

            <Button onClick={onOpen} variant="ghost" color="danger" className="rounded-full">
                Cancel
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Cancel Floor Map</ModalHeader>
                            <ModalBody>
                                Are you sure you want to cancel?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="danger" onPress={() => {
                                    onDelete()
                                    onClose()
                                }}

                                >
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}