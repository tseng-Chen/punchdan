var count = 0;
var normalImg = "./assets/normal.png";
var punched = false;


function punch() {
  if (punched) return;
  punched = true;
  ++count;
  if (count > 820) normalImg = "./assets/red.png";
  const counter = document.getElementById("counter");
  counter.style.rotate = `${(Math.random() - 0.5) / 10}turn`;
  counter.style.scale = "1.3";
  counter.innerHTML = count;
  document.getElementById("dan").src = "./assets/punched.png";
  const audio = document.createElement("audio");
  audio.src = `./assets/sound/${Math.floor(Math.random() * 11)}.mp3`;
  audio.play();
  setTimeout(() => {
    counter.style.rotate = "0turn";
    counter.style.scale = "1";
  }, 50);
}

function release() {
  punched = false;
  document.getElementById("dan").src = normalImg;
}
