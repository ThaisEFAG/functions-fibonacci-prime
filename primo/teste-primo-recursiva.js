function validate(p) {
  if (p >= 2) {
    let result = cousinsNum(p);
    console.log(`p(${p}) = [${result.join(", ")}];`);
    return result.join(", ");
  } else {
    console.log("Número inválido: Digite um número igual ou maior que 2.");
  }
}

function isPrime(num, divisor = 2) {
  if (num === 2) {
    return true;
  }
  if (num < divisor || num % divisor === 0) {
    return false;
  }
  if (divisor > Math.sqrt(num)) {
    return true;
  }
  return isPrime(num, ++divisor);
}

function cousinsNum(num, currentNum = 2, cousinArr = []) {
  if (currentNum > num) {
    return cousinArr;
  }

  if (isPrime(currentNum)) {
    cousinArr.push(currentNum);
  }
  return cousinsNum(num, ++currentNum, cousinArr);
}

validate(5);
validate(9);
validate(167);
validate(450);
validate("d");
validate(-369);
validate(275);
