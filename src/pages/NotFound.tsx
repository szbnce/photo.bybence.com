import { useTranslation } from 'react-i18next';
import { ArrowLeft, Aperture } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <SEO title="404" />

            <div className="animate-fade-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
                <Aperture size={48} color="var(--primary-accent)" style={{ marginBottom: 'var(--spacing-md)' }} className="animate-spin" />

                <h1 className="text-display" style={{ marginBottom: 'var(--spacing-sm)' }}>
                    404
                </h1>

                <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    {t('notfound.description', 'It seems this frame is out of focus. The page you are looking for does not exist.')}
                </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowLeft size={18} />
                    <span>{t('notfound.back', 'Back to Home')}</span>
                </Link>
            </div>
        </div>
    );
}
