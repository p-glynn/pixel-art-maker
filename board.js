var sqArr = [];
var tileArr = [];
var currentColor;
var mouseIsDown;
var contain = document.getElementsByClassName("contain")[0];
var random = document.getElementsByClassName("random")[0];
var eraser = document.getElementsByClassName("eraser")[0];
var isRandom = false;

for (let i=0; i<100; i++) {
  var board = document.getElementsByClassName("board")[0];
  var row = document.createElement("div");
  board.appendChild(row);
  row.className="row";
  row.id=`${i}`

  for (let j=0; j<100; j++) {
    var sq = document.createElement("div");
    row.appendChild(sq);
    sq.className="square";
    sq.id=`${i}${j}`
    sqArr.push(sq);
  }
}

for (let c=0; c<35; c++) {

  var left = document.getElementsByClassName("left")[0];
  var leftCol = document.createElement("div");
  leftCol.className="col";
  left.appendChild(leftCol);

  var right = document.getElementsByClassName("right")[0];
  var rightCol = document.createElement("div");
  rightCol.className="col";
  right.appendChild(rightCol);

  for (let t=0; t<15; t++) {
    var leftTile = document.createElement("div");
    leftTile.className="tile";
    leftCol.prepend(leftTile);
    leftTile.style.backgroundColor = randomColor();
    var rightTile = document.createElement("div");
    rightTile.className="tile";
    rightCol.prepend(rightTile);
    rightTile.style.backgroundColor = randomColor();
    tileArr.push(leftTile, rightTile)
  }
}

random.addEventListener("click", function () {
  isRandom = true;
})

board.addEventListener("mousedown", function () {
  mouseIsDown = true;
})
contain.addEventListener("mouseup", function() {
  mouseIsDown = false;
})
left.addEventListener("click", function () {
  isRandom = false;
  currentColor = event.target.style.backgroundColor;
}, false);
right.addEventListener("click", function () {
  isRandom = false;
  currentColor = event.target.style.backgroundColor;
}, false);
board.addEventListener("mouseover", function () {
  if (mouseIsDown === true && isRandom === true) {
    currentColor = randomColor();
    event.target.style.backgroundColor = currentColor;
  } else if (mouseIsDown === true) {
    event.target.style.backgroundColor = currentColor;
  }
})


function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
   }
  return color;
}

function tileReplace(){
 var randIndex = Math.ceil(Math.random()*tileArr.length-1);
 tileArr[randIndex].style.backgroundColor = randomColor();
}

var intervalID = window.setInterval(tileReplace, 1000);
