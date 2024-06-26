/**
 * Function Declaration
 */
function showMessage() {
    console.log('Message from Function');
}
showMessage();

function showParametrizedMessage(param) {
    console.log(`Message from Function with ${param}`);
}
showMessage('Parameter');

function showMessageDefaultValue(param = 'Default Value') {
    console.log(`Message from Function with ${param}`);
}
showMessageDefaultValue();

function getValue() {
    let x = 10;
    let y = 20;
    return x + y;
}
let z = getValue();
console.log(z); // 30