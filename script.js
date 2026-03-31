// Login form popup handling
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // form ko turant redirect hone se rokta hai

    // Confirm box
    let confirmLogin = confirm("Do you want to submit your login details?");
    if (confirmLogin) {
      alert("Login successful! Welcome to FeedPoint.");
      // Redirect to account page
      window.location.href = "account.html";
    } else {
      alert("Login cancelled.");
    }
  });
});