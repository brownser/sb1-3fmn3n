import App from './App.svelte';
import './app.css';

const app = new App({
  target: document.getElementById('svelte-app') as HTMLElement
});

export default app;