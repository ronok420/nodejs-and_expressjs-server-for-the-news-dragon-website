const express = require('express')
const app = express()
const port = 7000
const categories = require('./data/categories.json')
const news = require('./data/news.json')
const cors = require('cors')


app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    } else {
        console.log(id);
        const categoryNews = news.filter(cnw => cnw.category_id == id);
        res.send(categoryNews);

    }

})
app.get('/news', (req, res) => {
    res.send(news)

})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news);
    }
    else {
        const singleIdNews = news.find(nw => nw._id === id);
        res.send(singleIdNews);
    }

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})