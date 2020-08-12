$( document ).ready(function() {
    const getDayOfWeek = function (dayOfWeek) {
        $.ajax({
        url: "" + dayOfWeek + "&apikey=trilogy",
        method: "GET"
      }).then(function(response) {
  
       
      });
      }
});