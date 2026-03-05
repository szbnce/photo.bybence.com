// src/utils/cms.ts

export type LocalizedString = {
    en: string;
    hu: string;
};

export type AlbumInfo = {
    title: LocalizedString;
    category: string;
    description: LocalizedString;
};

export type ParsedAlbum = {
    id: string; // Directory name
    title: LocalizedString;
    category: string;
    description: LocalizedString;
    coverSrc: string;
    images: string[];
};

/**
 * Reads all info.json files and image files from the public/albums directory
 * using Vite's import.meta.glob
 */
export async function getAlbums(): Promise<ParsedAlbum[]> {
    // 1. Get all info.json files
    // Use { query: '?url', import: 'default' } to get the raw URL resolving in production,
    // or fetch them dynamically since they are in /public

    // We can't use import.meta.glob for /public easily because it's served statically at runtime.
    // Instead we will glob the actual source if we moved them to src/assets, OR we can fetch a known manifest.
    // However, a better developer experience for a static site is globbing from a dedicated `src/content` folder.

    // Let's adapt: if user puts them in /public, we'd need a node script to generate a manifest.
    // Vite CAN glob from /public if we use { as: 'raw' } but we can't glob images from public directly into bundles easily.

    // Workaround: We will use import.meta.glob on `../../public/albums/**/*.json` and `../../public/albums/**/*.{jpg,jpeg,png,webp}`

    const infoFiles = import.meta.glob('../../public/albums/**/info.json', { eager: true });
    const imageFiles = import.meta.glob('../../public/albums/**/*.{jpg,jpeg,png,webp,JPG,JPEG}', { query: '?url', import: 'default', eager: true });

    const albumsMap: Record<string, ParsedAlbum> = {};

    // Parse info.json files to initialize albums
    for (const path in infoFiles) {
        // path looks like: ../../public/albums/my-first-shoot/info.json
        const parts = path.split('/');
        const albumId = parts[parts.length - 2];
        const data = infoFiles[path] as AlbumInfo;

        albumsMap[albumId] = {
            id: albumId,
            title: data.title || { en: 'Untitled', hu: 'Névtelen' },
            category: data.category || 'Uncategorized',
            description: data.description || { en: '', hu: '' },
            coverSrc: '',
            images: [],
        };
    }

    // Assign images to their respective albums
    for (const path in imageFiles) {
        // path looks like: ../../public/albums/my-first-shoot/photo1.jpg
        const parts = path.split('/');
        const albumId = parts[parts.length - 2];

        // The URL returned by import.meta.glob({ as: 'url' }) is the hashed asset URL
        const imgUrl = (imageFiles as Record<string, string>)[path];

        if (albumsMap[albumId]) {
            albumsMap[albumId].images.push(imgUrl);

            // Set the first image found as the cover if none exists
            if (!albumsMap[albumId].coverSrc) {
                albumsMap[albumId].coverSrc = imgUrl;
            }
        }
    }

    // Convert map to array and filter out albums with no images
    return Object.values(albumsMap).filter(album => album.images.length > 0);
}

/**
 * Helper to shuffle an array (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}
