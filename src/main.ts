import { createApp } from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import './index.css'

const app = createApp(App)

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN as string,
  integrations: [
    new BrowserTracing({
      // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
//   Set tracesSampleRate to 1.0 to capture 100%
//   of transactions for performance monitoring.
//   We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

app.mount('#app')
