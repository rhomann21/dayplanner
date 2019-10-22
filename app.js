$(document).ready(function() {
   var now = moment().format('lll');
   var dateElement = document.querySelector('#dateTime');

  dateElement.innerHTML = now.toString();

  var dailyTasks = JSON.parse(localStorage.getItem("myDay")) || {};
   /*get the key and the value*/
   $(".js-save").on("click", function() {
     var key = $(this).data("key");
     var value = $(`#${key}`).val();
     console.log(value);
 
     //save to local storage
     dailyTasks[key] = value;
     localStorage.setItem("myDay", JSON.stringify(dailyTasks));
   });

   /*pull from local storage*/
   $("#hour-9").val(dailyTasks["hour-9"]);
   $("#hour-10").val(dailyTasks["hour-10"]);
   $("#hour-11").val(dailyTasks["hour-11"]);
   $("#hour-12").val(dailyTasks["hour-12"]);
   $("#hour-1").val(dailyTasks["hour-1"]);
   $("#hour-2").val(dailyTasks["hour-2"]);
   $("#hour-3").val(dailyTasks["hour-3"]);
   $("#hour-4").val(dailyTasks["hour-4"]);
   $("#hour-5").val(dailyTasks["hour-5"]);
 });
 
//var currentHour = moment().format('hh');
//var timeHours = [];

//var currentHour = moment()hours()
//loop through hours
//var blockHour = sometihng
//if blockHour < current hour,
    //stylize it like this
//else if blockHour > currentHour
    //stylize it like this
//else 
    //stylize it like this



// pseudo code
// var currentHour = moment().format('hh');
// var allHourElements = document.getElementsByClassName('hourTextArea');
// loop through allHourElements
/* if (allHourElements(i).getAttribute('data-hour') < currentHour {}) {
  allHourElements(i).addClass('previousHourColor');
} else if (allHourElements(i).getAttribute('data-hour') === currentHour {}) {
  allHourElements(i).addClass('currentHourColor');
} else {
  allHourElements(i).addClass('futureHourColor');
}


*/