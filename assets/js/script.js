currentDateText = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDateText);



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