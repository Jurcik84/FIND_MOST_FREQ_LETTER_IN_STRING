const data = "juraj is very jiraj likejiraj";

const dataToarray = [...data];

const dataWithNoDuplicity = [...new Set(dataToarray)];

const result = {};

dataWithNoDuplicity.forEach(item => {
  const helper = dataToarray.filter(filterItem => item === filterItem);
  result[item] = helper.length;
});

const resultKeys = Object.keys(result);
const resultValues = Object.values(result);

const max = Math.max(...resultValues);
const indexOfMaxInResultValues = resultValues.indexOf(max);

const res = resultKeys[indexOfMaxInResultValues];

console.log(res);
