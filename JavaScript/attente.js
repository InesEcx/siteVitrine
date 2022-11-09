const deadlineDate = new Date('December 31, 2070 23:59:59').getTime();

function dateChange(){
  const countdownDays = document.querySelector('.countdown__days .number');
  const countdownHours= document.querySelector('.countdown__hours .number');
  const countdownMinutes= document.querySelector('.countdown__minutes .number');
  const countdownSeconds= document.querySelector('.countdown__seconds .number');

  const currentDate = new Date().getTime();

  const distance = deadlineDate - currentDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownDays.innerHTML = days;
  countdownHours.innerHTML = hours;
  countdownMinutes.innerHTML = minutes;
  countdownSeconds.innerHTML = seconds;
}

dateChange();

setInterval(() => {
  dateChange();
}, 1000);