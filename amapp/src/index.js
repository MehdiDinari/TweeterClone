import React from 'react';
import './index.css';
import App from './App';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

// Afficher un message de débogage
console.log("Script React chargé");

// App principale
const appEl = document.getElementById('root');
if (appEl) {
    const root = createRoot(appEl);
    root.render(<App />);
}

// Composant Tweets
const tweetsEl = document.getElementById("tweetme-2");
if (tweetsEl) {
    console.log("Élément tweetme-2 trouvé");
    const tweetRoot = createRoot(tweetsEl);
    tweetRoot.render(
        React.createElement(TweetsComponent, tweetsEl.dataset)
    );
}

// Composant Feed
const tweetFeedEl = document.getElementById("tweetme-2-feed");
if (tweetFeedEl) {
    console.log("Élément tweetme-2-feed trouvé");
    const feedRoot = createRoot(tweetFeedEl);
    feedRoot.render(
        React.createElement(FeedComponent, tweetFeedEl.dataset)
    );
}

// Composants de détail
const tweetDetailElements = document.querySelectorAll(".tweetme-2-detail");
console.log(`Trouvé ${tweetDetailElements.length} éléments de détail`);
tweetDetailElements.forEach(container => {
    const detailRoot = createRoot(container);
    detailRoot.render(
        React.createElement(TweetDetailComponent, container.dataset)
    );
});

// Service worker
serviceWorker.unregister();