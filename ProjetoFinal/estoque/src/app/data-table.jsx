"use client"

import { useTable } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from "@/components/ui/input-group"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from "@/components/ui/select"

import { features } from "./data-table-features"

import { SearchIcon } from "lucide-react"
import { AppDrawerEdit } from "@/components/app-drawer-edit"

export function DataTable({ columns, data }) {
  const table = useTable({
    features,
    data,
    columns,
  })

  const categories = [
    { label: "Categorias", value: null },
    { label: "Alimentos", value: "alimentos" },
    { label: "Higiene", value: "higiene" },
    { label: "Laticínios", value: "laticínios" },
    { label: "Limpeza", value: "limpeza" }
  ]

  const status = [
    { label: "Status", value: null },
    { label: "Normal", value: "normal" },
    { label: "Baixo", value: "baixo" },
    { label: "Crítico", value: "crítico" },
    { label: "Sem estoque", value: "sem estoque" }
  ]

  return (
    <div className="overflow-hidden rounded-md border text-center bg-white mx-5">
      <Table>
        <TableHeader>
          <TableRow className="border-white">
            <TableCell colSpan={columns.length} className="p-0">
              <div className="grid grid-cols-[10fr_1fr_1fr] gap-3 m-3">
                <InputGroup className="py-5">
                  <InputGroupInput placeholder="Pesquisar Produto" />
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                </InputGroup>

                <Select items={categories}>
                  <SelectTrigger className="w-full py-5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select items={status}>
                  <SelectTrigger className="w-full py-5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {status.map((status1) => (
                        <SelectItem key={status1.value} value={status1.value}>
                          {status1.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </TableCell>
          </TableRow>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="px-13 py-4">
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-4">
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
                <AppDrawerEdit data={data[row.id]}/>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
