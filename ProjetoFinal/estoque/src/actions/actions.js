"use server";

import { supabase } from "@/lib/supabase/client";
import { revalidatePath } from "next/cache";

function calcPrecoVenda(preco_compra, margem_lucro)
{
    preco_compra = Number(preco_compra);
    margem_lucro = Number(margem_lucro);
    return (preco_compra + preco_compra * (margem_lucro / 100)).toFixed(2);
}

export async function submitInventoryForm(formData) {
    const produto = formData.get("form-product");
    const ean = formData.get("form-ean");
    const categoria = formData.get("form-category");
    const quantidade = formData.get("form-quantity");
    const preco_compra = formData.get("form-price");
    const margem_lucro = formData.get("form-profit");
    const preco_venda = calcPrecoVenda(preco_compra, margem_lucro);

    const { data, error } = await supabase.from("Estoque").insert({
        produto: produto,
        ean: ean,
        categoria: categoria,
        quantidade: quantidade,
        preco_compra: preco_compra,
        margem_lucro: margem_lucro,
        preco_venda: preco_venda
    })

    if (data) console.log(data);
    if (error) console.log(error);

    revalidatePath("/");
}

export async function submitEditForm(formData) {
    const id = formData.get("id");
    const produto = formData.get("form-product");
    const ean = formData.get("form-ean");
    const categoria = formData.get("form-category");
    const quantidade = formData.get("form-quantity");
    const preco_compra = formData.get("form-price");
    const margem_lucro = formData.get("form-profit");
    const preco_venda = calcPrecoVenda(preco_compra, margem_lucro);

    const { data, error } = await supabase.from("Estoque").update({
        produto: produto,
        ean: ean,
        categoria: categoria,
        quantidade: quantidade,
        preco_compra: preco_compra,
        margem_lucro: margem_lucro,
        preco_venda: preco_venda
    }).eq("id", id);

    if (data) console.log(data);
    if (error) console.log(error);

    revalidatePath("/");
}

export async function readData() {
    const { data, error } = await supabase
        .from('Estoque')
        .select('*');

    if (error) {
        console.log('Erro ao buscar produtos:', error);
        return [];
    }

    return data;
}

export async function deleteData(id) 
{
    const { error } = await supabase
        .from("Estoque")
        .delete()
        .eq("id", id);

    if (error) {
        console.log('Erro ao deletar produto:', error);
        return;
    }

    revalidatePath("/");
}
