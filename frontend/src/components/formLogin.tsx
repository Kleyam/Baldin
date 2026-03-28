"use client";

function FormLogin() {
    return (
        <form className="flex flex-col gap-4 mt-4 w-[80%] mx-auto">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" className="border border-gray-600 rounded-lg p-2 w-full focus:outline-none focus:border-fuchsia-700" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Senha" className="border border-gray-600 rounded-lg p-2 w-full focus:outline-none focus:border-fuchsia-700" />
            </div>
            <button type="submit" className="bg-fuchsia-700 text-white rounded-lg p-2 w-full focus:outline-none focus:border-fuchsia-700">Login</button>
        </form>
    );
}

export default FormLogin;