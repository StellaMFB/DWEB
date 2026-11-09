"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { submitInventoryForm } from "@/actions/actions"

export function AppDrawer() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  return (
    <Drawer open={open} onOpenChange={setOpen} showSwipeHandle={isMobile} swipeDirection={isMobile ? "down" : "right"}>
      <DrawerTrigger asChild>
        <Button className="bg-blue-500 mx-5 text-white" variant="outline">Entrada de Produtos</Button>
      </DrawerTrigger>
      <DrawerContent>
        <form className="w-full max-w-sm" action={submitInventoryForm}>
          <DrawerHeader>
            <DrawerTitle>Entradas de Produtos</DrawerTitle>
            <DrawerDescription>Registre uma entrada no estoque</DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 scroll-fade overflow-y-auto p-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-product">Nome do Produto</FieldLabel>
                <Input
                  id="form-product"
                  name="form-product"
                  type="text"
                  placeholder="Arroz branco 5kg"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-ean">EAN</FieldLabel>
                <Input
                  id="form-ean"
                  name="form-ean"
                  type="number"
                  placeholder="7896006711117"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-category">Categoria</FieldLabel>
                <Input
                  id="form-category"
                  name="form-category"
                  type="text"
                  placeholder="Alimentos"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-quantity">Quantidade</FieldLabel>
                <Input
                  id="form-quantity"
                  name="form-quantity"
                  type="number"
                  placeholder="0"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-price">Preço Unitário</FieldLabel>
                <Input
                  id="form-price"
                  name="form-price"
                  type="number"
                  step="0.01"
                  placeholder="0.0"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-profit">Acréscimo no preço (%)</FieldLabel>
                <Input
                  id="form-profit"
                  name="form-profit"
                  type="number"
                  placeholder="0"
                  required
                />
                <FieldDescription>
                  O percentual é aplicado sobre o preço unitário.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button type="submit" className="h-[34px] w-full">Adicionar Produto</Button>
              <Button variant="outline" className="w-full">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}