var app = {
  settings: {
    container: $('.calendar'),
    calendar: $('.front'),
    days: $('.weeks span'),
    form: $('.back'),
    input: $('.back input'),
    buttons: $('.back button')
  },

  init: function() {
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function(currentSide, desiredSide) {
    settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

  },

  bindUIActions: function() {
    settings.days.on('click', function(){
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on('click', function(){
      instance.swap(settings.form, settings.calendar);
    });
  }
}

app.init();

const countDownClock = (number = 100, format = 'seconds') => {

  const d = document;
  const yearsElement = d.querySelector('years');
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;
  convertFormat(format);


  function convertFormat(format) {
    switch (format) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
      case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);
      case 'years':
        return timer(number * 60 *60 * 24 * 365)}

  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        alert('Doomsday Has Arrived');
        return;
      };

      displayTimeLeft(secondsLeft);

    }, 1000);
  }

  function displayTimeLeft(seconds) {
    yearsElement.textContent = Math.floor(seconds / 31536000)
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor(seconds % 86400 / 3600);
    minutesElement.textContent = Math.floor(seconds % 86400 % 3600 / 60);
    secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};


/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(834, 'days');