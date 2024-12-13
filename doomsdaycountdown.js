// Set the target date and time for the countdown
const targetDate = new Date("2027-03-26 18:35:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(timeDifference % (1000 * 60) / (1000));

  // Display the calculated time in the HTML elements
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("countdown-weeks").textContent = weeks;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-container").innerHTML = "Doomsday";
    window.location.href = 'https://www.google.com/maps?q=2sTOHO%20Cinemas%20Nihonbashi';
  }
}, 1000);

var app = {
  settings: {
    container: (".calendar"),
    calendar: (".front"),
    days: (".active"),
    form: (".back"),
    input: (".back input"),
    buttons: (".back button")
  },

  init: function() {
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function(currentSide, desiredSide) {
    settings.container.toggleClass("flip");

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

  },

  bindUIActions: function() {
    settings.days.on("click", function(){
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on("click", function(){
      instance.swap(settings.form, settings.calendar);
    });
  }
}

app.init();