function linearSearch(searchTerm, arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i
    }
  }
  return undefined
}

function globalLinearSearch(searchTerm, arr) {
  let arrResult = []

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === searchTerm) {
      arrResult.push(j)
    }
  }
  return arrResult
}

module.exports = { linearSearch, globalLinearSearch };
