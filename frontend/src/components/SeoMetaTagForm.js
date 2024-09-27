// frontend/src/components/SeoMetaTagForm.js
import React, { useState } from 'react';

const SeoMetaTagForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [author, setAuthor] = useState('');
    const [viewport, setViewport] = useState('width=device-width, initial-scale=1.0');

    const generateMetaTags = () => {
        return `
        <title>${title}</title>
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta name="author" content="${author}">
        <meta name="viewport" content="${viewport}">
        `;
    };

    return (
        <div className="seo-meta-tag-form">
            <h2>SEO Meta Tag Generator</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter page title"
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter page description"
                    />
                </div>
                <div>
                    <label>Keywords:</label>
                    <input
                        type="text"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Enter keywords, separated by commas"
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter author name"
                    />
                </div>
                <div>
                    <label>Viewport:</label>
                    <input
                        type="text"
                        value={viewport}
                        onChange={(e) => setViewport(e.target.value)}
                        placeholder="Enter viewport settings"
                    />
                </div>
            </form>

            <div className="meta-tag-output">
                <h3>Generated Meta Tags:</h3>
                <pre>{generateMetaTags()}</pre>
                <button
                    onClick={() => navigator.clipboard.writeText(generateMetaTags())}
                >
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
};

export default SeoMetaTagForm;
