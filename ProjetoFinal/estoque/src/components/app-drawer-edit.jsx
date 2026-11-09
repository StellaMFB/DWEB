"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Ellipsis } from "lucide-react"
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
import { deleteData, submitEditForm } from "@/actions/actions"

export function AppDrawerEdit({ data }) {
    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    return (
        <Drawer open={open} onOpenChange={setOpen} showSwipeHandle={isMobile} swipeDirection={isMobile ? "down" : "right"}>
            <DrawerTrigger asChild>
                <Button variant="ghost" className="mx-8">
                    <Ellipsis />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <form className="w-full max-w-sm" action={submitEditForm}>
                    <DrawerHeader>
                        <DrawerTitle>Editar produto</DrawerTitle>
                        <DrawerDescription>{data.produto}</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex-1 scroll-fade overflow-y-auto p-4">
                        <FieldGroup>
                            <Field>
                                <Input
                                    type="hidden"
                                    id="id"
                                    name="id"
                                    defaultValue={data.id}
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-product">Nome do Produto</FieldLabel>
                                <Input
                                    id="form-product"
                                    name="form-product"
                                    type="text"
                                    placeholder={data.produto}
                                    defaultValue={data.produto}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-ean">EAN</FieldLabel>
                                <Input
                                    id="form-ean"
                                    name="form-ean"
                                    type="number"
                                    placeholder={data.ean}
                                    defaultValue={data.ean}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-category">Categoria</FieldLabel>
                                <Input
                                    id="form-category"
                                    name="form-category"
                                    type="text"
                                    placeholder={data.categoria}
                                    defaultValue={data.categoria}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-quantity">Quantidade</FieldLabel>
                                <Input
                                    id="form-quantity"
                                    name="form-quantity"
                                    type="number"
                                    placeholder={data.quantidade}
                                    defaultValue={data.quantidade}
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
                                    placeholder={data.preco_compra}
                                    defaultValue={data.preco_compra}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-profit">Acréscimo no preço (%)</FieldLabel>
                                <Input
                                    id="form-profit"
                                    name="form-profit"
                                    type="number"
                                    placeholder={data.margem_lucro}
                                    defaultValue={data.margem_lucro}
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
                            <Button type="submit" className="h-[34px] w-full">Salvar alterações</Button>
                            <Button variant="outline" className="w-full">Cancelar</Button>
                            <Button onClick={() => deleteData(data.id)} variant="destructive" className="w-full my-4">Deletar produto</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </form>
            </DrawerContent>
        </Drawer>
    )
}