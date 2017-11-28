let neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://192.168.1.116", neo4j.auth.basic("neo4j", "neo4js"));
let query = `MATCH (n:player{name:'nehra'})-[s:knows]->(m:player{name:'yuvi'}) return n,m,s`;
// let session = driver().session();

// Register a callback to know if driver creation was successful:
// driver.onCompleted = function() {
//   // proceed with using the driver, it was successfully instantiated
//   console.log("successfully instantiated");
// };
//
// // Register a callback to know if driver creation failed.
// // This could happen due to wrong credentials or database unavailability:
// driver.onError = function(error) {
//   console.log('Driver instantiation failed', error);
// };

// Create a session to run Cypher statements in.
// Note: Always make sure to close sessions when you are done using them!
var session = driver.session();
session
    .run(query)
    .then(function(result) {

        session.close();
        console.log(query);
        console.log(result);
        driver.close();

    })
    .catch(function(error) {
        console.log(error);
        driver.close();
    });
