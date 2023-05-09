const path = require("path");

//process.mainModule.filename:
//console.log(process.mainModule.filename)
//  Output :  W:\Personal\Node
module.exports = path.dirname(process.mainModule.filename);
