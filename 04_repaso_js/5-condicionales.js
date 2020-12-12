
/* ==========================
    Los condicionales
========================== */

/* Nos permiten evaluar condiciones y realizar diferentes acciones según el resultado de esas evaluaciones. */

if (condición) {
  // código a ejecutar si la condición es verdadera
}


// Con else
if (condición) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}

// Con else if
if (condición) {
  // código a ejecutar si la condición es verdadera
} else if (otracondición) {
  // código a ejecutar si la otra condición es verdadera
} else {
  // código a ejecutar si todas las condiciones son falsas
}

/* EJEMPLO */

let edad = 19;
let acceso = '';

if (edad < 16) {
  acceso = 'prohibido';
} else if (edad >= 16 && edad <= 18) {
  acceso = 'permitido solo acompañado de un mayor';
} else {
  acceso = 'permitido';
}

/*  EJERCICIOS PLAYGROUND */

// Ejercicio 1
let dato = false
if (dato) {
    console.log('es true')
} else {
    console.log('es false')
}

// Ejercicio 2
let lenguaje = "javascript"
if (lenguaje == "javascript") {
    console.log('Estoy aprendiendo')
} else {
    console.log('Lo aprenderé mas adelante')
}

// Ejercicio 3
function puedePasar(nombre) {
    if (nombre == "Cosme Fulanito") {
        return false
    } else {
        return true
    }
}