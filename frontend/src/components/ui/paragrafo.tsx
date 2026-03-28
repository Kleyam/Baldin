import { ReactNode } from "react";

function Paragrafo({ text, children, className }: { text: string, children?: ReactNode, className?: string }) {
    return (
        <p className={className}>
            {text}
            {children}
        </p>
    )
}

export default Paragrafo;