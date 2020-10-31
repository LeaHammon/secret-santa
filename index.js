const express = require('express')
const app = express()
const port = 3000

const names = [
    'lea',
    'bat',
    'clo',
    'marco'
]

const getMap = (names) => {
    let randomNames = [...names].sort( () => .5 - Math.random() );

    let result = names.map((name, index) => ({
        [name]: randomNames[index]
    }))

    while (result.find((item, index) => Object.keys(item)[0] === Object.values(item)[0])) {
        randomNames = [...names].sort( () => .5 - Math.random() );
        result = names.map((name, index) => ({
            [name]: randomNames[index]
        }))
    }

    return result
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/:id', (req, res) => {
    const maaap = getMap(names)
    const result = maaap.find(item => Object.keys(item)[0] === req.params.id);
    res.send(`Vous devez faire un cadeeau à ${Object.values(result)[0]}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
