function CardLogin({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl p-6 md:p-10 border transition-colors duration-300 bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col items-center justify-center">
            {children}
        </div>
    );
}

export default CardLogin;
