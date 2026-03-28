"use client";

function FormLogin() {
    return (
        <form className="flex flex-col gap-4 mt-4 w-[80%] mx-auto">
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" className="border border-gray-600 rounded-lg p-3 w-full focus:outline-none focus:border-fuchsia-700" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Senha" className="border border-gray-600 rounded-lg p-3 w-full focus:outline-none focus:border-fuchsia-700" />
            </div>
            <div className="flex flex-row gap-2 mb-2 justify-between">
                <div className="flex flex-row gap-2">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Manter logado</label>
                </div>
                <a href="#" className="text-fuchsia-700 hover:underline">Esqueci minha senha</a>
            </div>
            <button type="submit" className="bg-fuchsia-700 text-white rounded-lg p-4 w-full focus:outline-none focus:border-fuchsia-700">Login</button>
            <p className="text-center text-gray-500 mt-2">Não tem uma conta? <a href="#" className="text-fuchsia-700 hover:underline">Registre-se</a></p>
        </form>
    );
}

export default FormLogin;
