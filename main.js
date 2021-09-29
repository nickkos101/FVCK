function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(domID, domObject, endtime) {
    var daysSpan = $(domID+' .days '+domObject);
    var hoursSpan = $(domID+' .hours '+domObject);
    var minutesSpan = $(domID+' .minutes '+domObject);
    var secondsSpan = $(domID+' .seconds '+domObject);

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.html("<span>" +t.days+ "</span> Days");
      hoursSpan.html("<span>" +('0' + t.hours).slice(-2) + "</span> Hours");
      minutesSpan.html("<span>" +('0' + t.minutes).slice(-2) + "</span> Mins");
      secondsSpan.html("<span>" +('0' + t.seconds).slice(-2) + "</span> Secs");

      if (t.total <= 0) {
        clearInterval(timeinterval);
        daysSpan.html(0);
        hoursSpan.html(0);
        minutesSpan.html(0);
        secondsSpan.html(0);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

var swdeadline = '2021/12/31 11:55:00';
initializeClock('#countdown', 'p', swdeadline);