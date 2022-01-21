const mysql = require("mysql2");
const dbconfig = require("../config/database");
const connection = mysql.createConnection(dbconfig.connection);
connection.query("USE " + dbconfig.database);

// app/routes.js
module.exports = function (app, passport) {
  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get("/", function (req, res) {
    res.render("index.ejs"); // load the index.ejs file
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get("/login", function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render("login.ejs", { message: req.flash("loginMessage") });
  });

  // process the login form
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/campgrounds", // redirect to the secure profile section
      failureRedirect: "/login", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    }),
    function (req, res) {
      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect("/");
    }
  );

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get("/register", function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render("signup.ejs", { message: req.flash("signupMessage") });
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/campgrounds", // redirect to the secure profile section
      failureRedirect: "/register", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );

  // =====================================
  // PROFILE SECTION =========================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get("/campgrounds", function (req, res) {
    const q = `SELECT * FROM campground`;
    connection.query(q, (err, data) => {
      console.log(data);
      res.render("camps", { data: data });
    });
  });

  app.get("/userprofile/:id", (req, res) => {
    const q = `SELECT * FROM users JOIN profile_picture ON users.id = ${req.params.id} && users_id = ${req.params.id} WHERE users.id = ${req.params.id} GROUP BY username`;
    connection.query(q, (err, data) => {
      console.log(data);
      res.render("profile", { data: data });
    });
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });
};
