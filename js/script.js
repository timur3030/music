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
  let h2 = document.querySelector("h2");
  let i = document.querySelector("i");

  play.addEventListener("click", (e) => {
    if (e.target.classList.contains("playing")) {
      e.target.firstElementChild.src = "icons/play.svg";
      audio.pause(120);
      play.classList.remove("playing");
    } else {
      i.textContent = audio.currentTime;
      h2.textContent = range.value;
      e.target.firstElementChild.src = "icons/pause.svg";
      audio.play();
      audio.currentTime = range.value;
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
    // console.log("Audio Player");
    // audio.volume = 1;
    // console.log(audio.currentTime);
  });

  volumemin.addEventListener("click", () => {
    console.log("Audio Player");
    audio.volume = 0;
  });

  range.addEventListener("input", () => {
    range.max = audio.duration;
    // console.log(range.max);
    // console.log(audio.currentTime);
    // i.textContent = audio.currentTime;
  });

  range.addEventListener("change", () => {
    audio.currentTime = range.value;
    // h2.textContent = audio.currentTime;
  });

  function audioEnds() {
    play.firstElementChild.src = "icons/play.svg";
    range.value = 0;
    play.classList.remove("playing");
  }
});
