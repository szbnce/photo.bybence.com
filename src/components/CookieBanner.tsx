import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

export function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('bybence_cookie_consent');
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setShow(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('bybence_cookie_consent', 'true');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="cookie-banner-overlay">
            <div className="cookie-banner">
                <div className="cookie-content">
                    <h4>Privacy Preference</h4>
                    <p>
                        We use minimal cookies to ensure you get the best experience on our website.
                        By continuing to use this site, you consent to our use of cookies.
                        Read our <Link to="/gdpr">Privacy Policy</Link> for more information.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="cookie-btn" onClick={acceptCookies}>
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
}
