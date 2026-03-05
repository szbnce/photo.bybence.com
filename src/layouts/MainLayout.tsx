import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CookieBanner } from '../components/CookieBanner';
import { BackToTop } from '../components/BackToTop';
import { PageTransition } from '../components/PageTransition';

export function MainLayout() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <div className="page-wrapper">
            <Navbar />
            <main style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        {outlet}
                    </PageTransition>
                </AnimatePresence>
            </main>
            <Footer />
            <CookieBanner />
            <BackToTop />
        </div>
    );
}
