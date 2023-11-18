const validateRegistration = (body) => {
  let errors = {}

  if (
    body.firstName.trim().length < 2 ||
    !/^[A-Za-z]+$/.test(body.firstName.trim())
  ) {
    errors.firstName = "First Name is required"
  }

  if (
    body.lastName.trim().length < 2 ||
    !/^[A-Za-z]+$/.test(body.lastName.trim())
  ) {
    errors.lastName = "Last Name is required"
  }

  if (
    body.address.trim().length < 2 ||
    !/^[\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.']+$/.test(body.address.trim())
  ) {
    errors.address = "Address is required"
  }

  if (
    body.email.trim().length < 2 ||
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\. \w{2,3})+$/.test(body.email.trim())
  ) {
    errors.email = "Email invalid format"
  }
  return errors
}

const validateLogin = (body) => {
  let errors = {}
  //   if (
  //     body.email.trim().length < 2 ||
  //     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\. \w{2,3})+$/.test(body.email.trim())
  //   ) {
  //     errors.email = "Email invalid format"
  //   }
  return errors
}

module.exports = { validateRegistration, validateLogin }
