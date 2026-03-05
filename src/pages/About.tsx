import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { ObfuscateEmail } from '../components/ObfuscateEmail';
import { SEO } from '../components/SEO';
import { Image } from '../components/Image';
import './About.css';

export function About() {
    const { t } = useTranslation();

    return (
        <div className="about-page container">
            <SEO title={t('about.title')} />
            <div className="about-content">
                <div className="about-text">
                    <h1 className="text-title">{t('about.title')}</h1>
                    <p className="text-subtitle">{t('about.subtitle')}</p>

                    <div className="about-body">
                        <p>{t('about.para1')}</p>
                        <p>{t('about.para2')}</p>

                        <a
                            href="https://szabence.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="personal-backlink"
                        >
                            {t('about.backlink_text')}
                            <ExternalLink size={14} className="icon-external" />
                        </a>
                    </div>

                    <div className="contact-info">
                        <h3>{t('about.get_in_touch')}</h3>
                        <ObfuscateEmail user="contact" domain="bybence.com" className="contact-link" />
                        <div className="social-links">
                            <a href="https://instagram.com/bybence_" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    <Image
                        src="/public/bence-portrait.jpg"
                        alt="Bence holding a camera"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
