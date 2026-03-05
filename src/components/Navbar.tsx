import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Video, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export function Navbar() {
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLang = i18n.language || 'en';

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    byBence<span className="accent-dot">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        {t('nav.portfolio')}
                    </Link>
                    <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>
                        {t('nav.gallery')}
                    </Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                        {t('nav.about')}
                    </Link>
                    <div className="nav-divider"></div>
                    <div className="lang-switcher">
                        <button
                            className={`lang-btn ${currentLang.startsWith('hu') ? 'active' : ''}`}
                            onClick={() => changeLanguage('hu')}
                            title="Magyar"
                        >
                            <span className="lang-flag">🇭🇺</span> HU
                        </button>
                        <span className="lang-separator">|</span>
                        <button
                            className={`lang-btn ${currentLang.startsWith('en') ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                            title="English"
                        >
                            <span className="lang-flag">🇬🇧</span> EN
                        </button>
                    </div>
                    <div className="nav-divider"></div>
                    <Link to="/video" className={`nav-link ${location.pathname === '/video' ? 'active' : ''}`} title="Video Portfolio">
                        {t('nav.video')}
                        <Video size={14} className="icon-external" />
                    </Link>
                </nav>

                {/* Mobile Hamburger Toggle */}
                <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
}
