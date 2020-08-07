// Email Standardizer created by Chad Williams July 30, 2020.
// Purpose: to detect email tumbling abuse.
// How: Takes email address input, removes special characters (except - and _). Also removes anything after + from email username.


function standardizeEmail(e) {
  const a = e.indexOf("@"); // find where @ is located
  var emailUsername = e.slice(0, a); // save username into new variable
  // console.log("emailUsername = " + emailUsername);
  var emailDomain = e.slice(a, e.length); // save domain into new variable
  // console.log("emailDomain = " + emailDomain);

  var p = emailUsername.indexOf("+"); // find where + is located. if not found then p = -1
  if (p > -1) { // if + was found
    emailUsername = emailUsername.slice(0, p); // slice off + and anything after
  }

  var strippedUsername = emailUsername.replace(/[^\w\-]/g,""); // strip out special characters except hyphen & underscore
  // console.log("strippedUsername = " + strippedUsername);
  var standardizedEmail = strippedUsername + emailDomain; // combine username & domain
  // console.log("standardizedEmail = " + standardizedEmail);

  return standardizedEmail;
}

/*
// TESTS:
var test1 = standardizeEmail("joe.smith123@gmail.com");
console.log("test1 = " + test1); // should match

var test2 = standardizeEmail("joe.sm.ith.123@gmail.com");
console.log("test2 = " + test2); // should match

var test3 = standardizeEmail("joe.smith123+spam@gmail.com");
console.log("test3 = " + test3); // should match

var test4 = standardizeEmail("joe.smith123+spam+spam2@gmail.com")
console.log("test4 = " + test4) // should match

var test5 = standardizeEmail("joe_smith123@gmail.com")
console.log("test5 = " + test5) // should NOT match because of underscore

var test6 = standardizeEmail("joe-smith123@gmail.com")
console.log("test6 = " + test6) // should NOT match because of hyphen
*/