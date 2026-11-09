"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./style2.css";

export default function Inicio() {
    const router = useRouter();
    const [emailUsuario, setEmailUsuario] = useState("carregando...");
    const [ehAdministrador, setEhAdministrador] = useState(false);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function verificarSessao() {
            const { data: sessionData } = await supabase.auth.getSession();

            if (!sessionData.session) {
                router.push("/login");
                return;
            }

            const usuario = sessionData.session.user;
            setEmailUsuario(usuario.email || "");

            const { data: registro } = await supabase
                .from("usuarios")
                .select("administrador")
                .eq("id", usuario.id)
                .single();

            setEhAdministrador(registro ? registro.administrador : false);
            setCarregando(false);
        }

        verificarSessao();
    }, [router]);

    async function handleSair() {
        await supabase.auth.signOut();
        router.push("/login");
    }

    if (carregando) {
        return <p>Carregando...</p>;
    }

    return (
        <main className="caixa">
            <h1 className="logo">Mini Market Place</h1>
            <p className="boas-vindas">
                Bem vindo ao Mini Market Place
                (<span id="usuario">{emailUsuario}</span>)
            </p>
            <nav className="menu">
                <Link href="/entrada" className="opcao">
                    <strong>Entrada de estoque</strong>
                    <span>Registrar produtos que chegaram</span>
                </Link>
                <Link href="/saida" className="opcao">
                    <strong>Saída de estoque</strong>
                    <span>Registrar produtos que saíram</span>
                </Link>
                <Link href="/estoque" className="opcao">
                    <strong>Estoque</strong>
                    <span>Consultar o estoque atual</span>
                </Link>
            </nav>

            {ehAdministrador && (
                <nav className="menu-admin" id="menu-admin">
                    <Link href="/cadastro" className="opcao">
                        <strong>Cadastrar funcionário</strong>
                        <span>Criar contas de acesso para a equipe</span>
                    </Link>
                </nav>
            )}

            <button type="button" className="botao" id="sair" onClick={handleSair}>
                Sair
            </button>
        </main>
    );
}