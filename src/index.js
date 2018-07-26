const data = "juraj is very jiraj likejiraj";

function findMostFrequentLetterInString(longString, cb) {
  // Convert data into Array
  const dataToarray = [...longString];

  // Remove duplicity from Array
  // To avoid interations
  const dataWithNoDuplicity = [...new Set(dataToarray)];

  // Our resukt object
  //keys and values later used to find most freq letter
  const result = dataWithNoDuplicity.reduce((accum, next) => {
    const helper = dataToarray.filter(filterItem => next === filterItem);
    accum[next] = helper.length;
    return accum;
  }, {});

  // THe target letter has the same index as its  value
  const resultKeys = Object.keys(result);
  const resultValues = Object.values(result);

  const indexOfMaxInResultValues = resultValues.indexOf(
    Math.max(...resultValues)
  );

  cb(resultKeys[indexOfMaxInResultValues]);
}

findMostFrequentLetterInString(data, resultValue => {
  console.log("The most frequent letter is :", resultValue);
});
