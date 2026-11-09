"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import styles from "../cadastro/stylecad.module.css";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
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

    async function handleLogin(e) {
        e.preventDefault();
        setCarregando(true);
        setMensagem("");

        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: senha
        });

        setCarregando(false);

        if (error) {
            setMensagem(traduzirErro(error));
            return;
        }

        router.push("/");
    }

    return (
        <main className="caixa">
            <h1 className="logo">Mini Market Place</h1>
            <section id="tela-login">
                <h2>Entrar</h2>
                
                <form onSubmit={handleLogin}>
                    <label htmlFor="login-email">E-mail</label>
                    <input 
                        type="email" 
                        id="login-email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="login-senha">Senha</label>
                    <input 
                        type="password" 
                        id="login-senha" 
                        required 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type="submit" className="botao" disabled={carregando}>
                        {carregando ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </section>

            {mensagem && <p id="mensagem">{mensagem}</p>}
        </main>
    );
}