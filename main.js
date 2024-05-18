document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (fahrenheit !== '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
        document.getElementById('celsius').value = celsius.toFixed(1);
    } else if (celsius !== '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(1);
    }
}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}