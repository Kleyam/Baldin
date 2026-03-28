import { MainComponentProps } from "@/types/interfaceLogin";

function MainComponent({ children, className }: MainComponentProps) {
    return (
        <main className={className}>
            {children}
        </main>
    );
}

export default MainComponent;