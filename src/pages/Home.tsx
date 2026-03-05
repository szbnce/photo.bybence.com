import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Image } from '../components/Image';
import { getAlbums, shuffleArray } from '../utils/cms';
import './Home.css';

export function Home() {
    const { t } = useTranslation();
    const [randomImages, setRandomImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAndRandomize = async () => {
            const albums = await getAlbums();

            // Extract all images from all albums into a flat, randomized pool
            let allImages: string[] = [];
            albums.forEach(album => {
                allImages = [...allImages, ...album.images];
            });

            // Shuffle and pick top 9 for the home page masonry grid
            const shuffled = shuffleArray(allImages).slice(0, 9);
            setRandomImages(shuffled);
            setIsLoading(false);
        };
        fetchAndRandomize();
    }, []);

    const scrollToContent = () => {
        const contentSection = document.getElementById('home-content');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-page">
            <SEO />

            {/* Full screen Hero */}
            <header className="hero-fullscreen">
                <div className="hero-content container">
                    <div className="animate-fade-up">
                        <h1 className="text-display">{t('home.title1')}<br />{t('home.title2')}</h1>
                    </div>
                </div>

                <button
                    onClick={scrollToContent}
                    className="scroll-indicator"
                    aria-label="Scroll down"
                >
                    <span className="scroll-text">{t('home.scroll_prompt', 'Scroll to explore')}</span>
                    <ChevronDown size={24} className="animate-bounce" />
                </button>
            </header>

            {/* Scrollable Content Container */}
            <div id="home-content" className="home-content-section container">

                {/* Redesigned Split-View Introduction Block */}
                <section className="intro-split-section">
                    <div className="intro-image-container animate-fade-up">
                        <Image
                            src="/public/bence-portrait.jpg"
                            alt="Bence Portrait"
                            className="intro-portrait-img"
                        />
                    </div>
                    <div className="intro-text-container animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-title">{t('about.title')}</h2>
                        <h3 className="intro-greeting">{t('home.intro_greeting', 'Hello, this is me.')}</h3>
                        <p className="intro-body">{t('home.intro_short', 'I specialize in capturing raw emotion, cinematic landscapes, and timeless moments through a unique visual perspective.')}</p>

                        <Link to="/about" className="btn-primary">
                            <span>{t('home.read_more', 'Read more about me')}</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* Photography Highlights Grid */}
                <section className="masonry-layout">
                    {isLoading ? (
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                            <LoaderCircle className="animate-spin" size={32} />
                        </div>
                    ) : (
                        <>
                            <div className="masonry-column">
                                {randomImages.filter((_, i) => i % 3 === 0).map((src, idx) => (
                                    <div
                                        key={`col0-${idx}`}
                                        className="gallery-item gallery-photo-card animate-fade-up"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="image-wrapper img-wrapper">
                                            <Image src={src} alt={`Random portfolio piece col1 - ${idx + 1}`} loading="lazy" />
                                            <div className="image-overlay"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="masonry-column">
                                {randomImages.filter((_, i) => i % 3 === 1).map((src, idx) => (
                                    <div
                                        key={`col1-${idx}`}
                                        className="gallery-item gallery-photo-card animate-fade-up"
                                        style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
                                    >
                                        <div className="image-wrapper img-wrapper">
                                            <Image src={src} alt={`Random portfolio piece col2 - ${idx + 1}`} loading="lazy" />
                                            <div className="image-overlay"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="masonry-column">
                                {randomImages.filter((_, i) => i % 3 === 2).map((src, idx) => (
                                    <div
                                        key={`col2-${idx}`}
                                        className="gallery-item gallery-photo-card animate-fade-up"
                                        style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                                    >
                                        <div className="image-wrapper img-wrapper">
                                            <Image src={src} alt={`Random portfolio piece col3 - ${idx + 1}`} loading="lazy" />
                                            <div className="image-overlay"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}
