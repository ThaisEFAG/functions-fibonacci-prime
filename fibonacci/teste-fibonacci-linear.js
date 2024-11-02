function validate(n) {
  let response;
  if (n === 0 || n === 1) {
    response = n;
    console.log(`fib(${n}) = ${response}`);
    return response;
  } else if (n >= 2) {
    response = fib(n);
    console.log(`fib(${n}) = ${response}`);
    return response;
  } else {
    console.log("Número inválido: Digite um número igual ou maior que 0.");
  }
}
function fib(n) {
  let baseCase1 = 0;
  let baseCase2 = 1;
  let nf;

  for (let i = 2; i <= n; i++) {
    nf = baseCase1 + baseCase2;
    baseCase1 = baseCase2;
    baseCase2 = nf;
  }
  return nf;
}

validate(1);
validate(4);
validate(18);
validate();
validate(32);
validate("k");
