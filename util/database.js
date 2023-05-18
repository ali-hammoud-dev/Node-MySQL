const Sequelize = require("sequelize");

//1st Param: Schema Name ; 2nd Param: UserName ; 3rd Part: MySQP Password (root password) 
const sequelize = new Sequelize("node-complete", "root", "p@ssw0rd", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
