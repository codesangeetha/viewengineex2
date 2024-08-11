const express = require("express");
const app = express();


app.set('view engine', 'hbs');


app.get('/hbsdemo1', (req, res) => {
    const actor = {
        name: "Kunchako boban",
        films: ["niram", "priyam", "dosth", "kalyana raman"]
    };
    res.render('sample', { obj: actor});

});

app.listen(4000, () => {
    console.log('server started at 4000');
});