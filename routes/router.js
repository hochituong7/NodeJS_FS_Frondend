const express = require("express")

const router = express.Router()
router.get("/", (req, res) => {
  res.render("home", { pageName: "Home" })
})

router.get("/login", (req, res) => {
  res.render("login", { pageName: "Login" })
})

router.get("/register", (req, res) => {
  res.render("register", { pageName: "Register" })
})

router.get("/about", (req, res) => {
  res.render("about", { pageName: "About" })
})

router.get("/books", (req, res) => {
  res.render("books", { pageName: "Books" })
})
router.get("/authors", (req, res) => {
  res.render("authors", { pageName: "Authors" })
})

// <title><%= pageName %></title>

module.exports = router
