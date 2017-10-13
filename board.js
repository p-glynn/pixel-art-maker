var rowArr = [];
var sqArr = [];

for (let i=0; i<100; i++) {
  var contain = document.getElementsByClassName("contain")[0];
  var row = document.createElement("div");
  contain.appendChild(row);
  row.className="row";
  row.id=`${i}`
  rowArr.push(row);

  for (let j=0; j<100; j++) {
    var sq = document.createElement("div");
    row.appendChild(sq);
    sq.className="square";
    sq.id=`${i}${j}`
    sqArr.push(sq);
    sq.counter = 0;
  }
}

// console.log(rowArr);
console.log(sqArr);

for (let square of sqArr) {
  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = randomColor();
  }, false);
}

function randomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
return color;
}
