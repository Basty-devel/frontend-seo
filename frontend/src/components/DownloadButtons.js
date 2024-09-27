// frontend/src/components/DownloadButtons.js
import React from 'react';

const DownloadButtons = () => {
    return (
        <div className="download-buttons">
            <h2>Download Your Files</h2>
            <a href="/api/files/robots.txt" download="robots.txt">
                <button>Download robots.txt</button>
            </a>
            <a href="/api/files/sitemap.xml" download="sitemap.xml">
                <button>Download sitemap.xml</button>
            </a>
        </div>
    );
};

export default DownloadButtons;
