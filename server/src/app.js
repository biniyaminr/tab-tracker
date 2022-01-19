const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

//end point
app.post('/register',  (req, res) =>{
    res.send({
        message: `Hello ${req.body.email } !you are registered!have fun!`
    })
})

app.listen(process.env.PORT || 8081)
