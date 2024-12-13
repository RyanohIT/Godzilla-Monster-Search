document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let errorExists = false;

    const passwordField = document.getElementById("password");
    const usernameField = document.getElementById("username");

    if (passwordField.value !== "Godzilla") {
        document.getElementById("errormessage").classList.add("show");
        alert("Please Input Correct Monarch Credentials");

        errorExists = true;
    } else {
        document.getElementById("errormessage").classList.remove("show");
    }

    if (usernameField.value !== "Monarch") {
        document.getElementById("error-message").classList.add("show");
        alert("Please Input Correct Monarch Credentials");

        errorExists = true;
    } else {
        document.getElementById("error-message").classList.remove("show");
    }

    if (errorExists === false) {
        window.location.href= "http://127.0.0.1:5500/godzillamonstersearch.html"
        alert('Proceed With Caution!')
        console.log("Login Success!");
    }
});
