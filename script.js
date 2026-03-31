function loginPopup() {
  let confirmLogin = confirm("Do you want to submit your login details?");
  if (confirmLogin) {
    alert("Login successful! Welcome to FeedPoint.");
    window.location.href = "account.html"; 
    return true;
  } else {
    alert("Login cancelled.");
    return false; 
  }
}
</script>
