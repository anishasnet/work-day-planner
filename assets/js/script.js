// Getting date in format to print on jumbotron.
currentDateText = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDateText);

// Getting date in format to use as localStorage key.
currentDate = moment().format("YYYYMMDD");
console.log(currentDate)



let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let hour;
// Color codes all time-blocks based on time: blue for pressent, grey for past, green for future.
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
let tasks = [];
// Calling it at a certain interval so that after the textarea is used it soon changes to color coded.
dueDateCheck()
setInterval(dueDateCheck, 500)
let n = 0

// Loads the data from localStorage into time blocks.
$(window).on("load", function() {
console.log("Loaded page")
if (localStorage.key(0) == currentDate) {
console.log(localStorage.getItem(currentDate))
console.log(typeof(localStorage.getItem(currentDate)))
for (n = 0; n < localStorage.getItem(currentDate).length; n++) {
console.log("Hello")
console.log(n)
let textObj = JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem(currentDate))[n]))
console.log(Object.values(textObj)[0])
$(".time-box").eq(parseInt(Object.keys(textObj)[0])).text(Object.values(textObj)[0]);
}
} else {
localStorage.removeItem(currentDate - 1)
return
}
})


// Saves text value from specific time-block when saveBtn is clicked.
$(".col-2").on("click", ".saveBtn", function() {
console.log("Save btn clicked");
console.log("This is tasks before push():")
console.log(tasks)
let key = $(this).attr("id");
let text = $(".time-box").eq(key).html();
console.log("This is tasks:")
console.log(tasks)
let obj = {};
obj[(key).toString()] = text;
tasks.push(obj);
console.log("This is tasks:")
console.log(tasks)
if (localStorage.length == 0) {
localStorage.setItem(currentDate, JSON.stringify(tasks))
} else {

let localStorageList = JSON.parse(localStorage.getItem(currentDate))
localStorageList.push(obj)
localStorage.removeItem(currentDate)
localStorage.setItem(currentDate, JSON.stringify(localStorageList))
}
})

// Converts time-box to textarea on click and back to time-box on blur.
$(".col-8").on("click", ".list-group-item", function() {
let textInput = $("<textarea rows = '1'>")
.addClass("form-input")
.addClass("time-box")
.val($(this).text());
$(this).replaceWith(textInput);
textInput.trigger("focus")
$("textarea").on("blur", function() {
dueDateCheck();
let text = $(this)
.val()
.trim();
let timeBox = $("<li>")
.addClass("list-group-item")
.addClass("bg-success")
.addClass("time-box")
.addClass("text-white")
.text(text);
$(this).replaceWith(timeBox);
})
})