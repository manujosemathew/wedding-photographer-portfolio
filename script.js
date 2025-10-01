  var fullImgBox =document.getElementById("fullImgBox")
        var fullImg =document.getElementById("fullImg")
        function openFullImg(pic){
            fullImgBox.style.display="flex"
            fullImg.src=pic;
        }
        function closeFullImg(){
            fullImgBox.style.display="none"
        }


// form validation 
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('queryForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const msgInput = document.getElementById('msg');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function resetField(field) {
    field.classList.remove('is-invalid', 'is-valid');
  }

  function markInvalid(field) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
  }

  function markValid(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    // reset
    [nameInput, emailInput, msgInput].forEach(resetField);

    let valid = true;
    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const msgVal = msgInput.value.trim();

    if (nameVal.length < 2) {
      markInvalid(nameInput);
      valid = false;
    } else {
      markValid(nameInput);
    }

    if (!validateEmail(emailVal)) {
      markInvalid(emailInput);
      valid = false;
    } else {
      markValid(emailInput);
    }

    if (msgVal.length < 5) {
      markInvalid(msgInput);
      valid = false;
    } else {
      markValid(msgInput);
    }

    if (!valid) {
      
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

//    okay msg
    const alert = document.createElement('div');
    alert.className = 'alert alert-success mt-3';
    alert.textContent = 'Thank you! Your message has been successfully submitted.';
    form.parentNode.insertBefore(alert, form.nextSibling);

    // reset
    form.reset();
    [nameInput, emailInput, msgInput].forEach(f => f.classList.remove('is-valid'));
    

  });
});


// subscribe valid
document.getElementById('submitLink').addEventListener('click', e => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  const msgBox = document.getElementById('msgBox');
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  msgBox.style.color = valid ? 'green' : 'red';
  msgBox.textContent = valid
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