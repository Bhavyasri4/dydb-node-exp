const{main}=require('./db');
const express=require('express');
const url=require('url');

var api=express();

api.get('/',function(req,res){
    res.send('API server started');

});
api.get('/dynb',async function(req,res){
    var urldata=url.parse(req.url,true);
    var database=urldata.query.dbname;
    var col=urldata.query.colname;
    var empid=urldata.query.empid;
    var result=await main(database,col,empid);
    res.send(result);

});

 api.listen(2324,function(){
    console.log('API server started');

 });
