function sjekk() {
    let svar = document.getElementById("svar").value.replace(",", ".");
        if (svar == 3.14) {
        document.getElementById("epost").innerHTML =
        '<a href="mailto:jehonbergen@gmail.com">jehonbergen@gmail.com</a>';
        } else {
            alert("... Prøv på nytt");
        }
    }

