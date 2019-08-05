function submit() {
    var name = document.getElementById("nameInput").value;
    var fact = document.getElementById("factInput").value;
    var error = false;

    if (name.length < 1) {
        console.log("Name input is less than minimum length.")
        alert("Name input is less than minimum length.");
        error = true;
    } else {
        console.log("Valid name input: " + name);
    }

    if (fact.length < 1) {
        console.log("Fact input is less than minimum length.")
        alert("Fact input is less than minimum length.");
        error = true;
    } else {
        console.log("Valid fact input: " + fact);
    }

    if (error) {
        return;
    }

    document.getElementById("inputForm").style.display = "none";
    document.getElementById("introduction").style.display = "block";

    document.getElementById("nameOutput").textContent = name;
    document.getElementById("factOutput").textContent = fact;
}

function reset() {
    document.getElementById("inputForm").style.display = "block";
    document.getElementById("introduction").style.display = "none";

    document.getElementById("nameInput").value = "";
    document.getElementById("factInput").value = "";
    document.getElementById("nameOutput").textContent = "";
    document.getElementById("factOutput").textContent = "";
}