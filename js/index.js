"use strict";

const box = document.querySelector(".box");

document.addEventListener("keydown", e =>{
  let code = e.keyCode,
      key = code == 32 ? "Space" : e.key;

  box.querySelector(".key-code").innerText = code;
  box.querySelector(".key-name").innerText = key.toUpperCase();
  box.querySelector(".key").innerText = key;
  box.querySelector(".code").innerText = code;
  box.classList.add("active");
});
