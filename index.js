const express = require('express');
var cors = require('cors');
const yup = require('yup');
const fs = require('fs');

const app = express();

const schema = yup.object({
  email: yup.string().email('Email is invalid').required('Email is required'),
  message: yup
    .string()
    .trim()
    .min(8, 'Message is too short')
    .max(255, 'Message is too long')
    .required('Message is required'),
});

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.use('*', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.post('/contact', (req, res) => {
  const { email, message } = req.body;

  schema
    .validate({ email, message })
    .then(() => {
      fs.appendFile(__dirname + '/contact.md', `|${email}|${message}|\n`, (error) => {
        if (!error) {
          res.json({});
        }
      });
    })
    .catch((error) => res.status(400).json(error));
});

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'));
