document.addEventListener("DOMContentLoaded", function () {
  let audio = document.querySelector("audio");
  let h1 = document.querySelector("h1");
  let isPlaying = false;
  let isPaused = false;
  let isStopped = false;
  h1.addEventListener("click", () => {
    audio.play();
    console.log("play");
    console.log(audio);
  });
  // console.log(audio);
  // console.log("Audio Player");
});
