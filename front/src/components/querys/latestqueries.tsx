'use client'

import {
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/Button"

interface Query {
  id: string
  title: React.ReactNode;
  author: {
    name: string
    avatar: string
  }
  date: string
  platform: "AppSheet" | "Power Apps"
  status: "Solucionada" | "Pendiente"
}

const columns = [
  { key: "title", label: "Consulta" },
  { key: "author", label: "Autor" },
  { key: "date", label: "Fecha" },
  { key: "platform", label: "Plataforma" },
  { key: "status", label: "Estado" },
];

const queries: Query[] = [
  {
    id: "1",
    title: (
      <>
        Como crear y configurar una cuenta en appsheet
        <br />
        <br />
        gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,
        gula vel nisi elementum, sed lacinia lacus.
      </>
    ),
    author: {
      name: "Jose Rodriguez",
      avatar: "/avatar.png",
    },
    date: "24/09/2024",
    platform: "AppSheet",
    status: "Solucionada",
  },
  {
    id: "2",
    title: (
      <>
        Como crear y configurar una cuenta en appsheet
        <br />
        <br />
        gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,
        gula vel nisi elementum, sed lacinia lacus.
      </>
    ),
    author: {
      name: "Valentin Caceres",
      avatar: "/avatar.png",
    },
    date: "24/09/2024",
    platform: "AppSheet",
    status: "Pendiente",
  },
  {
    id: "3",
    title: (
      <>
        Como crear y configurar una cuenta en appsheet
        <br />
        <br />
        gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,
        gula vel nisi elementum, sed lacinia lacus.
      </>
    ), author: {
      name: "Romualdo Rivarola",
      avatar: "/avatar.png",
    },
    date: "24/09/2024",
    platform: "Power Apps",
    status: "Solucionada",
  },
]

export default function LatestQueries() {
  const renderCell = React.useCallback((query: Query, columnKey: React.Key): React.ReactNode => {
    switch (columnKey) {
      case "title":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-white">{query.title}</p>

          </div>
        )
      case "author":
        return (
          <User
            name={query.author.name}
            avatarProps={{
              src: query.author.avatar,
              size: "sm",
            }}
          />
        )
      case "platform":
        return (
          <div className="flex items-center gap-2 text-white">
            {query.platform === "AppSheet" ? (
              <Image
                src="/icon-appsheet.png"
                alt="AppSheet"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/icon-powerapps.png"
                alt="Power Apps"
                width={24}
                height={24}
              />
            )}
            {query.platform}
          </div>
        )
      case "status":
        return (
          <Chip
            color={query.status === "Solucionada" ? "success" : "warning"}
            size="sm"
          >
            {query.status}
          </Chip>
        )
      default:
        return <span className="text-white">{String(query[columnKey as keyof Query])}</span>
    }
  }, [])

  return (
    <Card className="bg-[#1F2937] p-10 w-full mx-auto rounded-lg shadow-md">
      <Table className="rounded-lg "
        aria-label="Últimas consultas"
        removeWrapper
        shadow="md"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key} className="h-10 bg-white bg-opacity-10 text-white  text-md border-collapse">
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody items={queries} className="rounded-lg">
          {(item) => (
            <TableRow key={item.id} className="bg-white bg-opacity-10   border-t-8 border-transparent rounded-lg shadow-md transition-shadow hover:shadow-lg">
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-6">
        <Button size="big">
          Ir a consultas
        </Button>
      </div>
    </Card>
  );
}
