/* Fill out these functions using Mongoose queries*/
mongoose = require('mongoose'),
Schema = mongoose.Schema,
Listing = require('./ListingSchema.js'),
config = require('./config');

mongoose.connect(config.db.uri);

var connection = mongoose.connection;

connection.on("connected", function () {
  console.log("connected to database");
})
// ************************************************************************************************
var findLibraryWest = function() {
    /*
      Find the document that contains data corresponding to Library West,
      then log it to the console.
     */
  Listing.find({ code:'LBW' }, function(err, listing) {
  if (err) throw err;

  // object of the user
  console.log(listing);
});
};

// ************************************************************************************************
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */

   Listing.findOneAndRemove({ code:'CABL' }, function(err,listing) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
  console.log(listing);
});
};
// ************************************************************************************************
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */

   Listing.findOneAndUpdate( {name: "Phelps Laboratory"}, {address: "102 Phelps Lab, Gainesville, FL 32603'",
                             coordinates:  {
                               latitude: 29.621042,
                               longitude: -82.366337 }},
                            {'new': true },
                            function(err, listing) {
    if (err) throw err;
    console.log(listing);

  });

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */

   Listing.find({}, function(err, listing) {
  if (err) throw err;

  // object of all the users
  console.log(listing);
});
};

/***************************************************************/
findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
