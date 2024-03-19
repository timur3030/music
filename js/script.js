import { songs } from "./songs.js";

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.querySelector("audio");
  let h1 = document.querySelector("h1");
  let start = document.querySelector(".start");
  let play = document.querySelector(".play");
  let pause = document.querySelector(".pause");
  let prev = document.querySelector(".prev");
  let isPlaying = false;
  let isPaused = false;
  let isStopped = false;

  play.addEventListener("click", (e) => {
    if (e.target.classList.contains("pause")) {
      e.target.innerHTML = '<img src="icons/play.svg" alt="" />';
      audio.pause();
    } else {
      e.target.innerHTML = '<img src="icons/pause.svg" alt="" />';
      audio.play();
    }
    play.classList.toggle("pause");
  });

  // console.log(play);
  // console.log(pause);
  // console.log("Audio Player");
});
