import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
                type: 'tween',
                ease: 'anticipate',
                duration: 0.4
            }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
}
