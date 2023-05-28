
const title = document.querySelector('h1')
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#resultado")

form.addEventListener("submit", sumarInputValues);



function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInput = Number(input1.value) + Number(input2.value)
    pResult.innerText = "Resultado " + sumaInput;
}