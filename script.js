console.log("script was working");

let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;
let btn = document.querySelectorAll(".btn");

btn.forEach((value) => {
  value.addEventListener("click", (e) => {
    if (turnO) {
      value.innerText = "O";
      turnO = false;
    } else {
      value.innerText = "X";
      turnO = true;
    }
    value.disabled = true;

    winpattern();
  });
});

let hide = document.querySelector('.hide')
let h2 = document.getElementById('h2')

const disabledBoxes = () => {
  for(let box of btn){
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for(let box of btn){
    box.disabled = false;
    box.innerText = '';
  }
}

const reset = () => {
  hide.classList.add('hide')
  enableBoxes()
}


const afterWin = (winner) => {
h2.innerHTML = `winner was ${winner}`
hide.classList.remove('hide')
disabledBoxes()
} 


const winpattern = () => {
  for (let pattern of winner) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;

    if ((pos1 != "", pos2 != "", pos3 != "")) {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner " + pos1)
         afterWin(pos1)
      }
    }
  }
};

