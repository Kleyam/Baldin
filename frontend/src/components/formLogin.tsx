"use client";
import EmailSVGComponent from "./svg/emailSVGComponent";
import SenhaSVGComponent from "./svg/senhaSVGComponent";
import Link from "next/link";

function FormLogin() {
    return (
        <form className="flex flex-col gap-4 mt-4 w-full md:w-[80%] mx-auto px-4 md:px-0">
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="email">Email</label>
                <div className="flex items-center flex-row gap-2 bg-[#280b49] border border-gray-600 rounded-lg p-3 focus:border-fuchsia-700 focus:outline-none focus:border-2 hover:border-fuchsia-700 hover:border-2 transition-all duration-300">
                    <EmailSVGComponent />
                    <input type="email" placeholder="Email" className="w-full focus:outline-none focus:border-fuchsia-700" />
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="password">Senha</label>
                <div className="flex items-center flex-row gap-2 bg-[#280b49] border border-gray-600 rounded-lg p-3 focus:border-fuchsia-700 focus:outline-none focus:border-2 hover:border-fuchsia-700 hover:border-2 transition-all duration-300">
                    <SenhaSVGComponent />
                    <input type="password" placeholder="Senha" className="w-full focus:outline-none focus:border-fuchsia-700" />
                </div>
            </div>
            <div className="flex flex-row gap-2 mb-2 justify-between">
                <div className="flex flex-row gap-2">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Manter logado</label>
                </div>
                <a href="/" className="text-fuchsia-700 hover:underline">Esqueci minha senha</a>
            </div>
            <button style={{ background: "linear-gradient(to right, #8338ec, #ff006e)" }} type="submit" className="text-white rounded-lg p-4 w-full focus:outline-none hover:scale-101 transition-all duration-300 cursor-pointer">Login</button>
            <p className="text-center text-gray-500 mt-2">Não tem uma conta? <a href="/cadastro" className="text-fuchsia-700 hover:underline">Registre-se</a></p>
        </form>
    );
}

export default FormLogin;
