export default function Button({ buttonText, className, onClick, type, disabled, style }: { buttonText: string, className?: string, onClick?: () => void, type?: "button" | "submit" | "reset", disabled?: boolean, style?: React.CSSProperties }) {
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled} style={style}>{buttonText}</button>
    )
}