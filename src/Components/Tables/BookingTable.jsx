/* eslint-disable react/prop-types */
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Skeleton } from "@nextui-org/react";
import { EyeIcon } from "./EveIcon"; // Fixed import typo
import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteButton } from "../deleteButton";
import { deleteBooking } from "../../Pages/Dashboard/handlers";
import { tokenContext } from "../../contexts/AuthProvidor";



const columns = [
    { name: "NAME", uid: "name" },
    { name: "Customer", uid: "customer" },
    { name: "City", uid: "city" },
    { name: "Building", uid: "building" },
    { name: "Floor", uid: "floor" },
    { name: "room", uid: "room" },
    { name: "membership", uid: "membership" },
    { name: "room_price", uid: "room_price" },
    { name: "status", uid: "status" },
    { name: "Actions", uid: "actions" }, // Added Actions column
];


export default function BookingTable({ data, isLoading, handleDelete }) {

    const token = useContext(tokenContext);

    const [page, setPage] = useState(1);
    const rowsPerPage = 4;

    const pages = Math.ceil(data.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return data.slice(start, end);
    }, [page, data]);

    return (
        <Table aria-label="Example table with custom cells"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }

        >
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={items}>
                {!isLoading ? (item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            {item.name}
                        </TableCell>
                        <TableCell>
                            {item.customer}
                        </TableCell>
                        <TableCell>
                            {item.city}
                        </TableCell>
                        <TableCell>
                            {item.building}
                        </TableCell>
                        <TableCell>
                            {item.room_info[0]?.floor}
                        </TableCell>
                        <TableCell>
                            {item.room_info[0]?.room}
                        </TableCell>

                        <TableCell>
                            {item.room_info[0]?.membership}
                        </TableCell>
                        <TableCell>
                            {item.room_info[0]?.room_price}
                        </TableCell>
                        <TableCell>
                            {item?.status === "cancel" && <Chip color="danger" variant="flat">Cancelled</Chip>}
                            {item?.status === "draft" && <Chip color="warning" variant="flat">Draft</Chip>}
                            {item?.status === "sale" && <Chip color="success" variant="flat">Confirmed</Chip>}
                        </TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Details">
                                    <Link to={`/booking/${item.id}`} >
                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                            <EyeIcon />
                                        </span>
                                    </Link>
                                </Tooltip>
                                <Tooltip color="danger" content="Delete user">
                                    <DeleteButton onDelete={() => {
                                        deleteBooking(item.id, handleDelete, token)
                                    }} />
                                </Tooltip>
                            </div>
                        </TableCell>

                    </TableRow>
                ) : [...Array(5)].map((_, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
