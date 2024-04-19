/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let text=document.getElementById('input')
let display
// console.log(text);
let btn=document.getElementsByClassName('cov-btn')
let test=document.getElementById('val')
let parameter1=document.getElementById('first-para')
let parameter2=document.getElementById('second-para')
let parameter3=document.getElementById('third-para')


function start() {
    if (display=text.value) {
        length(display)
        volume(display)
        mass(display)
        
    }
    
}
function reset() {
    parameter1.textContent=''
    parameter2.textContent=''
    parameter3.textContent=''
    
}
function length(meters) {
let meter=meters*3.281
let foot=meters/3.281

    parameter1.textContent=`${meters} meters = ${meter.toFixed(2)} feet | ${meters} feet = ${meter.toFixed(2)} meters `
}
function volume(gallons) {
    let gallon=gallons*0.264
    let liters=gallons/0.264

    parameter2.textContent=`${gallons} liters = ${gallon.toFixed(2)} gallons | ${gallons} gallons= ${liters.toFixed(2)} liters `
    
}
function mass(weight) {
    let pound=weight*2.204
    let kilos=weight/2.204
    parameter3.textContent=`${weight} kilos = ${pound.toFixed(2)} pounds | ${weight} pounds = ${kilos.toFixed(2)} kilos `
    
}