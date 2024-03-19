import { songs } from "./songs.js";

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.querySelector("audio");
  let h1 = document.querySelector("h1");
  let play = document.querySelector(".play");
  let pause = document.querySelector(".pause");
  let prev = document.querySelector(".prev");
  let isPlaying = false;
  let isPaused = false;
  let isStopped = false;
  console.log(songs);
  play.addEventListener("click", () => {
    audio.play();
    console.log("play");
  });
  pause.addEventListener("click", () => {
    audio.pause();
    console.log("pause");
  });
  console.log(play);
  console.log(pause);
  // console.log("Audio Player");
});
