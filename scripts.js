/* let container = document.createElement('div');
container.className = 'container'; */

let btn = document.createElement("button");
let squareLabel = document.createElement("label");
let labelText = document.createTextNode("Add Square");

squareLabel.appendChild(labelText);
btn.appendChild(squareLabel);

let numSquares = 0;

let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

function addSquare() {
    numSquares++;
  let squareDiv = document.createElement("div");
  squareDiv.id = numSquares;
  squareDiv.className = "blackSquare";
  let p = document.createElement('p');
  p.className = 'text';
  let idText = document.createTextNode(numSquares);
  p.appendChild(idText);
  squareDiv.appendChild(p);
  squareDiv.addEventListener("click", function () {
      squareDiv.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    });
    squareDiv.addEventListener('dblclick', function () {
        if ((squareDiv.id % 2 == 0) && (squareDiv.nextElementSibling === null)) {
            alert('There is no square to remove after this.');
            } else if (squareDiv.id % 2  == 0) {
                squareDiv.nextElementSibling.remove();
            } else if ((squareDiv.id % 2 !== 0) && (squareDiv.previousElementSibling.className === "blackSquare")) {
                squareDiv.previousElementSibling.remove();
            } else {
                 alert('There is no square to remove before this.');
            }
        }
    )
    
    document.body.appendChild(squareDiv);
    p.style.opacity = '0';
    
    squareDiv.addEventListener('mouseenter', function () {
        p.style.opacity = '1';
    });
    squareDiv.addEventListener('mouseleave', function () {
        p.style.opacity = '0';
    });
}

btn.addEventListener("click", addSquare);

document.body.appendChild(btn);


let hr = document.createElement("hr");
document.body.appendChild(hr);
