// mock image download to public folder to test globbing
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrls = [
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200&h=1600',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1600&h=1067',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200&h=1200'
];

imageUrls.forEach((url, i) => {
    const file = fs.createWriteStream(path.join(__dirname, `../public/albums/my-first-shoot/photo${i + 1}.jpg`));
    https.get(url, function (response) {
        response.pipe(file);
    });
});
