$(document).ready(function() {
   var now = moment().format('MMMM Do YYYY; h:mm a');
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
   /*init*/
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
 