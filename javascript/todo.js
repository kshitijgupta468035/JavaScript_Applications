// selector
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

// event handler
todoButton.onclick = create;
todoList.onclick = checkDelete;

// function
function create(e) {
  e.preventDefault();
  if (todoInput.value != "") {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = '<i class ="fa fa-check"></i>';
    newDiv.appendChild(checkBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class ="fa fa-trash"></i>';
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
  } else {
    alert("Do not include empty string!");
  }
  todoInput.value = "";
}

function checkDelete(e) {
  // target will give where user clicked
  var item = e.target;
  if (item.classList[0] === "delete-btn") {
    var parent = item.parentNode;
    parent.remove();
  }

  if (item.classList[0] === "check-btn") {
    var parent = item.parentNode;
    // with toggle (remove and add both work)
    parent.classList.toggle("completed");
  }
}


// clock
// selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

// event listener
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// functions
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let todayDate = today.toDateString();

  // am pm
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hrs format
  // eg when 24%12
  hour = hour % 12 || 12;

  // output
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;

  date.innerHTML = `${todayDate}`;
  setTimeout(showTime, 1000);

  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }
}
function setGreeting() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage = 'url("../images/morning1.jpg")';
    greeting.innerHTML = "Good Morning";
    time.style.fontFamily = "cursive";
    document.body.style.color = "white";
    time.style.color = "red";
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url("../images/afternoon1.jpg")';
    greeting.innerHTML = "Good Afternoon";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundImage = 'url("../images/dark1.jpg")';
    greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}
function setName(e) {
  // which event work
  // for which key
  if (e.type === "keypress") {
    // for enter key press
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
showTime();
setGreeting();
