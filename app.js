let btn = document.querySelector(".btn");
let body = document.body;
let flickerSound = document.getElementById("flickerSound");
let clickSound = document.getElementById("clickSound");
let typeSound = document.getElementById("typeSound");
let title = document.getElementById("title");

let fullText = "AMPX_1007";
let typingDelay = 150;

function typeWriterEffect(text, element) {
  element.textContent = "";
  let i = 0;

  let interval = setInterval(() => {
    element.textContent += text[i];
    typeSound.currentTime = 0;
    typeSound.play();
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, typingDelay);
}

btn.addEventListener("click", () => {
  if (!body.classList.contains("on")) {
    body.classList.add("flicker");
    flickerSound.currentTime = 0;
    flickerSound.play();

    setTimeout(() => {
      body.classList.remove("flicker");
      body.classList.add("on");
      clickSound.currentTime = 0;
      clickSound.play();
      typeWriterEffect(fullText, title);
    }, 1500);
  } else {
    body.classList.remove("on");
    title.textContent = "";
  }
});
