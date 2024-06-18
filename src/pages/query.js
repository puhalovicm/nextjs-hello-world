"use client";
import React, { useState } from 'react';
const QueryPage = () => {
    const [currHostName, setCurrentHostname] = useState('');
    const [currProtocol, setCurrentProtocol] = useState('');
    const [currPort, setCurrentPort] = useState('');
    const [currURL, setCurrentURL] = useState('');

    const handleGetURLDetails = () => {
        setCurrentHostname(document.location.hostname);
        setCurrentProtocol(document.location.protocol);
        setCurrentPort(document.location.port || 'Default');
        setCurrentURL(window.location.href);
    };
    return (
        <div>
            <h1>Using document.location</h1>
            <button onClick={handleGetURLDetails}>Get URL Details</button>
            <div>
                <p>Current URL: {currURL}</p>
                <p>Hostname: {currHostName}</p>
                <p>Protocol: {currProtocol}</p>
                <p>Port: {currPort}</p>
            </div>
        </div>
    );
};

export default QueryPage;