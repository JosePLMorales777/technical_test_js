/**
 * Funcion para verificar que los numeros de un arreglo 
 * dado se encuentren dentro del rango -109 a 109
 * @param {Array} nums Arreglo de numeros 
 * @returns {Number} Número indicando la 
 *                   validacion del arreglo
 *                   0 - No válido
 *                   1 - Válido
 */
function verifArrNums(nums)
{
    // Recorrer el arreglo
    for(var i = 0; i < nums.length; i++) {
        // Si el numero no se encuentra en el rango
        if(nums[i] < -109 || nums[i] > 109)
        {
            return 0;
        }
    }

    return 1;
}

/**
 * Función para obtener la posición de un número en un arreglo
 * @param   {Number} num Número que se busca
 * @param   {Array}  arr Arreglo que se recorre
 * @returns {Number} Posición del número
 */
function numEnArreglo(num, arr) 
{
    // Recorrer arreglo
    for(var i = 0; i < arr.length; i++) 
    {
        // Si se encuentra el número
        if(arr[i] === num) 
        {
            // Retornar pos
            return i;
        }
    }

    // Retornar 0
    return 0;
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
function busquedaNumeros(nums, obj) 
{
    // Verificar si "nums" no es un array
    if(!Array.isArray(nums)) {
        return "El parámetro \"nums\" debe ser un arreglo";
    }

    // Convertir "obj" a int
    obj = parseInt(obj);

    // Verificar tamaño del arreglo
    if(nums.length < 2 || nums.length > 104) 
    {
        return "El tamaño del arreglo debe estar entre 2 y 104";
    }

    // Verificar numeros del arreglo
    if(verifArrNums(nums) === 0) {
        return "Todos los números del arreglo deben estar entre -109 y 109";
    }

    // Verificar objetivo
    if(obj < -109 || obj > 10) {
        return "El objetivo debe estar entre -109 y 10";
    }

    // Guardar arreglo
    let numsOrign = nums.slice();
    // Ordenar arreglo
    nums.sort(function(a, b) { return a - b; });

    // Aux. inicio
    var iniArr = 0;
    // Aux. fin
    var finArr = nums.length - 1;

    // Posicion 1
    var pos1 = -1;
    // Posicion 2
    var pos2 = -1;

    // Mientras ini. sea menor al fin.
    while(iniArr < finArr) 
    {
        // Obtener suma
        let suma = nums[iniArr] + nums[finArr];

        // Si la suma es igual al objetivo
        if(suma === obj) 
        {
            // OBTENER POSICIONES ORIGINALES
            pos1 = numEnArreglo(nums[iniArr], numsOrign);
            pos2 = numEnArreglo(nums[finArr], numsOrign);

            // Retornar descripcion
            return "nums[" + pos1 + "] + nums[" + pos2 + "] = "
                    + numsOrign[pos1] + " + " + numsOrign[pos2] + " = " + obj; 
        }
        else if(suma < obj) // Si la suma es menor al objetivo
        {
            // Incr. inicio
            iniArr++;
        }
        else
        {
            // Decr. fin.
            finArr--;
        }
    }

    return "No existe una respuesta...";
}

/* Comprobaciones */
console.log(busquedaNumeros([0, 7, 2], 9));
console.log(busquedaNumeros([-1, -44, 5, 9, 66, 99, 106, 8, 2, 10], 7));