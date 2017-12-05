let express = require('express');
let hbs = require('hbs');

const port = process.env.PORT || 3000;
let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Index Page',
        welcomeMessage: 'Welcome to my node server.'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        pageTitle: 'About Page'
    });
});

app.get('/json', (req, res) => {
    res.json({
        name: 'wan',
        likes: 'code, eat, sleep'
    });
});

app.listen( port, () => {
    console.log(`App server running on port ${port}.`);
})