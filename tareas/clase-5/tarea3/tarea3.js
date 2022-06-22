//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/*
1. pedir cuantas clases existen ok
2. pedir ingresar hora min seg ok
3. calcular con un boton el tiempo total
4. mostrarlo en un <strong>
*/
requestClasses();

function requestClasses(){
    const $buttonEnterClass = document.querySelector('#button-enter-class');
    $buttonEnterClass.onclick = function(){
        const $inputClassNumbers = Number(document.querySelector('#input-number-class').value);
        insertInputsHourMinSeg($inputClassNumbers);
        
        return false;
    }
    const $buttonCalculateTotalTime = document.querySelector('#button-calculate-total-time');
    $buttonCalculateTotalTime.onclick = function(){
        document.querySelector('#result').textContent = `${totalTimeForHour()} Hs ${totalTimeForMin()} Min ${totalTimeForSeg()} Seg`;
        return false;
    }
}

function insertInputsHourMinSeg(amount){
    resetFormTimeClass();
    for (let i = 0; i < amount; i++) {
        const nodoFormTimeClass = document.querySelector('#form-time-class');
        const newDiv = document.createElement('div');
        newDiv.className = "inputs-time";
        const newInputHour = document.createElement('input');
        newInputHour.className = 'video-time-hour';
        const newInputMin = document.createElement('input');
        newInputMin.className = 'video-time-min';
        const newInputSeg = document.createElement('input');
        newInputSeg.className = 'video-time-seg';
        newDiv.appendChild(newInputHour);
        newDiv.appendChild(newInputMin);
        newDiv.appendChild(newInputSeg);
        nodoFormTimeClass.appendChild(newDiv);
    }
    controlButtonCalculateTotalTime();
}

function resetFormTimeClass(){
    document.querySelector('#result').textContent = '';
    const $listDivTime = document.querySelectorAll(".inputs-time");
    $listDivTime.forEach(element => {
        element.remove();
    });
}

function controlButtonCalculateTotalTime(){
    const $listDivTime = document.querySelectorAll(".inputs-time");
    if($listDivTime.length !=0){
        showButtonCalculateTotalTime();
    }else{
        hideButtonCalculateTotalTime();
    }
}

function showButtonCalculateTotalTime(){
    document.querySelector('#button-calculate-total-time').style.visibility = 'visible';
    document.querySelector('#result').style.visibility = 'visible';
}

function hideButtonCalculateTotalTime(){
    document.querySelector('#button-calculate-total-time').style.visibility = 'hidden';
    document.querySelector('#result').style.visibility = 'hidden';
}


function totalTimeForHour(){
    const $listInputTotalHour = document.querySelectorAll('.video-time-hour');
    let total = 0;
    $listInputTotalHour.forEach(element => {
        total += Number(element.value);
    });
    console.log(total)
    return total;
}

function totalTimeForMin(){
    const $listInputTotalMin = document.querySelectorAll('.video-time-min');
    let total = 0;
    $listInputTotalMin.forEach(element => {
        total += Number(element.value);
    });
    return total;
}

function totalTimeForSeg(){
    const $listInputTotalSeg = document.querySelectorAll('.video-time-seg');
    let total = 0;
    $listInputTotalSeg.forEach(element => {
        total += Number(element.value);
    });
    return total;
}

