

const code = document.querySelector("#code");
const startButton = document.querySelector("#startButton");
const confirmButton = document.querySelector("#confirmButton");

let codeString = document.querySelector("#codeString");

startButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const codeNumber = Number.parseInt(code.value);

    codeString.innerHTML = "<p>la clave secreta es: "+codeNumber + ", estas listo para empezar?" + "</p>";
    confirmButton.style.display = 'flex';
  });