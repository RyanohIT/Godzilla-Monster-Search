class FormValidator {
    constructor(form, fields) {
      this.form = form
      this.fields = fields
    }  
    
    initialize() {
      this.validateOnEntry()
      this.validateOnSubmit()
    }
    
    validateOnSubmit() {
      let self = this
      
      this.form.addEventListener('submit', e => {
          e.preventDefault()
          self.fields.forEach(field => {
          const input = document.querySelector(`#${field}`)
          self.validateFields(input)
        })
      })
    }
    
    validateOnEntry() {
      let self = this
      this.fields.forEach(field => {
        const input = document.querySelector(`#${field}`)
        
        input.addEventListener('input', event => {
          self.validateFields(input)
        })
      })
    }
    
    validateFields(field) {
    
      // Check presence of values
      if (field.value.trim() === "") {
        this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error")
      } else {
        this.setStatus(field, null, "success")
      }
      
      // Password confirmation edge case
      if (field.id === "password_confirmation") { 
        const passwordField = this.form.querySelector('#password')
      
        if (field.value.trim() == "") {
          this.setStatus(field, "Password confirmation required", "error")
        } else if (field.value != passwordField.value)  {
          this.setStatus(field, "Password does not match", "error")
        } else {
          this.setStatus(field, null, "success")
        }
      }
    }
  
    setStatus(field, message, status) {
      const successIcon = field.parentElement.querySelector('.icon-success')
      const errorIcon = field.parentElement.querySelector('.icon-error')
      const errorMessage = field.parentElement.querySelector('.error-message')
  
      if (status === "success") {
        if (errorIcon) { errorIcon.classList.add('hidden') }
        if (errorMessage) { errorMessage.innerText = "" }
        successIcon.classList.remove('hidden')
        field.classList.remove('input-error')
      } 
      
      if (status === "error") {
        if (successIcon) { successIcon.classList.add('hidden') }
        field.parentElement.querySelector('.error-message').innerText = message
        errorIcon.classList.remove('hidden')
        field.classList.add('input-error')
      }    
    }
  }
  
  const form = document.querySelector('.form')
  const fields = ["username", "password"]
  
  const validator = new FormValidator(form, fields)
  validator.initialize()
  
function displayTime() {
    let specificTime = new Date();
    specificTime.setHours(23); 
    specificTime.setMinutes(0);
    specificTime.setSeconds(0);

    
    let hours = specificTime.getHours().toString().padStart(2, '0');
    let minutes = specificTime.getMinutes().toString().padStart(2, '0');
    let seconds = specificTime.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}
document.addEventListener('DOMContentLoaded', function() {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const monthDisplay = document.querySelector('.month span');
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function updateCalendar(month, year) {
        // Update the month display
        monthDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        // Update the days (this is a simplified example)
        const days = document.querySelector('.days');
        days.innerHTML = '';
        for (let i = 1; i <= 31; i++) {
            const day = document.createElement('li');
            day.textContent = i;
            days.appendChild(day);
        }
    }

    prev.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar(currentMonth, currentYear);
    });

    next.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar(currentMonth, currentYear);
    });

    updateCalendar(currentMonth, currentYear);
});