const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //you can also define an object wich will hold the data that is passed as variables into that template.
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAllProducts = (req, res, next) => {
  Product.fetchall((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      noProductsFound: "No Products Found!",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
