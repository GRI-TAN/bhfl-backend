const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// POST method
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];
  let highestLowercase = '';

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
      if (item === item.toLowerCase() && item > highestLowercase) {
        highestLowercase = item;
      }
    }
  });

  const response = {
    is_success: true,
    user_id: 'madirajuchiatanyaraju_21BCE0636',
    email: 'chaitanya@raju',
    roll_number: '21BCE0636',
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
  };

  res.json(response);
});

// GET method
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
