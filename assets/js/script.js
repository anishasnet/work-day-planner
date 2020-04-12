currentDateText = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDateText);


let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let hour;
const dueDateCheck = () => {
currentHour = moment().format("H")
let k = 0;
for (k  = 0; k < 9; k++) {

if (currentHour > hours[k]) {
$(".time-box").eq(k).removeClass("bg-success");
$(".time-box").eq(k).addClass("bg-secondary");
} else if (currentHour == hours[k]) {
$(".time-box").eq(k).removeClass("bg-success");
$(".time-box").eq(k).addClass("bg-primary");
}
}
}

dueDateCheck()

setInterval(dueDateCheck, 5000)



$(".col-8").on("click", ".list-group-item", function() {
let textInput = $("<textarea rows = '1'>")
.addClass("form-input")
.addClass("time-box")
.val($(this).text());
$(this).replaceWith(textInput);
textInput.trigger("focus")
$("textarea").on("blur",function() {
let text = $(this)
.val()
.trim();
let timeBox = $("<li>")
.addClass("list-group-item")
.addClass("bg-success")
.addClass("time-box")
.text(text);
$(this).replaceWith(timeBox);
})
})