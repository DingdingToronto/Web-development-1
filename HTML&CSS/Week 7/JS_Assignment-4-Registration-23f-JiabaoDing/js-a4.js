document.addEventListener("DOMContentLoaded", function () {
  // Select the form and result section elements by their IDs
  const form = document.forms["ixdForm"];
  const resultSection = document.getElementById("result");

  // Add a submission event listener to the form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting fully

    // Part 3: Validation
    // Define an array of input field IDs to validate
    const inputFields = ["in_fName", "in_lName", "in_id"];

    // Regular expression for Humber ID validation
    const humberIdRegex = /^[Nn]\d{8}$/;

    // Select radio buttons for delivery and project options
    const captionRadio = document.getElementById("caption_deliver");
    const captionProject = document.getElementById("caption_project");

    let valid = true; // Flag to track if the form is valid

    // Loop through the input fields for validation
    inputFields.forEach(function (fieldName) {
      const field = document.getElementById(fieldName);
      if (fieldName === "in_id") {
        // Check Humber ID using the regular expression
        if (!humberIdRegex.test(field.value)) {
          field.style.backgroundColor = "red";
          field.focus();
          valid = false;
        } else {
          field.style.backgroundColor = "";
        }
      } else if (field.value === "") {
        field.style.backgroundColor = "red";
        field.focus();
        valid = false;
      } else {
        field.style.backgroundColor = "";
      }
    });

    const chooseOption = document.getElementById("in_program");
    if (chooseOption.value === "X") {
      chooseOption.style.backgroundColor = "red";
      valid = false; // Set the valid flag to false
    } else {
      chooseOption.style.backgroundColor = "";
    }

    // Check if a delivery option is selected
    const deliveryOption = document.querySelector(
      "input[name='f__deliver']:checked"
    );
    if (deliveryOption === null) {
      captionRadio.style.backgroundColor = "red"; // Set the background color to red
      valid = false; // Set the valid flag to false
    } else {
      captionRadio.style.backgroundColor = ""; // Clear the background color
    }

    // Check if a project option is selected
    const project = document.querySelector("input[name='f__project']:checked");
    if (project === null) {
      captionProject.style.backgroundColor = "red"; // Set the background color to red
      valid = false; // Set the valid flag to false
    } else {
      captionProject.style.backgroundColor = ""; // Clear the background color
    }

    // If the form is not valid, prevent further processing
    if (!valid) {
      return;
    }

    // Part 1: Show & Hide
    // Hide the welcome message, the form, and show the result section
    document.getElementById("welcome").style.display = "none";
    form.style.display = "none";
    resultSection.style.display = "block";

    // Part 2: Output
    // Retrieve values from input fields
    const firstName = document.getElementById("in_fName").value;
    const lastName = document.getElementById("in_lName").value;
    const humberID = document.getElementById("in_id").value;
    const program = document.getElementById("in_program").value;

    // Construct the result message
    const resultText = `${firstName} ${lastName} (${humberID} in ${program}) has been registered for the ${deliveryOption.value} option of the ${project.value} project.`;

    // Update the result message elements
    const resultOutput = document.querySelector("#result h2");
    resultOutput.textContent = "Thank you! Your registration is complete.";
    const resultMessage = document.querySelector("#result p");
    resultMessage.textContent = resultText;
  });
});
