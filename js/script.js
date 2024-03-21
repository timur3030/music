import { songs } from "./songs.js";

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.querySelector("audio");
  let play = document.querySelector(".play");
  let pause = document.querySelector(".pause");
  let prev = document.querySelector(".prev");
  let volumemax = document.querySelector(".volume-max");
  let volumemin = document.querySelector(".volume-min");
  let range = document.querySelector(".player__duration");
  let timer = 0;
  range.value = 0;

  play.addEventListener("click", (e) => {
    if (e.target.classList.contains("playing")) {
      e.target.firstElementChild.src = "icons/play.svg";
      audio.pause();
      play.classList.remove("playing");
    } else {
      e.target.firstElementChild.src = "icons/pause.svg";
      audio.play();
      play.classList.add("playing");
      range.max = audio.duration;
      if (timer > 1) {
        null;
      } else {
        timer = setInterval(() => {
          if (audio.ended) {
            audioEnds();
            clearInterval(timer);
            timer = 0;
            return;
          }
          range.value = audio.currentTime;
        }, 1000);
      }
    }
  });

  volumemax.addEventListener("click", () => {
    console.log("Audio Player");
    audio.volume = 1;
  });

  volumemin.addEventListener("click", () => {
    console.log("Audio Player");
    audio.volume = 0;
  });

  range.addEventListener("input", () => {
    range.max = audio.duration;
  });

  range.addEventListener("change", () => {
    audio.currentTime = range.value;
  });

  function audioEnds() {
    play.firstElementChild.src = "icons/play.svg";
    range.value = 0;
    play.classList.remove("playing");
  }
});
