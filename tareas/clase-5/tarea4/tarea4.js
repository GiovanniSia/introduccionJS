//TAREA4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

tarea4();

function tarea4(){
    const $listNumber = document.querySelectorAll('li');

    console.log("Average:" + average($listNumber));
    console.log("Number more little: " + numberMostLittle($listNumber));
    console.log("Number more bigger: " + numberMostBigger($listNumber));
    console.log("Number most repeated: " + numberMostRepeated($listNumber));
    document.querySelector('#average').textContent = "Average:" + average($listNumber);
    document.querySelector('#number-most-little').textContent = "Number more little: " + numberMostLittle($listNumber);
    document.querySelector('#number-most-bigger').textContent = "Number more bigger: " + numberMostBigger($listNumber);
    document.querySelector('#number-most-repeated').textContent = "Number most repeated: " + numberMostRepeated($listNumber);

}

function average($listNumber){
    let total = 0;
    $listNumber.forEach(element => {
        total += Number(element.textContent);
    });
    return total / $listNumber.length;
}

function numberMostLittle($listNumber){
    let number = Number($listNumber[0].textContent);
    $listNumber.forEach(element => {
        if(Number(element.textContent) < number){
            number = Number(element.textContent);
        }
    });
    return number;
}

function numberMostBigger($listNumber){
    let number = Number($listNumber[0].textContent);
    $listNumber.forEach(element => {
        if(Number(element.textContent) > number){
            number = Number(element.textContent);
        }
    });
    return number;
}

function numberMostRepeated($listNumber){
    let numberAmountRepeated = 0;
    let currentNumber = 0; 
    $listNumber.forEach(e1 => {
        let currentNumberAmount = 0;
        $listNumber.forEach(e2 => {
            if(e1.textContent == e2.textContent){
                currentNumberAmount ++;
            }
        });
        if(currentNumberAmount > numberAmountRepeated){
            currentNumber = Number(e1.textContent);
            numberAmountRepeated = currentNumberAmount;
        }
    });
    return currentNumber;
}