import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, LoaderCircle } from 'lucide-react';
import { Image } from '../components/Image';
import { SEO } from '../components/SEO';
import type { ParsedAlbum, LocalizedString } from '../utils/cms';
import { getAlbums } from '../utils/cms';
import './Gallery.css';

const GALLERY_CATEGORIES = ['All', 'Portraits', 'Landscapes', 'Editorial'];

// Helper to get localized string dynamically based on current language
const getLocalizedText = (localizedInput: LocalizedString, currentLang: string) => {
    if (typeof localizedInput === 'string') return localizedInput;
    return currentLang.startsWith('en') ? localizedInput.en : localizedInput.hu;
};

export function Gallery() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const [albums, setAlbums] = useState<ParsedAlbum[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [selectedAlbum, setSelectedAlbum] = useState<ParsedAlbum | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    // Load albums on mount
    useEffect(() => {
        const fetchAlbums = async () => {
            const data = await getAlbums();
            setAlbums(data);
            setIsLoading(false);
        };
        fetchAlbums();
    }, []);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedAlbum && !isClosing) {
            document.body.style.overflow = 'hidden';
            setCurrentImageIndex(0);
        } else if (!selectedAlbum) {
            document.body.style.overflow = '';
        }

        return () => { document.body.style.overflow = ''; };
    }, [selectedAlbum, isClosing]);

    const filteredAlbums = activeCategory === 'All'
        ? albums
        : albums.filter(album => album.category === activeCategory);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedAlbum) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedAlbum) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
        }
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedAlbum(null);
            setIsClosing(false);
        }, 300); // Wait for the animation to complete
    };

    return (
        <div className="gallery-page container">
            <SEO title={t('gallery.title')} />
            <div className="gallery-header">
                <h1 className="text-display">{t('gallery.title')}</h1>
                <p className="text-subtitle">{t('gallery.subtitle')}</p>

                <div className="gallery-filters">
                    {GALLERY_CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${cat === activeCategory ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {t(`gallery.categories.${cat}`)}
                        </button>
                    ))}
                </div>
            </div>

            {isLoading ? (
                <div className="loading-state" style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                    <LoaderCircle className="animate-spin" size={32} />
                </div>
            ) : (
                <div className="masonry-layout">
                    <div className="masonry-column">
                        {filteredAlbums.filter((_, i) => i % 3 === 0).map((album, idx) => (
                            <div
                                key={`col0-${album.id}`}
                                className="gallery-photo-card animate-fade-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <Image src={album.coverSrc} alt={getLocalizedText(album.title, currentLang)} loading="lazy" />
                                <div className="photo-overlay">
                                    <div>
                                        <h3>{getLocalizedText(album.title, currentLang)}</h3>
                                        <span>{t(`gallery.categories.${album.category}`)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="masonry-column">
                        {filteredAlbums.filter((_, i) => i % 3 === 1).map((album, idx) => (
                            <div
                                key={`col1-${album.id}`}
                                className="gallery-photo-card animate-fade-up"
                                style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <Image src={album.coverSrc} alt={getLocalizedText(album.title, currentLang)} loading="lazy" />
                                <div className="photo-overlay">
                                    <div>
                                        <h3>{getLocalizedText(album.title, currentLang)}</h3>
                                        <span>{t(`gallery.categories.${album.category}`)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="masonry-column">
                        {filteredAlbums.filter((_, i) => i % 3 === 2).map((album, idx) => (
                            <div
                                key={`col2-${album.id}`}
                                className="gallery-photo-card animate-fade-up"
                                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <Image src={album.coverSrc} alt={getLocalizedText(album.title, currentLang)} loading="lazy" />
                                <div className="photo-overlay">
                                    <div>
                                        <h3>{getLocalizedText(album.title, currentLang)}</h3>
                                        <span>{t(`gallery.categories.${album.category}`)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Album Modal Popup */}
            {selectedAlbum && (
                <div className={`album-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleCloseModal}>
                    <div className={`album-modal-content split-view ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <button className="album-close-btn" onClick={handleCloseModal}>
                            <X size={24} />
                        </button>

                        <div className="album-modal-left">
                            <div className="carousel-container">
                                {selectedAlbum.images.length > 1 && (
                                    <button className="carousel-btn prev-btn" onClick={prevImage} aria-label="Previous image">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                    </button>
                                )}
                                <div className="carousel-image-wrapper">
                                    <Image
                                        src={selectedAlbum.images[currentImageIndex]}
                                        alt={`${getLocalizedText(selectedAlbum.title, currentLang)} - image ${currentImageIndex + 1}`}
                                        className="carousel-image"
                                    />
                                </div>
                                {selectedAlbum.images.length > 1 && (
                                    <button className="carousel-btn next-btn" onClick={nextImage} aria-label="Next image">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </button>
                                )}

                                {selectedAlbum.images.length > 1 && (
                                    <div className="carousel-indicators">
                                        {selectedAlbum.images.map((_, idx) => (
                                            <span
                                                key={idx}
                                                className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="album-modal-right">
                            <div className="album-info-content">
                                <h2>{getLocalizedText(selectedAlbum.title, currentLang)}</h2>
                                <span className="album-tag">{t(`gallery.categories.${selectedAlbum.category}`)}</span>
                                <p className="album-description">{getLocalizedText(selectedAlbum.description, currentLang)}</p>

                                <div className="album-meta">
                                    <span>{selectedAlbum.images.length} {t('gallery.photos')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
