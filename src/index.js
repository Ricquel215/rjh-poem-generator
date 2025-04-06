function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "I love to travel the world in luxury",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
