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

    // Posicion 1
    var pos1 = -1;
    // Posicion 2
    var pos2 = -1;

    // Recorrer arreglo de numeros
    for(var i = 0; i < nums.length; i++)
    {
        // Recorrer arreglo de numeros (anidacion)
        for(var j = 0; j < nums.length; j++) 
        {
            // Obtener suma
            let suma = nums[i] + nums[j];

            // Si la suma es igual al objetivo
            if(suma === obj)
            {
                // Indicar posicion
                pos1 = i;
                pos2 = j;

                // Retornar descripcion
                return "nums[" + i + "] + nums[" + j + "] = " + obj;
            }
        }
    }

    return "No existe una respuesta...";
}

/* Comprobaciones */
console.log(busquedaNumeros([0, 7, 2], 9));
console.log(busquedaNumeros([-1, -44, 5, 9, 66, 99, 106, 8, 2, 10], 7));