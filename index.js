const express = require('express')
const randomMapService = require('./randomMapService')
const app = express()
const port = 3300

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/get-url', (req, res) => {
    const randomMap = randomMapService.map
    const urls = randomMap.map((item) => `${Object.keys(item)[0]} : http://localhost:3300/${Object.values(item)[0].id}`)

    res.send(JSON.stringify(urls))
})

app.get('/:id', (req, res) => {
    const userId = req.params.id
    const randomMap = randomMapService.map
    const result = randomMap.find(item => Object.values(item)[0].id === userId);

    res.send(`Vous devez faire un cadeeau à ${Object.values(result)[0].name}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
