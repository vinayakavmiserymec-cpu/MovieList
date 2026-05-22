import express from "express";
import {apiRoute} from './api.js'

const app = express()

app.use('/api/movies',apiRoute)

app.use('/ping',function (req,resp) {
    resp.json({"ping":"pong"})
})

app.use('/',function (req,resp) {
    resp.json({"Hi":"Hello 2"})
})

app.listen(3080,() => {
    console.log('API is listening on 3080')
})