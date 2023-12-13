function checkShoeInput(shoe) {
  if (
    shoe.brand == "" ||
    shoe.model == "" ||
    shoe.img == "" ||
    shoe.brand == null ||
    shoe.model == null ||
    shoe.img == null
  ) {
    return false;
  }
  return true;
}

module.exports = checkShoeInput;
