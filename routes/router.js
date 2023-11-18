const express = require("express")
const isEmpty = require("../utilities/util")
const {
  validateRegistration,
  validateLogin,
} = require("../validation/validation")
const messages = require("../utilities/messages")

const router = express.Router()
router.get("/", (req, res) => {
  res.render("home", { pageName: "Home" })
})

router.get("/login", (req, res) => {
  res.render("login", { pageName: "Login" })
})
router.post("/login", (req, res) => {
  const errors = validateLogin(req.body)
  if (isEmpty(errors)) {
    res.render("home", {
      pageName: "Login",
      message: messages.login_successful,
    })
  } else {
    res.render("login", {
      pageName: "Login",
      body: req.body,
      errs: errors,
      message: messages.login_fail,
    })
  }
})

router.get("/register", (req, res) => {
  res.render("register", {
    pageName: "Register",
  })
})

router.post("/register", (req, res) => {
  const errors = validateRegistration(req.body)
  if (isEmpty(errors)) {
    res.render("login", {
      pageName: "Login",
      message: messages.register_successful,
    })
  } else {
    res.render("register", {
      pageName: "Registration",
      body: req.body,
      errs: errors,
      message: messages.register_fail,
    })
  }
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
