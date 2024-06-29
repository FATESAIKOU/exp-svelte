import './app.css'
import App from './App.svelte'
import { worker } from '../mocks/mswSetupWorker'

let app;

if (import.meta.env.VITE_USE_MSW === 'true') {
  (async () => {
    console.log('starting worker...');

    await worker.start();

    app = new App({
      target: document.getElementById('app')!,
    });
  })();
} else {
  app = new App({
    target: document.getElementById('app')!,
  });
}
