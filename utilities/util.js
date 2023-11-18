const isEmpty = (obj) => {
  console.log("log: ", obj)
  if (obj && Object.keys(obj).length === 0) {
    return true
  } else {
    return false
  }
}

module.exports = isEmpty
