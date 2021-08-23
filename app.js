const express = require('express');
const app = express();
//const ejs = require('ejs');
const Calculator = require('./controller/calculator');//require Calculator class
app.use(express.static(__dirname + '/public'));


const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

 app.get('/', function (req,res) {
     res.render('index');
})

app.post('/calculator', function (req, res) {

    try {
    const { operation, fnum, snum } = req.body;
    const num1 = Number(fnum);
    const num2 = Number(snum);

    const calculator = new Calculator(num1, num2)
    if(operation === 'add') { 
        const result = calculator.add();
        const str = `${num1} + ${num2} = `
        res.render('results', {str, result}).sendStatus(200)
        return
    } else if (operation === 'multiply') {
        const result = calculator.product();
        const str = `${num1} X ${num2} = `
        res.render('results', {str, result}).sendStatus(200)
        return
    }
}
catch(err) {
    res.send(err)
    return
}
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app