/* eslint-disable react/prop-types */
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination, Skeleton, Tooltip } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon } from "../../Components/Tables/EveIcon";

const columns = [
    { name: "invoice_date", uid: "invoice_date" },
    { name: "status", uid: "status" },
    { name: "total_amount", uid: "total_amount" }, // Added Actions column
    { name: "view", uid: "view" },
];



export default function InvoiceTable({ data, isLoading }) {


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
            classNames={{
                wrapper: "min-h-[222px]",
            }}
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
                            {item.invoice_date}
                        </TableCell>

                        <TableCell>
                            <Chip className="capitalize" color={item.status === "draft" ? "danger" : "success"} size="sm" variant="flat">
                                {item.status}
                            </Chip>
                        </TableCell>
                        <TableCell>
                            {item.amount_due}
                        </TableCell>
                        <TableCell>
                            <Tooltip content="Details">
                                <Link to={`https://highnox.site/${item.url}`} >
                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <EyeIcon />
                                    </span>
                                </Link>
                            </Tooltip>
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


                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
