const {MongoClient}=require('mongodb');

const client=new MongoClient('mongodb://127.0.0.1:27017');

async function main(dbname,colname,empid){
    await client.connect();
    console.log('server connected');

    const db=client.db(dbname);
    console.log("db connected");
    const collection=db.collection(colname);
    console.log("collection selected");
    var query={'empid':empid};
    const result=await collection.insertOne(query);
    const result1=await collection.find({}).toArray();
    return (result1);

}
module.exports={
    main
};