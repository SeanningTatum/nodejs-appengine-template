'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const { Gstore, instances } = require('gstore-node');
const { Datastore } = require('@google-cloud/datastore');

// Initalize datastore
const gstore = new Gstore();
const datastore = new Datastore({
  projectId: 'wanderoo-staging-ph', // Add your own projectId
  keyFilename: './config/service-key.json' // Add your own service key
});

 // Connect gstore to the datastore instance
gstore.connect(datastore);
instances.set('default', gstore);

// Routes
const userRoutes = require('./src/routes/user')
const app = express();

// Setup Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Setup CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Routes
app.use('/api/v1/users', userRoutes)

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
