function validate(n) {
  if (!isNaN(n) && n >= 0) {
    response = fibRec(n);
    console.log(`fib(${n}) = ${response}`);
  } else if (isNaN(n) || n < 0)
    console.log("Número inválido: Digite um número igual ou maior que 0.");
}

function fibRec(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let result = fibRec(n - 1) + fibRec(n - 2);

  return result;
}

validate(-6);
validate(5);
validate(8);
validate(10);
validate("d");
