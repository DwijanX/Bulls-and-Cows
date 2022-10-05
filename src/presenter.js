import {swapPlayersTurn,saveSecretCode} from "./CowsAndBulls.js";

const code = document.querySelector("#code");
const saveButton = document.querySelector("#saveButton");
const startButton = document.querySelector("#startButton");
const SecretCodeInputClass = document.querySelectorAll(".SecretCodeInputClass");
const itemsToGuessCode = document.querySelectorAll(".itemsToGuessCode");

let codeString = document.querySelector("#codeString");

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const codeNumber = Number.parseInt(code.value);

    codeString.innerHTML = "<p>la clave secreta es: "+codeNumber + ", estas listo para empezar?" + "</p>";
    startButton.style.display = 'flex';
  });
  startButton.addEventListener("click",(event)=>{
    event.preventDefault();
    SecretCodeInputClass.forEach((item)=>{
      item.style.display="none"
    })
    itemsToGuessCode.forEach((item)=>{
      item.style.display="flex"
    })
    const codeNumber = Number.parseInt(code.value);
    swapPlayersTurn()
    saveSecretCode(codeNumber)

  })