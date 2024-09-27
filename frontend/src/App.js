// frontend/src/App.js
import React from 'react';
import SubscriptionForm from './components/SubscriptionForm';
import DownloadButtons from './components/DownloadButtons';
import SeoMetaTagForm from './components/SeoMetaTagForm';
import './App.css';  // Custom styling

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Sitemap & SEO Generator</h1>
            </header>
            <main>
                <SubscriptionForm />
                <DownloadButtons />
                <SeoMetaTagForm />
            </main>
        </div>
    );
};

export default App;
