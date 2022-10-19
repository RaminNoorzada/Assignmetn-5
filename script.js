// Displing Current day's and date
var todayDate = moment().format('dddd, mm, yyyy');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // Save Btn click listener
    $(".saveBtn").on("click", function (){
        //Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //Scve text in local storage
        localStorage.setItem(time, text);
    })

    functiontimeTracker() {
        //Get current number of hours
    }
}