$(document).ready(function () {
  const $currentDay = $("#currentDay");
  const $eventSaver = $("#saveEvent");
  const $save = $("#save");
  const $am9 = $("#am9");
  const $am10 = $("#am10");
  const $am11 = $("#am11");
  const $pm12 = $("#pm12");
  const $pm1 = $("#pm1");
  const $pm2 = $("#pm2");
  const $pm3 = $("#pm3");
  const $pm4 = $("#pm4");
  const $pm5 = $("#pm5");
  const $pm6 = $("#pm6");
  let events = [];
  //localStorage.getItem("event");
  const m = moment();
  const dayOfWeek = (m.format(`dddd`) + ', ' + m.format('MMM Do'));
  const currentTime = m.format('h:mm');
  const past = m.startOf('hour');
  const minute = moment().hour();
  console.log(minute);

  $currentDay.text(dayOfWeek);
  //isPast function alerts dark if the time block is in the past, blue if it's current, and green if it's future 
  isPast();
  function isPast() {
    if (minute > 9) {
      $am9.addClass("alert-dark");
    }
    else {
      $am9.addClass("alert-primary");
      if (minute < 9) {
        $am9.addClass("alert-info");
      }
    }
    if (minute > 10) {
      $am10.addClass("alert-dark");
    }
    else {
      $am10.addClass("alert-primary");
      if (minute < 10) {
        $am10.addClass("alert-info");
      }
    }
    if (minute > 11) {
      $am11.addClass("alert-dark");
    }
    else {
      $am11.addClass("alert-primary");
      if (minute < 11) {
        $am11.addClass("alert-info");
      }
    }
    if (minute > 12) {
      $pm12.addClass("alert-dark");
    }
    else {
      $pm12.addClass("alert-primary");
      if (minute < 12) {
        $pm12.addClass("alert-info");
      }
    }
    if (minute > 13) {
      $pm1.addClass("alert-dark");
    }
    else {
      $pm1.addClass("alert-primary");
      if (minute < 13) {
        $pm1.addClass("alert-info");
      }
    }
    if (minute > 14) {
      $pm2.addClass("alert-dark");
    }
    else {
      $pm2.addClass("alert-primary");
      if (minute < 14) {
        $pm2.addClass("alert-info");
      }
    }
    if (minute > 15) {
      $pm3.addClass("alert-dark");
    }
    else {
      $pm3.addClass("alert-primary");
      if (minute < 15) {
        $pm3.addClass("alert-info");
      }
    }
    if (minute > 16) {
      $pm4.addClass("alert-dark");
    }
    else {
      $pm4.addClass("alert-primary");
      if (minute < 16) {
        $pm4.addClass("alert-info");
      }
    }
    if (minute > 17) {
      $pm5.addClass("alert-dark");
    }
    else {
      $pm5.addClass("alert-primary");
      if (minute < 17) {
        $pm5.addClass("alert-info");
      }
    }
    if (minute > 18) {
      $pm6.addClass("alert-dark");
    }
    else {
      $pm6.addClass("alert-primary");
      if (minute < 18) {
        $pm6.addClass("alert-info");
      }
    }
  }

  //Save to localStorage
  $save.click(function() {
    $pm6.textContent = events;
    localStorage.setItem("events", JSON.stringify(events));
  });
});