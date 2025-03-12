//Imports
import { serveStatic } from '@hono/node-server/serve-static'
import { createApp } from 'honox/server'

//Create app
const app = createApp({
    trailingSlash: false
})

//Serve HTML (*auto-handled by CF static assets in prod)
app.get('/', serveStatic({ path: './index.html' }))

//Serve static files (*auto-handled by CF static assets in prod)
app.get('/static/*', serveStatic({ root: './' }))

//Server health check
app.get('/health', (c) => {return c.text('I am up-and-running~!')})

//Export
export default app