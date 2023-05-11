const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  Product.fetchall((products) => {
    //shop/product-list ==> ejs File
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
      hasProducts: products.length > 0,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchall((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      noProductsFound: "No Products Found!",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};
