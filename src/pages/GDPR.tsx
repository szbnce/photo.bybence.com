import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import './Legal.css';

export function GDPR() {
    const { t } = useTranslation();

    return (
        <div className="legal-page container">
            <SEO title={t('privacy_page.title')} />
            <div className="legal-content">
                <h1 className="text-title">{t('privacy_page.title')}</h1>
                <p className="text-subtitle">{t('privacy_page.updated')}</p>

                <div className="legal-body">
                    <section>
                        <h2>{t('privacy_page.s1.title')}</h2>
                        <p>{t('privacy_page.s1.content')}</p>
                    </section>

                    <section>
                        <h2>{t('privacy_page.s2.title')}</h2>
                        <p><strong>{t('privacy_page.s2.analytics_title')}</strong>{t('privacy_page.s2.analytics')}</p>
                        <p><strong>{t('privacy_page.s2.contact_title')}</strong>{t('privacy_page.s2.contact')}</p>
                    </section>

                    <section>
                        <h2>{t('privacy_page.s3.title')}</h2>
                        <p>{t('privacy_page.s3.content')}</p>
                    </section>

                    <section>
                        <h2>{t('privacy_page.s4.title')}</h2>
                        <p>{t('privacy_page.s4.content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
