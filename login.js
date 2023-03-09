var input = document.getElementById("password");
    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button").click();
      }
    });
        function display(form) {
            if (form.username.value == "root") {
                if (form.password.value == "root") {
                    location = "page2.html"
                } else {
                    alert("Invalid Password")
                }
            } else {
                alert("Invalid Username")
            }
        }