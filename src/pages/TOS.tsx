import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import './Legal.css';

export function TOS() {
    const { t } = useTranslation();

    return (
        <div className="legal-page container">
            <SEO title={t('tos.title')} />
            <div className="legal-content">
                <h1 className="text-title">{t('tos.title')}</h1>
                <p className="text-subtitle">{t('tos.updated')}</p>

                <div className="legal-body">
                    <section>
                        <h2>{t('tos.s1.title')}</h2>
                        <p>{t('tos.s1.content')}</p>
                    </section>

                    <section>
                        <h2>{t('tos.s2.title')}</h2>
                        <p>{t('tos.s2.content')}</p>
                    </section>

                    <section>
                        <h2>{t('tos.s3.title')}</h2>
                        <p>{t('tos.s3.content')}</p>
                    </section>

                    <section>
                        <h2>{t('tos.s4.title')}</h2>
                        <p>{t('tos.s4.content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
