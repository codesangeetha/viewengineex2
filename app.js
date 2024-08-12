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

app.get('/tabledemo', (req, res) => {
    const students = [
        { studentName: 'John Doe', mark: 85 },
        { studentName: 'Jane Smith', mark: 92 },
        { studentName: 'Bob Johnson', mark: 78 },
        { studentName: 'Alice Brown', mark: 95 },
        { studentName: 'Mike Davis', mark: 88 },
        { studentName: 'Emily Taylor', mark: 82 }
      ];
    res.render('marks', { arr: students});

});

app.listen(4000, () => {
    console.log('server started at 4000');
});