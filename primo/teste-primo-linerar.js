function validate(p) {
  if (p >= 2) {
    let result = primo(p);
    console.log(`p(${p}) = [${result.join(", ")}];`);
    return result.join(", ");
  } else {
    console.log("Número inválido: Digite um número igual ou maior que 2.");
  }
}

function primo(p) {
  let cousinArr = [];
  for (let i = 2; i <= p; i++) {
    let cousin = true;
    for (let divisor = 2; divisor <= i; divisor++) {
      if (i === 2 || divisor > Math.sqrt(i)) {
        cousinArr.push(i);
        break;
      } else if (i % divisor === 0) {
        cousin = false;
        break;
      }
    }
  }
  return cousinArr;
}

validate(10);
validate("ç");
validate(131);
validate(63);
validate(167);
validate(-45);
