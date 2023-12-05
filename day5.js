function checkNum(num) {
  let arr = [];
  let maxInteger;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      arr.push(num[i]);
    }
  }

  if (arr.length > 0) {
    maxInteger = Math.max(...arr) + '';
  }

  return maxInteger ? maxInteger.repeat(3) : ""
}

console.log(checkNum('42352338'));