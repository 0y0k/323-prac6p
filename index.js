const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function isValidNumber(num) {
    return !isNaN(num) && isFinite(num);
}

app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice!');
});

//addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

//subtraction
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

//multiplication
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

//division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});