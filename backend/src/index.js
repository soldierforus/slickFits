require('dotenv').config({ path: 'variables.env'})
const createServer = require('./createServer');
const db = require('./db')

const server = createServer()

//TODO - use express express middleware to handle cookies (JSON Web Tokens)
// TODO use express middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, 
deets => {
    console.log(`Server is now runnning on port ${deets.port}`)
})
