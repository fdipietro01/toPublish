//resta module
const resta = (...numeros) => {
  if (numeros.length < 2) return 0;
  if (numeros.some((x) => typeof x !== "number")) return null;
  let acu;
  numeros.forEach((curr, idx) => {
    if (idx == 0) {
      acu = curr;
    } else {
      acu = acu - curr;
    }
  });
  console.log(acu);
  return acu;
};

let testPasados = 0;
let testTotales = 4;

console.log("----------------------------------------------------------------");
console.log(
  "TEST 1: La función debe devolver null si algún parámetro no es numérico"
);

let resultadoTest1 = resta(1, "2");
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

const resultadoTest2 = resta();
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
console.log("TEST 3: La función debe devolver la resta de los 2 parámetros");

const resultadoTest3 = resta(2, 3);
if (resultadoTest3 === -1) {
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
  "TEST 4: La función debe restar todos los parámetros que le lleguen"
);

const resultadoTest4 = resta(1, 2, 3, 4);
if (resultadoTest4 === -8) {
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

module.exports = resta;
