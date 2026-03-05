import { useState } from 'react';
import './Image.css';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

export function Image({ src, alt, className = '', ...props }: ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`img-wrapper ${className}`}>
            {!isLoaded && <div className="img-skeleton"></div>}
            <img
                src={src}
                alt={alt}
                className={`img-content ${isLoaded ? 'loaded' : ''}`}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
}
