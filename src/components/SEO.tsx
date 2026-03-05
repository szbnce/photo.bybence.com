import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
}

export function SEO({ title, description, type = 'website', image = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200&h=1600' }: SEOProps) {
    const { t } = useTranslation();
    const siteTitle = 'byBence Photography';

    // Auto translate title and desc if not explicitly provided, or fall back to home
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const finalDesc = description || t('home.subtitle');

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDesc} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDesc} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDesc} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
