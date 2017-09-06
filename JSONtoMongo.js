'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */

mongoose.connect(config.db.uri);

var connection = mongoose.connection;

connection.on("connected", function () {
  console.log("connected to database");
})


/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 var fs = require('fs');
 var myList;
 fs.readFile('listings.json', 'utf8', function(err, data)
  {

   if (err) throw err;
     myList = JSON.parse(data).entries;

    var listSize = myList.length;
  /*  console.log("size is :"+listSize); * LIST SIZE IS 147 */

    for(var i = 0; i < listSize; i++)
    {
     var iterateData = new Listing(myList[i]);
     iterateData.save(function(err){
 	 if (err) throw err;
 });
    }
 });
/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
