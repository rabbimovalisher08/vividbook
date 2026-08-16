function showMessage(topic) {
    alert("Welcome to " + topic + " lesson!");
}
function welcomeUser() {
    let name = prompt("What is your name?");

    if (name) {
        alert("Welcome to VividBook, " + name + "!");
    } else {
        alert("Welcome to VividBook!");
    }
}