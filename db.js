const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

let database;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb+srv://poorani2352002:<password>@cluster0.fumlgr9.mongodb.net/?retryWrites=true&w=majority');
    database = client.db('Student');

    if (!database) {
            console.log('Database not connected');
    }

    return database;
}

module.exports = {
    getDatabase,
    ObjectID
}
