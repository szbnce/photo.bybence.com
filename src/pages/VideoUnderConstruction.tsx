import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Video } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ObfuscateEmail } from '../components/ObfuscateEmail';
import './Home.css'; // Ensure btn-primary is loaded

export function VideoUnderConstruction() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(7);

    useEffect(() => {
        // Redirect after countdown reaches 0
        if (countdown === 0) {
            navigate('/');
            return;
        }

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <SEO title="Video" />

            <div style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    <Video size={36} color="var(--text-primary)" />
                </div>

                <h1 className="text-display" style={{ marginBottom: 'var(--spacing-md)' }}>
                    {t('video.title', 'Video')}
                </h1>

                <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {t('video.description', 'My videography website is currently under construction. In the meantime, if you have any questions or would like to request my services, please reach out directly!')}
                </p>
                <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
                    {t('video.redirecting', 'Redirecting to homepage in')} {countdown}...
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        {t('video.instagram', 'Message on Instagram')}
                    </a>

                    <ObfuscateEmail
                        user="hello"
                        domain="bybence.com"
                        className="btn-primary"
                    />
                </div>

                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-normal)'
                }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                    <ArrowLeft size={16} />
                    <span>{t('video.back', 'Return to Photography')}</span>
                </Link>
            </div>
        </div>
    );
}
