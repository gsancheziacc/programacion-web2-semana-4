//Task 1
function sumAllNumberUnder() {
    const number = document.getElementById("txtNumber").value;
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    document.getElementById("txtNumberResult").innerHTML = "Resultado: " + sum;
}

//Task 2
function getObject() {
    var object = {
        name: "John",
        lastname: "Doe",
        age: 30,
        rut: "17.898.898-8",
        address: "Fake street 123"
    };

    document.getElementById("txtObjectResult").innerHTML = "Resultado: " + JSON.stringify(object);
}