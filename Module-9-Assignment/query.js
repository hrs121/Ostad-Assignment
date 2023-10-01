const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const url = 'mongodb://localhost:27017';


const dbName = 'myDatabase';

// Create a new collection
const createCollection = (collectionName) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);

    db.createCollection(collectionName, function (err, res) {
      if (err) throw err;
      console.log(`Collection "${collectionName}" created successfully.`);
      client.close();
    });
  });
};

// Remove a collection from the database
const removeCollection = (collectionName) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);

    db.collection(collectionName).drop(function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log(`Collection "${collectionName}" deleted.`);
      client.close();
    });
  });
};

// Insert a single document into a collection
const insertDocument = (collectionName, document) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);

    db.collection(collectionName).insertOne(document, function (err, res) {
      if (err) throw err;
      console.log('Document inserted successfully.');
      client.close();
    });
  });
};

// Delete/remove a single document from the collection
const deleteDocument = (collectionName, filter) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);

    db.collection(collectionName).deleteOne(filter, function (err, res) {
      if (err) throw err;
      console.log('Document deleted successfully.');
      client.close();
    });
  });
};


