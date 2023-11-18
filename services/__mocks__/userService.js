const axios = require("axios")
require("dotenv").config()

const postRegister = async (body) => {
  console.log("Mocked Register")
  return Promise.resolve({
    dataRegister: {
      user: {
        firstName: "Ho",
        lastName: "Tuong",
        address: "Pham The Hien",
        city: "HCM",
        state: "South",
        zipCode: "12345",
      },
      message: "Successful Registration",
    },
  })
}

const postLogin = async (body) => {
  console.log("Mocked Login")
  return Promise.resolve({
    data: {
      user: {
        firstName: "Ho",
        lastName: "Tuong",
        address: "Pham The Hien",
        city: "HCM",
        state: "South",
        zipCode: "12345",
      },
      message: "Login successful",
      logged: true,
    },
  })
}

module.exports = { postRegister, postLogin }
