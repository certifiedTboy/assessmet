// const LocalStrategy = require("passport-local").Strategy;
// const mysql = require("mysql2");
// const bcrypt = require("bcrypt-nodejs");
// const db = require("../config");
// const Users = db.user;
// const bodyParser = require("body-parser");
// const Op = db.Sequelize.Op;

// module.exports = function (passport) {
//   passport.serializeUser(function (user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function (id, done) {
//     connection.query(
//       "SELECT * FROM users WHERE id = ? ",
//       [id],
//       function (err, rows) {
//         // console.log(rows[0])
//         done(err, rows[0]);
//       }
//     );
//   });

//   passport.use(
//     "local-signup",
//     new LocalStrategy(
//       {
//         usernameField: "username",
//         passwordField: "password",
//         passReqToCallback: true,
//       },
//       function (req, username, password, done) {
//         connection.query(
//           "SELECT * FROM users WHERE username = ?",
//           [username],
//           function (err, rows) {
//             if (err) return done(err);
//             if (rows.length) {
//               return done(
//                 null,
//                 false,
//                 req.flash("signupMessage", "The eamil is already registered")
//               );
//             } else {
//               var newUserMysql = {
//                 username: username,
//                 firstname: req.body.firstname,
//                 othername: req.body.othername,
//                 number: req.body.number,
//                 password: bcrypt.hashSync(password, null, null),
//               };
//               // console.log(newUserMysql)
//               // var insertQuery = "INSERT INTO users (username, firstname, othername, number, password ) values (?,?)";

//               connection.query(
//                 "INSERT INTO users SET ?",
//                 newUserMysql,
//                 (err, rows) => {
//                   newUserMysql.id = rows.insertId;

//                   return done(null, newUserMysql);
//                 }
//               );
//             }
//           }
//         );
//       }
//     )
//   );

//   passport.use(
//     "local-login",
//     new LocalStrategy(
//       {
//         usernameField: "username",
//         passwordField: "password",
//         passReqToCallback: true,
//       },
//       function (req, username, password, done) {
//         connection.query(
//           "SELECT * FROM users WHERE username = ?",
//           [username],
//           function (err, rows) {
//             if (err) return done(err);
//             if (!rows.length) {
//               return done(
//                 null,
//                 false,
//                 req.flash("loginMessage", "Invalid login details")
//               );
//             }

//             if (!bcrypt.compareSync(password, rows[0].password))
//               return done(
//                 null,
//                 false,
//                 req.flash("loginMessage", "Invalid login details")
//               );

//             return done(null, rows[0]);
//           }
//         );
//       }
//     )
//   );
// };
