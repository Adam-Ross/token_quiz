const express = require('express')
const app = express()

const PORT = 3543

app.use('/api/auth', require('./routes/jwtAuth'))


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})