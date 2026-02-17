const promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/testdb';
MongoClient.connect(url)
    .then(function(errr,db){
        db.collection('test').updateOne({
            "name":"joe"
        },
            {
                $set:{
                    "name":"beck"
                }

            });
 })    
 .catch(error => alert(error.message))        
