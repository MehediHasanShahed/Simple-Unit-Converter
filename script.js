function temperature(){
    var celsius = document.getElementById('celsius');
    var farenheit = (celsius.value*9/5)+32;
    document.getElementById('fahrenheit').value = farenheit;
}

function weight() {
    var kg = document.getElementById('kilo').value;
    var pound = (kg*2.2);
    document.getElementById('pounds').value = pound;

}

function distance() {
    var km = document.getElementById('km').value;
    var mile = km*0.62137
    document.getElementById('miles').value = mile;
}