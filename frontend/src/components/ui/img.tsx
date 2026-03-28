import Image from "next/image";

interface ImgProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

function Img({ src, alt, className, width, height }: ImgProps) {
    return (
        <Image src={src} alt={alt} width={width} height={height} className={className} />
    );
}

export default Img;