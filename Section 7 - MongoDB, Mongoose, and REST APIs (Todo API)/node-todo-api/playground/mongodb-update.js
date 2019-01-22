// const MongoClient = require('mongodb').MongoClient;
    const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c46299f5e7064d1d4a4904d")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c3f9cb48d76b052140300cf")
    }, {
        $set: {
            name: "Nathan"
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});