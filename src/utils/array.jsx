
export const addToArray_RemoveIfExists = (array, propName) => {
    const selectedIndex = array.indexOf(propName)
    let newArray = []

    if (selectedIndex === -1) {
      newArray = newArray.concat(array, propName)
    } else if (selectedIndex === 0) {
      newArray = newArray.concat(array.slice(1))
    } else if (selectedIndex === array.length - 1) {
      newArray = newArray.concat(array.slice(0, -1))
    } else {
      newArray = newArray.concat(
        array.slice(0, selectedIndex),
        array.slice(selectedIndex + 1),
      )
    }

    return newArray
}
