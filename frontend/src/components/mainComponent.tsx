import { MainComponentProps } from "@/types/interfaceLogin";

function MainComponent({ children }: MainComponentProps) {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            {children}
        </main>
    );
}

export default MainComponent;