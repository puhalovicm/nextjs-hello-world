"use client";
import { useState } from 'react';
const AboutPage = () => {
    const [currentDomain, setCurrentDomain] = useState('');
    const handleGetDomain = () => {
        setCurrentDomain(window.location.origin);
    };
    return (
        <div>
            <h1>Using window.location</h1>
            <button onClick={handleGetDomain}>Get Current Domain</button>
            {currentDomain && <h2>Current URL Domain: {currentDomain}</h2>}
        </div>
    );
};
export default AboutPage;
