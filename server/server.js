const express = require('express');
const cors = require('cors');
const {mockDataChart} = require('./mockDataChart');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


// create a GET route
app.get('/data_chart', (req, res) => {
  res.send(mockDataChart);
});