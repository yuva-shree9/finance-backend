const express = require('express');
const app = express();

app.use(express.json());

// Sample data (no database)
let data = [];

app.get('/', (req, res) => {
    res.send('Finance Backend Running');
});

app.post('/add', (req, res) => {
    data.push(req.body);
    res.send('Data added');
});

app.get('/all', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});