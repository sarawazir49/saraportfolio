const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection settings
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'your-database-name'; // Replace with your database name
const collectionName = 'messages'; // Replace with the name of your collection

// Connect to the MongoDB database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
    return;
  }

  console.log('Connected to the database');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Start the server after successful database connection
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
