import { createApp } from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import './index.css'

const app = createApp(App)

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN as string, // イベントの送信先をSDKに通知
  integrations: [
    new BrowserTracing({
      // routingInstrumentation: Sentry.vueRouterInstrumentation(router),

      // tracingOriginsのデフォルト値は['localhost', /^\//]
      // JavaScript SDK は、送信先にリスト内の文字列が含まれるか、リスト内の正規表現に一致するすべての送信 XHR/fetch 要求に sentry-trace ヘッダを付加
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
  //   Set tracesSampleRate to 1.0 to capture 100%
  //   of transactions for performance monitoring.
  //   We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

app.mount('#app')
