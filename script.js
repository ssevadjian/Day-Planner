$(document).ready(function () {
  const $currentDay = $("#currentDay");
  const $save9 = $("#save9");
  const $save10 = $("#save10");
  const $save11 = $("#save11");
  const $save12 = $("#save12");
  const $save1 = $("#save1");
  const $save2 = $("#save2");
  const $save3 = $("#save3");
  const $save4 = $("#save4");
  const $save5 = $("#save5");
  const $save6 = $("#save6");
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
  let am9Notes = JSON.parse(localStorage.getItem("am9Notes")) || [];
  let am10Notes = JSON.parse(localStorage.getItem("am10Notes")) || [];
  let am11Notes = JSON.parse(localStorage.getItem("am11Notes")) || [];
  let pm12Notes = JSON.parse(localStorage.getItem("pm12Notes")) || [];
  let pm1Notes = JSON.parse(localStorage.getItem("pm1Notes")) || [];
  let pm2Notes = JSON.parse(localStorage.getItem("pm2Notes")) || [];
  let pm3Notes = JSON.parse(localStorage.getItem("pm3Notes")) || [];
  let pm4Notes = JSON.parse(localStorage.getItem("pm4Notes")) || [];
  let pm5Notes = JSON.parse(localStorage.getItem("pm5Notes")) || [];
  let pm6Notes = JSON.parse(localStorage.getItem("pm6Notes")) || [];
  const m = moment();
  const dayOfWeek = (m.format(`dddd`) + ', ' + m.format('MMM Do'));
  const hour = moment().hour();

  // Displays today's date
  $currentDay.text(dayOfWeek);

  // Appends event form input to timeblocks
  $am9.text(am9Notes);
  $am10.text(am10Notes);
  $am11.text(am11Notes);
  $pm12.text(pm12Notes);
  $pm1.text(pm1Notes);
  $pm2.text(pm2Notes);
  $pm3.text(pm3Notes);
  $pm4.text(pm4Notes);
  $pm5.text(pm5Notes);
  $pm6.text(pm6Notes);

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
  $save9.click(function() {
    let $am9Notes = $("#am9Notes").val();
    am9Notes.push($am9Notes);
    $am9.text(am9Notes);
    localStorage.setItem("am9Notes", JSON.stringify(am10Notes));
    $('#event9Modal').modal('hide');
  });
  $save10.click(function() {
    let $am10Notes = $("#am10Notes").val();
    am10Notes.push($am10Notes);
    $am10.text(am10Notes);
    localStorage.setItem("am10Notes", JSON.stringify(am10Notes));
    $('#event10Modal').modal('hide');
  });
  $save11.click(function() {
    let $am11Notes = $("#am11Notes").val();
    am11Notes.push($am11Notes);
    $am11.text(am11Notes);
    localStorage.setItem("am11Notes", JSON.stringify(am11Notes));
    $('#event11Modal').modal('hide');
  });
  $save12.click(function() {
    let $pm12Notes = $("#pm12Notes").val();
    pm12Notes.push($pm12Notes);
    $pm12.text(pm12Notes);
    localStorage.setItem("pm12Notes", JSON.stringify(pm12Notes));
    $('#event12Modal').modal('hide');
  });
  $save1.click(function() {
    let $pm1Notes = $("#pm1Notes").val();
    pm1Notes.push($pm1Notes);
    $pm1.text(pm1Notes);
    localStorage.setItem("pm1Notes", JSON.stringify(pm1Notes));
    $('#event1Modal').modal('hide');
  });
  $save2.click(function() {
    let $pm2Notes = $("#pm2Notes").val();
    pm2Notes.push($pm2Notes);
    $pm2.text(pm2Notes);
    localStorage.setItem("pm2Notes", JSON.stringify(pm2Notes));
    $('#event2Modal').modal('hide');
  });
  $save3.click(function() {
    let $pm3Notes = $("#pm3Notes").val();
    pm3Notes.push($pm3Notes);
    $pm3.text(pm3Notes);
    localStorage.setItem("pm3Notes", JSON.stringify(pm3Notes));
    $('#event3Modal').modal('hide');
  });
  $save4.click(function() {
    let $pm4Notes = $("#pm4Notes").val();
    pm4Notes.push($pm4Notes);
    $pm4.text(pm4Notes);
    localStorage.setItem("pm4Notes", JSON.stringify(pm4Notes));
    $('#event4Modal').modal('hide');
  });
  $save5.click(function() {
    let $pm5Notes = $("#pm5Notes").val();
    pm5Notes.push($pm5Notes);
    $pm5.text(pm5Notes);
    localStorage.setItem("pm5Notes", JSON.stringify(pm5Notes));
    $('#event5Modal').modal('hide');
  });
  $save6.click(function() {
    let $pm6Notes = $("#pm6Notes").val();
    pm6Notes.push($pm6Notes);
    $pm6.text(pm6Notes);
    localStorage.setItem("pm6Notes", JSON.stringify(pm6Notes));
    $('#event6Modal').modal('hide');
  });
});