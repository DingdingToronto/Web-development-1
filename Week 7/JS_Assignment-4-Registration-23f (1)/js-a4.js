document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["ixdForm"];
  const resultSection = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting fully

    // Part 1: Show & Hide
    document.getElementById("welcome").style.display = "none";
    form.style.display = "none";
    resultSection.style.display = "block";

    // Part 2: Output
    const firstName = document.getElementById("in_fName").value;
    const lastName = document.getElementById("in_lName").value;
    const humberID = document.getElementById("in_id").value;
    const program = document.getElementById("in_program").value;
    const deliveryOption = document.querySelector(
      "input[name='f__deliver']:checked"
    );
    const project = document.querySelector("input[name='f__project']:checked");

    // Part 3: Validation
    const inputFields = ["in_fName", "in_lName", "in_id", "in_program"];
    const captionRadio = document.getElementById("caption_deliver");
    const captionProject = document.getElementById("caption_project");
    let valid = true; // Flag to track if the form is valid

    inputFields.forEach(function (fieldName) {
      const field = document.getElementById(fieldName);
      if (field.value.trim() === "") {
        field.style.backgroundColor = "red";
        field.focus();
        valid = false; // Set the valid flag to false
      } else {
        field.style.backgroundColor = "";
      }
    });

    if (deliveryOption === null) {
      captionRadio.style.backgroundColor = "red";
      valid = false; // Set the valid flag to false
    } else {
      captionRadio.style.backgroundColor = "";
    }

    if (project === null) {
      captionProject.style.backgroundColor = "red";
      valid = false; // Set the valid flag to false
    } else {
      captionProject.style.backgroundColor = "";
    }

    // If the form is not valid, prevent further processing
    if (!valid) {
      return;
    }

    // If all fields are valid, continue with displaying the confirmation message
    const resultText = `${firstName} ${lastName} (${humberID} in ${program}) has been registered for the ${deliveryOption.value} option of the ${project.value} project.`;

    const resultOutput = document.querySelector("#result h2");
    resultOutput.textContent = "Thank you! Your registration is complete.";
    const resultMessage = document.querySelector("#result p");
    resultMessage.textContent = resultText;
  });
});
