

const code = document.querySelector("#code");
const startButton = document.querySelector("#startButton");

let codeString = document.querySelector("#codeString");

startButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const codeNumber = Number.parseInt(code.value);

    codeString.innerHTML = "<p>la clave secreta es: "+codeNumber + "</p>";
  });