var sqArr = [];
var tileArr = [];

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

// var moDown =  false;

for (let square of sqArr) {
  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = currentColor;
  }, false);
}

var currentColor;

left.addEventListener("click", function () {
  currentColor = event.target.style.backgroundColor;
}, false);
right.addEventListener("click", function () {
  currentColor = event.target.style.backgroundColor;
}, false);

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
 var newTileColor = tileArr[randIndex].style.backgroundColor = randomColor();
}

var intervalID = window.setInterval(tileReplace, 1000);
