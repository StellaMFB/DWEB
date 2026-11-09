"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import styles from "./stylecad.module.css";

export default function Cadastro() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirma, setConfirma] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(false);

    function traduzirErro(error) {
        const msg = (error.message || "").toLowerCase();

        if (msg.includes("invalid login credentials")) return "E-mail ou senha incorretos.";
        if (msg.includes("email not confirmed")) return "Confirme seu e-mail antes de entrar.";
        if (msg.includes("already registered")) return "Este e-mail já está cadastrado.";
        if (msg.includes("password should be")) return "A senha deve ter pelo menos 6 caracteres.";
        if (msg.includes("rate limit")) return "Muitas tentativas. Aguarde um pouco e tente de novo.";

        return "Não foi possível concluir a operação. Tente novamente.";
    }

    async function handleCadastro(e) {
        e.preventDefault();

        if (senha !== confirma) {
            setMensagem("As senhas não coincidem.");
            return;
        }

        setCarregando(true);
        setMensagem("");

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: senha
        });

        setCarregando(false);

        if (error) {
            setMensagem(traduzirErro(error));
            return;
        }

        if (data.session) {
            setMensagem("Cadastro realizado com sucesso!");
        } else {
            setMensagem("Cadastro realizado! Confirme seu e-mail para poder entrar.");
        }

        setEmail("");
        setSenha("");
        setConfirma("");

        setTimeout(() => {
            router.push("/login");
        }, 3000);
    }

    return (
        <main className="caixa">
            <h1 className="logo">Mini Market Place</h1>
            <section id="tela-cadastro">
                <h2>Cadastrar</h2>

                <form onSubmit={handleCadastro}>
                    <label htmlFor="cad-email">E-mail</label>
                    <input
                        type="email"
                        id="cad-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="cad-senha">Senha</label>
                    <input
                        type="password"
                        id="cad-senha"
                        minLength="6"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <label htmlFor="cad-confirma">Confirmar senha</label>
                    <input
                        type="password"
                        id="cad-confirma"
                        required
                        value={confirma}
                        onChange={(e) => setConfirma(e.target.value)}
                    />

                    <button type="submit" className="botao" disabled={carregando}>
                        {carregando ? "Cadastrando..." : "Cadastrar"}
                    </button>
                </form>
            </section>

            {mensagem && <p id="mensagem">{mensagem}</p>}
        </main>
    );
}