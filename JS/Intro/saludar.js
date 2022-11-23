function saludar() {

    respuesta = prompt("Hi!, How are you");
    if (respuesta == "fine") {
        alert("im glad you are fine");
    } else {
        alert("thats bad");
    }

}
function age() {

    age = prompt("How old are you?");
    if (age <= 17) {
        alert("you cannot enter this website");
    } else if (() => {
        return 18;
    }) {
        alert("you can enter this website");
        document.write(`Welcome to our page <br>
        we wish you enjoy this page`);
    }
}
age();
