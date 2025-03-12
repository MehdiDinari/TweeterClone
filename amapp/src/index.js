import App from './App';
import {TweetsComponent} from './tweets';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const appEl = document.getElementById('root');
if (appEl) {
  const appRoot = createRoot(appEl);
  appRoot.render(<App />);
}

const tweetsEl = document.getElementById("tweetme-2");
if (tweetsEl) {
  const tweetsRoot = createRoot(tweetsEl);
  tweetsRoot.render(<TweetsComponent />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();