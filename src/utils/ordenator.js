function ordenator(flavoursList) {
  return flavoursList.reduce((acc, flavour, index, array) => {
    if (index === 0) {
      return flavour
    }

    if (index === array.length - 1) {
      return `${acc} e ${flavour}`
    }

    return `${acc}, ${flavour}`
  }, '')
}

export default ordenator
