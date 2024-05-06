const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'Amazon';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Define routes to handle CRUD operations
  app.get('/api/data', (req, res) => {
    db.collection('Api').find({}).toArray((err, result) => {
      if (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(result);
    });
  });

  // Other routes for CRUD operations

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
