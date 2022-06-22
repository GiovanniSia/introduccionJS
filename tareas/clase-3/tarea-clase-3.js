// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const TEXT_QUESTION_NAME = "Insert your name:";
const nameUser = (prompt(TEXT_QUESTION_NAME) || "").toLocaleLowerCase().trim();

const MY_NAME = "giovanni"
let result;
if (MY_NAME == nameUser) {
    result = "You have also my name";
}
console.log(result);


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
const TXT_QUESTION_AGE = "Insert your age:";
const ageUser = Number(prompt(TXT_QUESTION_AGE) || "a");
const MY_AGE = 22;
if (MY_AGE == ageUser) {
    result = "You have also my age";
} else if (MY_AGE < ageUser) {
    result = "You are older than me";
} else if (MY_AGE > ageUser) {
    result = "You are younger than me"
} else {
    result = "ERROR, insert a number"
}
console.log(result);

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
function taskEnterBar() {
    const ASNWER_YES = "yes";
    const ASNWER_NO = "no";
    const MINIMUM_AGE_TO_ENTER = 18;
    const haveDocument = (prompt("Are you have a document? (yes or no)") || "").toLocaleLowerCase().trim();
    let result;
    if (haveDocument === ASNWER_YES) {
        if (ageUser >= MINIMUM_AGE_TO_ENTER) {
            result = "You can enter the bar";
        } else if (ageUser < MINIMUM_AGE_TO_ENTER) {
            result = "You cant enter the bar"
        }
    } else if (haveDocument === ASNWER_NO) {
        result = "You havent document, you cant enter the bar";
    } else {
        console.log("ERROR, insert only yes or no");
        return taskEnterBar();        
    }
    console.log(result);
}
taskEnterBar();