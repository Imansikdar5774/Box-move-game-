// box variable 
let box = document.querySelector(".box");
// w variable 
let w = document.querySelector(".W");
// a variable 
let a = document.querySelector(".A");
// d variable 
let d = document.querySelector(".D");
// s variable 
let s = document.querySelector(".S");
// 2D screen ke liye
let playerX = 0;
let playerY = 0;

w.addEventListener('click',() => {
  playerY = playerY - 10;
  box.style.top = playerY + "px";
})

a.addEventListener('click',() => {
  playerX = playerX + 10;
  box.style.right = playerX + "px";
})
d.addEventListener('click',() => {
  playerX = playerX - 10;
  box.style.left = playerX + "px";
})
s.addEventListener('click',() => {
  playerY = playerY - 10;
  box.style.bottom = playerY + "px";
})
