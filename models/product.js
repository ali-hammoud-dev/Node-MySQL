const fs = require("fs");
const pt = require("path");

const p = pt.join(
  pt.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callBack) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) callBack([]);
    else callBack(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchall(callBack) {
    getProductsFromFile(callBack);
  }
};
