const form = document.getElementById("myForm");
const formDataDiv = document.getElementById("form-data");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Send data to backend using fetch or XMLHttpRequest
  // fetch("/submit", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(formData), // Use URLSearchParams for urlencoded data
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data sent to server:", data);
      // Display success message or other actions
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error
    });
});

