$(document).ready(function () {
  const $currentDay = $("#currentDay");
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
  
  const m = moment();
  const dayOfWeek = (m.format(`dddd`) + ', ' + m.format('MMM Do'));
  const hour = moment().hour();
  //let eTitles = JSON.parse(locatStorage.getItem("eTitles")) || [];
  let eTimes = JSON.parse(localStorage.getItem("eTines")) || [];
  let eNotes = JSON.parse(localStorage.getItem("eNotes")) || [];

  // Displays today's date
  $currentDay.text(dayOfWeek);
  $pm6.text(eNotes);

  // isPast function alerts dark if the time block is in the past, blue if it's current, and faded blue/teal if it's future 
  isPast();
  function isPast() {
    if (hour > 9) {
      $am9.addClass("alert-dark");
    }
    else {
      $am9.addClass("alert-primary");
      if (hour < 9) {
        $am9.addClass("alert-info");
      }
    }
    if (hour > 10) {
      $am10.addClass("alert-dark");
    }
    else {
      $am10.addClass("alert-primary");
      if (hour < 10) {
        $am10.addClass("alert-info");
      }
    }
    if (hour > 11) {
      $am11.addClass("alert-dark");
    }
    else {
      $am11.addClass("alert-primary");
      if (hour < 11) {
        $am11.addClass("alert-info");
      }
    }
    if (hour > 12) {
      $pm12.addClass("alert-dark");
    }
    else {
      $pm12.addClass("alert-primary");
      if (hour < 12) {
        $pm12.addClass("alert-info");
      }
    }
    if (hour > 13) {
      $pm1.addClass("alert-dark");
    }
    else {
      $pm1.addClass("alert-primary");
      if (hour < 13) {
        $pm1.addClass("alert-info");
      }
    }
    if (hour > 14) {
      $pm2.addClass("alert-dark");
    }
    else {
      $pm2.addClass("alert-primary");
      if (hour < 14) {
        $pm2.addClass("alert-info");
      }
    }
    if (hour > 15) {
      $pm3.addClass("alert-dark");
    }
    else {
      $pm3.addClass("alert-primary");
      if (hour < 15) {
        $pm3.addClass("alert-info");
      }
    }
    if (hour > 16) {
      $pm4.addClass("alert-dark");
    }
    else {
      $pm4.addClass("alert-primary");
      if (hour < 16) {
        $pm4.addClass("alert-info");
      }
    }
    if (hour > 17) {
      $pm5.addClass("alert-dark");
    }
    else {
      $pm5.addClass("alert-primary");
      if (hour < 17) {
        $pm5.addClass("alert-info");
      }
    }
    if (hour > 18) {
      $pm6.addClass("alert-dark");
    }
    else {
      $pm6.addClass("alert-primary");
      if (hour < 18) {
        $pm6.addClass("alert-info");
      }
    }
  }
  

  //Save event form input to localStorage
  $save.click(function() {
    // const $titleInput = $("#titleInput").val();
    // const $timeInput = $("#timeInput").val();
    const $notes = $("#notes").val();
    // eTitles.push($titleInput);
    //eTimes.push($timeInput);
    eNotes.push($notes);
    // locatStorage.setItem("eTitles", JSON.stringify(eTitles));
    //locatStorage.setItem("eTimes", JSON.stringify(eTimes));
    localStorage.setItem("eNotes", JSON.stringify(eNotes));
    $('#eventModal').modal('hide');
  });

});