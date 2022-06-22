/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje. listo
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio. listo
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). listo
*/

main();

function main() {
    const $botonCalcularIntegrantes = document.querySelector("#button-total-integrantes");
    $botonCalcularIntegrantes.onclick = function () {
        const $inputTotalIntegrantes = Number(document.querySelector("#input-total-integrantes").value);
        resetear();
        crearIntegrantes($inputTotalIntegrantes);
        return false;
    }
}

function botonCalcularEdades() {
    mostrarBotonCalcular();
    mostrarBotonReset();
    mostrarBotonCalcularSalario();

    const $botonCalcularEdades = document.querySelector('#button-calculate');
    $botonCalcularEdades.onclick = calcularResultados;

    const $botonCalcularSalario = document.querySelector('#boton-calcular-salario');
    $botonCalcularSalario.onclick = function () {
        calcularResultadosSalario();
        return false;
    }

    const $botonResetear = document.querySelector('#button-reset');
    $botonResetear.onclick = function () {
        resetear();
        return false;
    }
}

function crearIntegrantes(totalIntegrantes) {
    if (totalIntegrantes <= 0) {
        return;
    }
    botonCalcularEdades();
    for (let i = 0; i < totalIntegrantes; i++) {
        crearEdadIntegrante(i);
        crearSalarioIntegrante(i);
        botonBorrarSalarioIntegrante(i);
    }
}

function botonBorrarSalarioIntegrante(indice) {
    const $botonSalario = document.querySelector(`#button-integrante-${indice + 1}`);
    $botonSalario.onclick = function () {
        borrarSalarioIntegrante(indice);
        return false;
    }
}

function borrarSalarioIntegrante(indice) {
    document.querySelector(`#label-salario-integrante-${indice + 1}`).remove();
    document.querySelector(`#input-salario-integrante-${indice + 1}`).remove();
    document.querySelector(`#button-integrante-${indice + 1}`).remove();
}
function crearEdadIntegrante(indice) {
    const $nodoIntegrante = document.querySelector("#integrantes");

    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = "integrante";
    nuevoDiv.id = `integrante-${indice + 1}`;

    const nuevoLabel = document.createElement('label');
    nuevoLabel.textContent = `Integrante (${(indice + 1)}), Ingresar Edad:`;

    const nuevoInput = document.createElement('input');
    nuevoInput.className = "edad-integrantes";
    nuevoInput.id = `edad-integrante-${indice + 1}`;

    nuevoDiv.appendChild(nuevoLabel);
    nuevoDiv.appendChild(nuevoInput);
    $nodoIntegrante.appendChild(nuevoDiv);
}

function crearSalarioIntegrante(indice) {
    const $divIntegrante = document.querySelector(`#integrante-${indice + 1}`);

    const nuevoLabel = document.createElement('label');;
    nuevoLabel.id = `label-salario-integrante-${indice + 1}`;
    nuevoLabel.textContent = 'Ingresar Salario:';

    const nuevoInput = document.createElement('input');
    nuevoInput.className = 'salario-integrantes';
    nuevoInput.id = `input-salario-integrante-${indice + 1}`;

    const nuevoBoton = document.createElement('button');
    nuevoBoton.id = `button-integrante-${indice + 1}`;
    nuevoBoton.textContent = 'Borrar Salario';

    $divIntegrante.appendChild(nuevoLabel);
    $divIntegrante.appendChild(nuevoInput);
    $divIntegrante.appendChild(nuevoBoton);
}

function calcularResultados() {
    ocultarResultados();
    let listaEdades = obtenerListaInputs("edad-integrantes");
    if (listaEdades.length > 0) {
        mostrarResultados();
        subirResultado('older-age', numeroMayor(listaEdades));
        subirResultado('younger-age', numeroMenor(listaEdades));
        subirResultado('average-age', numeroPromedio(listaEdades));
    }
    return false;
}

function calcularResultadosSalario() {
    ocultarResultadosSalario();
    let listaSalarios = obtenerListaInputs("salario-integrantes");
    if (listaSalarios.length > 0) {
        mostrarResultadosSalarios();
        subirResultado('mayor-salario-anual', numeroMayor(listaSalarios));
        subirResultado('menor-salario-anual', numeroMenor(listaSalarios));
        subirResultado('promedio-salario-anual', numeroPromedio(listaSalarios));
        subirResultado('promedio-salario-mensual', numeroPromedio(listaSalarios) / 12);
    }
}

function subirResultado(tipo, valor) {
    document.querySelector(`#${tipo}`).textContent = valor;
}

function obtenerListaInputs(txt) {
    const $listaInputs = document.querySelectorAll(`.${txt}`);
    let lista = [];
    $listaInputs.forEach(element => {
        if (Number(element.value) > 0) {
            lista.push(Number(element.value));
        }
    });
    return lista;
}

function resetear() {
    const $listaIntegrantes = document.querySelectorAll('.integrante');
    $listaIntegrantes.forEach(element => {
        element.remove();
    });
    document.querySelector("#input-total-integrantes").value = "";

    ocultarBotonCalcular();
    ocultarBotonCalcularSalario();
    ocultarBotonReset();
    ocultarResultados();
    ocultarResultadosSalario();
}

function numeroMenor(numeros) {
    let menorEdad = numeros[0];
    numeros.forEach(element => {
        if (element < menorEdad) {
            menorEdad = element;
        }
    });
    return menorEdad;
}

function numeroMayor(numeros) {
    let mayorEdad = numeros[0];
    numeros.forEach(element => {
        if (element > mayorEdad) {
            mayorEdad = element;
        }
    });
    return mayorEdad;
}

function numeroPromedio(numeros) {
    let totalEdad = 0;
    numeros.forEach(element => {
        totalEdad += element;
    });
    return totalEdad / numeros.length;
}

function mostrarBotonCalcular() {
    document.querySelector('#button-calculate').className = "";
}

function mostrarBotonCalcularSalario() {
    document.querySelector('#boton-calcular-salario').className = "";
}

function mostrarBotonReset() {
    document.querySelector('#button-reset').className = "";
}

function mostrarResultados() {
    document.querySelector('#calculations').className = "";
}

function mostrarResultadosSalarios() {
    document.querySelector('#resultados-calculos-salario').className = "";
}

function ocultarResultadosSalario() {
    document.querySelector('#resultados-calculos-salario').className = "oculto";
}

function ocultarBotonCalcularSalario() {
    document.querySelector('#boton-calcular-salario').className = "oculto";
}

function ocultarBotonCalcular() {
    document.querySelector('#button-calculate').className = "oculto";
}

function ocultarBotonReset() {
    document.querySelector('#button-reset').className = "oculto";
}

function ocultarResultados() {
    document.querySelector('#calculations').className = "oculto";
}
