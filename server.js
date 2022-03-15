const express = require('express')
const articleRouter = require('./routs/articles')
const app = express();

const PORT = 5000;

app.use('/articles', articleRouter)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const articles = [{
        title: 'This is a nodejs blog',
        createdDate: Date.now(),
        desciption: 'This is a nice blog post from nodejs mongodb created by vahid sediqi'
    }]
    res.render('index', { articles: articles})
})

app.listen(PORT)