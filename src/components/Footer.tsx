import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ObfuscateEmail } from './ObfuscateEmail';
import './Footer.css';

export function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>byBence</h3>
                    <p>{t('footer.tagline')}</p>
                </div>

                <div className="footer-links">
                    <div className="footer-group">
                        <h4>{t('footer.connect')}</h4>
                        <a href="https://instagram.com/bybence" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <ObfuscateEmail user="contact" domain="bybence.com">Email</ObfuscateEmail>
                    </div>

                    <div className="footer-group">
                        <h4>{t('footer.legal')}</h4>
                        <Link to="/tos">{t('footer.tos')}</Link>
                        <Link to="/gdpr">{t('footer.privacy')}</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} {t('footer.rights')}</p>
            </div>
        </footer>
    );
}
