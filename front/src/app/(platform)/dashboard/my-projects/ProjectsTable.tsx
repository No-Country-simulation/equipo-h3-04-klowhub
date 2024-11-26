"use client"

import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import React from "react";
import { columns, users } from "./data";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type IUser = typeof users[number]

export function ProjectsTable() {
  const renderCell = React.useCallback((user: IUser, columnKey: keyof IUser) => {
    const cellValue = user[columnKey as keyof IUser];

    console.log({ cellValue });

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            name={cellValue}
          >
          </User>
        );
      case "monto":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">${cellValue}</p>
          </div>
        );
      case "plataforma":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-acento-400">ver detalle</p>
          </div>
        );
      case "tipo":
        return (
          // @ts-ignore
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="bordered">
            {cellValue}
          </Chip>
        );
      case "status":
        return (
          // @ts-ignore
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="solid">
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table classNames={{
      wrapper: "bg-transparent p-0 rounded-md shadow-none border-none",
      th: "rounded-none bg-white/10",
      // td: "pb-4",
      table: "[border-spacing:0_.25em] [border-collapse:separate]"
    }} aria-label="Example table with custom cells" className="gap-2">
      <TableHeader className="rounded-none" columns={columns}>
        {(column) => (
          <TableColumn className="font-light text-primary-50" key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody className="flex flex-col gap-1" items={users}>
        {(item) => (
          <TableRow className="bg-white/10" key={item.id}>
            {(columnKey) => <TableCell className="">{renderCell(item, columnKey as any)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
