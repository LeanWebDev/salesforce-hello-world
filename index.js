

const jsforce = require("jsforce");


const conn = new jsforce.Connection({});

const dotenv = require("dotenv");

// Environment
dotenv.config();
console.log("Is it working? Ping ->", process.env.PING);

conn.login(
  process.env.SF_USERNAME,
  process.env.SF_PASSWORD + process.env.SF_SECURITY_TOKEN,
  function(loginErr, loginResult) {
    if (loginErr) {
      return console.error(loginErr);
    }
    console.log("Login result: " + loginResult);
    console.log("Account -> update");

    /* Start query logic */

    let query = conn.sobject("Contact").update(
      {
        Id: '0034K000003d5iBQAQ',
        Atlas_Status__c: 'Active'
        
      },
      function(err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Updated this contact : " + ret.id);
        console.log(ret);
      }
    );

    /* End query logic */
  }
);