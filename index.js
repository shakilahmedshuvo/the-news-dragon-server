const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const news = require('./data/news.json');

// use middle wars
app.use(cors());

// home api
app.get('/', (req, res) => {
    res.send('Dragon is running')
});

// categories api
app.get('/categories', (req, res) => {
    res.send(categories);
})

// news category
app.get('/news', (req, res) => {
    res.send(news);
})

// news id
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
})

// news category id
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
});