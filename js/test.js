/**
 * Funcion para verificar que los numeros de un arreglo
 * dado se encuentren dentro del rango -109 a 109
 * @param {Array} numbers Arreglo de numeros
 * @returns {boolean} Boolean indicando la validacion del arreglo
 */
function verifyArrayNumbers(numbers) {
    if (!numbers || !numbers.length) {
        return false
    }

    const MAX_VALID_NUMBER = 109;
    const MIN_VALID_NUMBER = -109;
    return numbers.every(number => MIN_VALID_NUMBER < number && number < MAX_VALID_NUMBER)
}

/**
 * Función para obtener la posición de un número en un arreglo
 * @param   {Number} searchNumber Número que se busca
 * @param   {Array}  arr Arreglo que se recorre
 * @returns {Number} Posición del número
 */
function posicionNumeroEnArreglo(searchNumber, arr) {
    return arr.findIndex(number => searchNumber === number);
}

/**
 * Función para encontrar los dos numeros
 * dentro de un arreglo que suman
 * un objetivo entero
 * @param   {Array}  nums Arreglo de numeros
 * @param   {Number} obj Objetivo entero
 * @returns {String} Descripción de las posiciones de los
 *                   números que se deben sumar o
 *                   de un error presentado
 */
function busquedaNumeros(nums, obj) {
    // Verificar si "nums" no es un arreglo
    if (!Array.isArray(nums)) {
        return "El parámetro \"nums\" debe ser un arreglo";
    }

    // Convertir "obj" a int
    obj = parseInt(obj);
    // TODO: obj might be NaN. Check to be safe.

    // Verificar tamaño del arreglo
    if (nums.length < 2 || nums.length > 104) {
        return "El tamaño del arreglo debe estar entre 2 y 104";
    }

    // Verificar numeros del arreglo
    if (!verifyArrayNumbers(nums)) {
        return "Todos los números del arreglo deben estar entre -109 y 109";
    }

    // Verificar objetivo
    if (obj < -109 || obj > 10) {
        return "El objetivo debe estar entre -109 y 10";
    }

    // Guardar arreglo
    let numsOrign = nums.slice();
    // Ordenar arreglo
    nums.sort((a, b) => a - b);

    // Aux. inicio
    let iniArr = 0;
    // Aux. fin
    let finArr = nums.length - 1;

    // Posicion 1
    let pos1 = -1;
    // Posicion 2
    let pos2 = -1;

    // Mientras ini. sea menor al fin.
    while (iniArr < finArr) {
        // Obtener suma
        const suma = nums[iniArr] + nums[finArr];

        // Si la suma es igual al objetivo
        if (suma === obj) {
            // OBTENER POSICIONES ORIGINALES
            pos1 = posicionNumeroEnArreglo(nums[iniArr], numsOrign);
            pos2 = posicionNumeroEnArreglo(nums[finArr], numsOrign);

            // Retornar descripcion
            return "nums[" + pos1 + "] + nums[" + pos2 + "] = "
                + numsOrign[pos1] + " + " + numsOrign[pos2] + " = " + obj;
        } else if (suma < obj) // Si la suma es menor al objetivo
        {
            // Incr. inicio
            iniArr++;
        } else {
            // Decr. fin.
            finArr--;
        }
    }

    return "No existe una respuesta...";
}

let divCentralRef;

function getDivCentral() {
    if (!divCentralRef) {
        divCentralRef = document.getElementById("div-central");
    }

    return divCentralRef;
}

/**
 * Función para añadir un salto de línea
 */
function anadirSaltoLinea() {
    // Obtener div central
    const divCentral = getDivCentral();

    // Crear salto
    const saltoLinea = document.createElement("br");

    // Añadir salto
    divCentral.appendChild(saltoLinea);
}

/**
 * Función para presentar gráficamente una operación para
 * encontrar los números que suman el objetivo
 * @param   {Array}  nums Arreglo de numeros
 * @param   {Number} obj Objetivo entero
 */
function busquedaNumerosGraficamente(nums, obj) {
    // Obtener div central
    const divCentral = getDivCentral();

    // Crear elemento div
    const elementoDiv = document.createElement("div");
    // Dar estilo
    elementoDiv.classList.add("card", "shadow-sm", "pt-3", "px-3", "pb-1");

    // Si "nums" es un arreglo
    if (Array.isArray(nums)) {
        // Crear párrafo para mostrar arreglo
        const parrafSArr = document.createElement("p");
        // Crear nodo de texto
        const nodoTxtSArr = document.createTextNode("Arreglo: [" + nums.join(", ") + "]");
        // Añadir nodo de texto a párrafo
        parrafSArr.appendChild(nodoTxtSArr);

        // Añadir párrafo a div
        elementoDiv.appendChild(parrafSArr);
    }

    // Crear párrafo para mostrar objetivo
    const parrafSObj = document.createElement("p");
    // Crear nodo de texto
    const nodoTxtSObj = document.createTextNode("Objetivo: " + obj);
    // Añadir nodo de texto a párrafo
    parrafSObj.appendChild(nodoTxtSObj);

    // Obtener resultado
    const resultado = busquedaNumeros(nums, obj);

    // Crear párrafo para mostrar resultado
    const parrafSRes = document.createElement("p");
    // Crear nodo de texto
    const nodoTxtSRes = document.createTextNode(resultado);
    // Añadir nodo de texto a párrafo
    parrafSRes.appendChild(nodoTxtSRes);

    // AÑADIR PÁRRAFOS A DIV
    elementoDiv.appendChild(parrafSObj);
    elementoDiv.appendChild(parrafSRes);

    // AÑADIR DIV A DIV CENTRAL
    divCentral.appendChild(elementoDiv);
}

/* Comprobaciones - consola */
console.log(busquedaNumeros([0, 7, 2], 9));
console.log(busquedaNumeros([-1, -44, 5, 9, 66, 99, 106, 8, 2, 10], 7));
console.log(busquedaNumeros([4, 5, -22, -1, -42, 1, -6, -23, -44, -35], -77));

/* Comprobaciones gráficas en la pantalla */
busquedaNumerosGraficamente([0, 7, 2], 9); // Operación 1
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([-1, -44, 5, 9, 66, 99, 106, 8, 2, 10], 7); // Operación 2
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([-5, 1, -30, 2, -48, 3, 31, -38, , -11, 4, 5, -62, -44], -100); // Operación 3
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([-5, 6, -4, -25, -7, 8, -88, -14, 3, -28, -27, -100, -33, -35], 1); // Operación 4
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([1], 1); // Operación con error 1
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([-110, -8, 7, 10], 1); // Operación con error 2
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([-8, 7, 110, 10], 1); // Operación con error 3
anadirSaltoLinea(); // Salto de línea
busquedaNumerosGraficamente([110, -99, 2, 3, 4], 11); // Operación con error 4