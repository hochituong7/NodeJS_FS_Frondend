const service = require("./userService")

jest.mock("./userService")
describe("Test service calls backend", () => {
  test("Post Register should return a user ", async () => {
    let id = Math.floor(Math.random() * 1000)
    const body = {
      firstName: "Ho",
      lastName: "Tuong",
      address: "Pham The Hien",
      city: "HCM",
      state: "South",
      zipCode: "12345",
      email: `hochituong${id}@gmail.com`,
      password: "123123",
    }
    const user = await service.postRegister(body)
    console.log("user: ", user)
    expect(user.dataRegister.message).toEqual("Successful Registration")
    expect(user.dataRegister.user.firstName).toEqual("Ho")
  })

  //   test("Post Login should return a user ", async () => {
  //     const body = {
  //       email: "hochituong35@gmail.com",
  //       password: "123123",
  //     }
  //     const user = await service.postLogin(body)
  //     console.log("user: ", user)
  //     expect(user.data.message).toEqual("Login successful")
  //     expect(user.data.user.firstName).toEqual("Ho")
  //   })
})
