import React from 'react';
import App from './App';
import {TweetsComponent, TweetDetailComponent} from './tweets';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

// Using the new createRoot API (React 18+)
const appEl = document.getElementById('root')
if (appEl) {
    const root = createRoot(appEl);
    root.render(<App />);
}

const e = React.createElement
const tweetsEl = document.getElementById("tweetme-2")
if (tweetsEl) {
    const tweetRoot = createRoot(tweetsEl);
    tweetRoot.render(e(TweetsComponent, tweetsEl.dataset));
}

const tweetDetailElements = document.querySelectorAll(".tweetme-2-detail")
tweetDetailElements.forEach(container=> {
    const detailRoot = createRoot(container);
    detailRoot.render(e(TweetDetailComponent, container.dataset));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();