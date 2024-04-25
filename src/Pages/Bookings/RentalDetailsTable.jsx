/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import calcTotal from "./calcTotal.handler";

export default function RentalDetailsTable({ rooms, foods }) {
    return (
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Date</TableColumn>
                <TableColumn>Product</TableColumn>
                <TableColumn>QTY</TableColumn>
                <TableColumn>Price</TableColumn>
                <TableColumn>Total</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
                {rooms?.map(({ id, start_date, qty, room_price }) => (
                    <TableRow key={id}>
                        <TableCell>{start_date}</TableCell>
                        <TableCell>Room</TableCell>
                        <TableCell>{qty}</TableCell>
                        <TableCell>{room_price}</TableCell>
                        <TableCell>{qty * room_price}</TableCell>
                    </TableRow>
                ))}
                {foods?.map(({ id, start_date, name, qty, price }) => (
                    <TableRow key={id}>
                        <TableCell>{start_date}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{qty}</TableCell>
                        <TableCell>{price}</TableCell>
                        <TableCell>{qty * price}</TableCell>
                    </TableRow>
                ))}
                {rooms?.length + foods?.length === 0 ? "" : <TableRow key="total">
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className="font-bold" >{calcTotal(rooms, foods)}</TableCell>
                </TableRow>}

            </TableBody>
        </Table>
    );
}
