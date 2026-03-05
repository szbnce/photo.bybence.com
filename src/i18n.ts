import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
    en: {
        translation: {
            "nav": {
                "portfolio": "Portfolio",
                "gallery": "Gallery",
                "about": "About",
                "video": "Video"
            },
            "footer": {
                "tagline": "Frames and stories.",
                "connect": "Connect",
                "legal": "Legal",
                "tos": "Terms of Service",
                "privacy": "Privacy & GDPR",
                "rights": "byBence. All rights reserved."
            },
            "home": {
                "title1": "Moments,",
                "title2": "Frozen in Time.",
                "subtitle": "Photography by Bence. Focusing on raw emotions and cinematic landscapes.",
                "scroll_prompt": "Scroll to explore",
                "intro_greeting": "Hi, I'm Bence.",
                "intro_short": "I capture cinematic landscapes and raw moments through a clean, visual perspective.",
                "read_more": "Learn more about me"
            },
            "gallery": {
                "title": "Gallery",
                "subtitle": "A collection of my visual stories.",
                "photos": "Photos",
                "categories": {
                    "All": "All",
                    "Portraits": "Portraits",
                    "Landscapes": "Landscapes",
                    "Editorial": "Editorial"
                }
            },
            "about": {
                "title": "About Me",
                "subtitle": "The world through a cinematic lens.",
                "para1": "I'm Bence, a photographer focused on raw emotions and cinematic scenes. I started with a simple camera, which eventually turned into a passion for light, shadow, and cars.",
                "para2": "Whether it's a sunrise or a clean build, my goal is to tell a story through every frame.",
                "get_in_touch": "Get in touch",
                "backlink_text": "Visit my personal site"
            },
            "video": {
                "title": "Video",
                "description": "My videography site is under construction. If you have any questions or requests, feel free to reach out!",
                "instagram": "Message on Instagram",
                "back": "Back to Photos"
            },
            "notfound": {
                "description": "404 - This frame is out of focus. The page does not exist.",
                "back": "Back to Home"
            },
            "tos": {
                "title": "Terms of Service",
                "updated": "Last updated: March 3, 2026",
                "s1": { "title": "1. Agreement to Terms", "content": "By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws." },
                "s2": { "title": "2. Intellectual Property Rights", "content": "All photographs, images, and content on this website are the exclusive property of byBence and are protected by international copyright laws. You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works, transmit, or in any way exploit any such content without prior written consent." },
                "s3": { "title": "3. Licensing and Usage", "content": "If you wish to use any photographs from this portfolio for commercial or non-commercial purposes, please contact me directly to negotiate a licensing agreement." },
                "s4": { "title": "4. Disclaimer", "content": "The materials on this website are provided \"as is\". byBence makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights." }
            },
            "privacy_page": {
                "title": "Privacy Policy & GDPR",
                "updated": "Last updated: March 3, 2026",
                "s1": { "title": "1. Privacy Value", "content": "Your privacy is critically important to us. We have a few fundamental principles: We don't ask you for personal information unless we truly need it. We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights." },
                "s2": { "title": "2. What Information We Collect", "analytics_title": "Analytics:", "analytics": " We use basic, privacy-respecting analytics to understand website traffic (e.g., page views). We do not collect identifiable personal information or track you across the internet.", "contact_title": "Contact Form:", "contact": " When you email us, we collect your email address and any information you provide in order to respond to your inquiry." },
                "s3": { "title": "3. Cookies", "content": "We use minimal cookies necessary for the website's basic functionality. We do not use third-party marketing or tracking cookies." },
                "s4": { "title": "4. Your Rights under GDPR", "content": "If you are an EU resident, you have the right to access personal data we hold about you and to ask that your personal data be corrected, updated, or deleted. If you would like to exercise this right, please contact us." }
            }
        }
    },
    hu: {
        translation: {
            "nav": {
                "portfolio": "Portfólió",
                "gallery": "Galéria",
                "about": "Rólam",
                "video": "Videó"
            },
            "footer": {
                "tagline": "Képek és történetek.",
                "connect": "Kapcsolat",
                "legal": "Jogi infók",
                "tos": "ÁSZF",
                "privacy": "GDPR",
                "rights": "byBence. Minden jog fenntartva."
            },
            "home": {
                "title1": "Pillanatok,",
                "title2": "Megfagyva.",
                "subtitle": "Bence fotós portfóliója. Nyers érzelmek és moziszerű tájak.",
                "scroll_prompt": "Görgess a felfedezéshez",
                "intro_greeting": "Szia, Bence vagyok.",
                "intro_short": "Moziszerű tájakat és őszinte pillanatokat örökítek meg, egy letisztult vizuális stílusban.",
                "read_more": "Bővebben rólam"
            },
            "gallery": {
                "title": "Galéria",
                "subtitle": "Vizuális történetek gyűjteménye.",
                "photos": "Fotó",
                "categories": {
                    "All": "Összes",
                    "Portraits": "Portrék",
                    "Landscapes": "Tájak",
                    "Editorial": "Szerkesztői"
                }
            },
            "about": {
                "title": "Rólam",
                "subtitle": "A világ, filmes lencsén keresztül.",
                "para1": "Bence vagyok, fotós. Leginkább a nyers érzelmek és a filmes látványvilág érdekel. Egy egyszerű géppel kezdtem, mára a fények, az árnyékok és az autók megszállottja lettem.",
                "para2": "Legyen szó egy hajnali tájképről vagy egy épített autóról, a célom, hogy minden képkocka meséljen valamit.",
                "get_in_touch": "Kapcsolat",
                "backlink_text": "A személyes oldalam"
            },
            "video": {
                "title": "Videó",
                "description": "A videós oldalam még fejlesztés alatt áll. Addig is, ha kérdésed van vagy dolgoznánk együtt, keress nyugodtan!",
                "instagram": "Írj Instagramon",
                "back": "Vissza a fotókhoz"
            },
            "notfound": {
                "description": "404 - Ez a kép életlen lett. Az oldal nem található.",
                "back": "Vissza a főoldalra"
            },
            "tos": {
                "title": "Általános Szerződési Feltételek",
                "updated": "Utolsó frissítés: 2026. március 3.",
                "s1": { "title": "1. A feltételek elfogadása", "content": "A weboldal használatával Ön elfogadja a jelen Általános Szerződési Feltételeket, minden vonatkozó törvényt és szabályozást, valamint felelősséget vállal a helyi törvények betartásáért." },
                "s2": { "title": "2. Szellemi tulajdonjogok", "content": "A weboldalon található minden fénykép, kép és tartalom a byBence kizárólagos tulajdona, és a nemzetközi szerzői jogi törvények védelme alatt áll. Ön nem másolhatja, sokszorosíthatja, terjesztheti, teheti közzé, jelenítheti meg, adhatja elő, módosíthatja, hozhat létre származékos műveket, továbbíthatja vagy használhatja fel a tartalmat előzetes írásbeli hozzájárulás nélkül." },
                "s3": { "title": "3. Licencelés és felhasználás", "content": "Ha bármilyen fényképet szeretne felhasználni ebből a portfólióból kereskedelmi vagy nem kereskedelmi célokra, kérjük, vegye fel velem a kapcsolatot közvetlenül egy licencszerződés megtárgyalása érdekében." },
                "s4": { "title": "4. Jogi nyilatkozat", "content": "A weboldalon található anyagokat \"ahogy vannak\" állapotban biztosítjuk. A byBence nem vállal sem kifejezett, sem hallgatólagos garanciát, és ezennel kizár és elhárít minden egyéb garanciát, ideértve a korlátozás nélküli, eladhatóságra, egy adott célra való alkalmasságra, vagy a szellemi tulajdon megsértésének elkerülésére vonatkozó garanciákat." }
            },
            "privacy_page": {
                "title": "Adatvédelmi Irányelvek és GDPR",
                "updated": "Utolsó frissítés: 2026. március 3.",
                "s1": { "title": "1. Az adatvédelem értéke", "content": "Az Ön adatainak védelme kiemelten fontos számunkra. Néhány alapelvünk: Nem kérünk személyes adatokat, hacsak nincs rájuk valóban szükségünk. Nem osztjuk meg a személyes adatait senkivel, kivéve ha a törvény előírja, termékeinket fejlesztjük, vagy jogainkat védjük." },
                "s2": { "title": "2. Milyen információkat gyűjtünk", "analytics_title": "Analitika:", "analytics": " Alapvető, adatvédelmet tiszteletben tartó analitikát használunk a weboldal forgalmának megértésére (pl. oldalletöltések). Nem gyűjtünk beazonosítható személyes adatokat, és nem követjük nyomon az interneten.", "contact_title": "Kapcsolatfelvételi űrlap:", "contact": " Amikor e-mailt küld nekünk, összegyűjtjük az e-mail címét és minden egyéb megadott információt annak érdekében, hogy válaszolhassunk megkeresésére." },
                "s3": { "title": "3. Sütik", "content": "Minimális számú sütit használunk, amelyek a weboldal alapvető működéséhez szükségesek. Nem használunk harmadik féltől származó marketing vagy nyomkövető sütiket." },
                "s4": { "title": "4. Az Ön GDPR szerinti jogai", "content": "Ha Ön EU-lakos, joga van hozzáférni az általunk tárolt személyes adataihoz, és kérheti azok helyesbítését, frissítését vagy törlését. Ha élni szeretne ezzel a jogával, kérjük, vegye fel velünk a kapcsolatot." }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'hu',
        lng: 'hu',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
