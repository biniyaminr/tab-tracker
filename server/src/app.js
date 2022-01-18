const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

//end point
app.get('/status',  (req, res) =>{
    res.send({
        message: 'hello benj from server'
    })
})

app.listen(process.env.PORT || 8081)
