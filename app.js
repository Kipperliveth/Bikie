
let express = require('express');
const app = express();


const cors = require('cors');
const route = require('./api/routes/userRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('./api/db/db').connect()


app.get('/', (req, res) => {
    return res.json({
        status: "success",
        message: "Welcome to CRUDApp"
    })
})

app.use( route)

app.use(cors())

module.exports = app