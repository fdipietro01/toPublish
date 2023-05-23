//suma module
const suma = (...numeros) => {
  if (numeros.length < 2) return 0;
  if (numeros.some((x) => typeof x !== "number")) return null;
  let suma = numeros.reduce((acu, curr) => {
    return acu + curr;
  }, 0);
  console.log(suma);
  return suma;
};

//posibles fallos suma(), suma(1), suma(""), sumar(1,2,3,4,5,6,7,8,9,)

let testPasados = 0;
let testTotales = 4;

console.log("----------------------------------------------------------------");
console.log(
  "TEST 1: La función debe devolver null si algún parámetro no es numérico"
);

let resultadoTest1 = suma(1, "2");
if (resultadoTest1 === null) {
  console.log("Test 1 pasa existosamente");
  testPasados++;
} else {
  console.log(
    "Test 1 no ha pasado, se recibió",
    typeof resultadoTest1,
    "pero se esperaba null"
  );
}

console.log("----------------------------------------------------------------");
console.log("TEST 2: La función debe devolver 0 si no hay parámetros");

const resultadoTest2 = suma();
if (resultadoTest2 === 0) {
  console.log("Test 2 ha pasado exitosamente");
  testPasados++;
} else {
  console.log(
    "Test 2 no ha pasado, se recibio",
    resultadoTest2,
    "pero se esperaba 0"
  );
}

console.log("----------------------------------------------------------------");
console.log("TEST 3: La función debe devolver la suma de los 2 parámetros");

const resultadoTest3 = suma(2, 3);
if (resultadoTest3 === 5) {
  console.log("Test 3 ha pasado exitosamente");
  testPasados++;
} else {
  console.log(
    "Test 3 no ha pasado, se recibio",
    resultadoTest3,
    "pero se esperaba 5"
  );
}

console.log("----------------------------------------------------------------");
console.log(
  "TEST 4: La función debe sumar todos los parámetros que le lleguen"
);

const resultadoTest4 = suma(1, 2, 3, 4);
if (resultadoTest4 === 10) {
  console.log("Test 4 ha pasado exitosamente");
  testPasados++;
} else {
  console.log(
    "Test 4 no ha pasado, se recibio",
    resultadoTest4,
    "pero se esperaba ",
    10
  );
}

console.log("Test totales: ", testTotales, "Test exitosos: ", testPasados);
console.log(
  testPasados === testTotales
    ? "Todos los test pasados"
    : "Han fallado algunos tests"
);

module.exports = suma;
