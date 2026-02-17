const { MongoClient } = require('mongodb');

async function run() {
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url);

  try {
    
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db('testdb');

  
    const result = await db.collection('test').updateOne(
      { name: "joe" },
      { $set: { name: "beck" } }
    );

    console.log("Matched:", result.matchedCount);
    console.log("Modified:", result.modifiedCount);

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
   
    await client.close();
    console.log("Connection closed");
  }
}

run();
