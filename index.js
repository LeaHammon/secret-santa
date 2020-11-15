const express = require('express')
const randomMapService = require('./randomMapService')
const app = express()
const port = process.env.PORT || 3300

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/pages/urls'));
app.use(express.static(__dirname + '/views/pages/results'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/get-url', (req, res) => {
    const randomMap = randomMapService.map
    const currentURL = req.protocol + '://' + req.get('host')
    const urls = randomMap.map((item) => `${Object.keys(item)[0]} : ${currentURL}/${Object.values(item)[0].id}`)

    res.render('pages/urls', {urls: urls});
})

app.get('/:id', (req, res) => {
    const userId = req.params.id
    const randomMap = randomMapService.map
    const result = randomMap.find(item => Object.values(item)[0].id === userId);

    res.render('pages/results', {name: result ? Object.values(result)[0].name : ''});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
