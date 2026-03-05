import React from 'react';

interface ObfuscateEmailProps {
    user: string;
    domain: string;
    className?: string;
    children?: React.ReactNode;
}

export function ObfuscateEmail({ user, domain, className = '', children }: ObfuscateEmailProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}`;
    };

    return (
        <a href="#" onClick={handleClick} className={className}>
            {children || `${user}@${domain}`}
        </a>
    );
}
