"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { features } from "./data-table-features"

const columnHelper = createColumnHelper(features)

export const columns = [
  columnHelper.accessor("produto", {
    header: "Nome do Produto",
  }),
  columnHelper.accessor("ean", {
    header: "EAN",
  }),
  columnHelper.accessor("categoria", {
    header: "Categoria",
  }),
  columnHelper.accessor("quantidade", {
    header: "Quantidade",
  }),
  columnHelper.accessor("preco_compra", {
    header: "Preço de Compra",
  }),
  columnHelper.accessor("margem_lucro", {
    header: "Margem de Lucro",
  }),
  columnHelper.accessor("preco_venda", {
    header: "Preço de Venda",
  }),
]