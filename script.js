  var fullImgBox =document.getElementById("fullImgBox")
        var fullImg =document.getElementById("fullImg")
        function openFullImg(pic){
            fullImgBox.style.display="flex"
            fullImg.src=pic;
        }
        function closeFullImg(){
            fullImgBox.style.display="none"
        }


document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let message = document.getElementById('userMessage').value;
    
    // Clear old errors
    document.querySelectorAll('.error').forEach(e => e.style.display = 'none');
    document.querySelectorAll('input, textarea').forEach(e => e.classList.remove('error-border'));
    
    let isValid = true;
    
    if (name.length < 2) {
        document.getElementById('nameMsg').textContent = 'Name too short';
        document.getElementById('nameMsg').style.display = 'block';
        document.getElementById('userName').classList.add('error-border');
        isValid = false;
    }
    
    if (!email.includes('@')) {
        document.getElementById('emailMsg').textContent = 'Invalid email';
        document.getElementById('emailMsg').style.display = 'block';
        document.getElementById('userEmail').classList.add('error-border');
        isValid = false;
    }
    
    if (message.length < 5) {
        document.getElementById('messageMsg').textContent = 'Message too short';
        document.getElementById('messageMsg').style.display = 'block';
        document.getElementById('userMessage').classList.add('error-border');
        isValid = false;
    }
    
    if (isValid) {
        alert('Form sent!');
    }
});



// subscribe valid
document.getElementById('submitLink').addEventListener('click', e => {
  e.preventDefault();
  const email1 = document.getElementById('emailInput1').value.trim();
  const msgBox = document.getElementById('msgBox');
  const valid1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email1);
  msgBox.style.color = valid1 ? 'green' : 'red';
  msgBox.textContent = valid1
    ? ' Thank you! Your email has been submitted.'
    : 'Please enter a valid email address.';
});



// for booking pop up

let selectedService = "";

  function openPopup(serviceName) {
    selectedService = serviceName;
    document.getElementById("popup-title").innerText = "Book " + serviceName;
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  function confirmBooking() {
    let hours = document.getElementById("hours").value;
    alert("✅ Successfully booked " + selectedService + " for " + hours + " hour(s)!");
    closePopup();
  }