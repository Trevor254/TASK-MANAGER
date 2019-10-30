//CRUD create, read, update, delete

const { MongoClient, ObjectID} = require('mongodb'); //requiring the db
//const MongoClient = mongodb.MongoClient; //using the MongoClient method on mongodb package to connect to the database

const connectionURL = 'mongodb://127.0.0.1:27017';//database URL
const databaseName = 'TASK-MANAGER';//database name

const id = new ObjectID();
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error,client) => {//using connect method on Mongoclient to connect to the database
                                                                                // (error, client) are what we use to inquire the database
    if(error){
        return  console.log(error);
    }

    const db = client.db(databaseName);//use db method on client then pass the database name

    // db.collection('users').insertOne({ // use collection method on db
    //     name:'Heathens',
    //     age:33
    // });
    // db.collection('users').insertMany([
    // {
    //     name:'Jen',
    //     age:28
    // }, {
    //     name:'Gunther',
    //     age:27
    // }
    // ],(error, result) => {
    //     if(error){
    //         return console.log('unable to insert documents')
    //     }
    //     console.log(result.ops);//ops contains the data created 
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description:'clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description:'Pot plants',
    //         completed:false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks');
    //     }
    //     console.log(result.ops)
   // })
// db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
//     console.log(tasks);
//    });
// db.collection('users').updateOne({
//     id: new ObjectID("5db2e32bc4d5c91cd8523dd0")
// }, {
//     $inc:{
//         age:3
//     }
//    }).then((result) => {
//     console.log(result);
//    }).catch((error) => {
//     console.log(error)
//    })
//    db.collection('tasks').updateMany({
//        completed: false
//    }, {
//        $set: {
//            completed:true
//        }
//    }).then((result) => {
//        console.log(result.modifiedCount);
//    }).catch((error) => {
//        console.log(error);
//    });
      
      db.collection('tasks').deleteOne({
          description:'clean the house'
      }).then((result) => {
          console.log(result);
      }).catch((error) => {
          console.log(error);
      });

 });