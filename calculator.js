var currentValue = '';


function getValueButton(number){
    console.log(`Clique no botão ${number}`)

    currentValue = currentValue + number;

    document.getElementById('numbers').innerHTML = currentValue;
}