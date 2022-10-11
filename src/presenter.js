import CowsAndBullsController from "./CowsAndBullsController.js"

const code = document.querySelector("#code");
const codeTry = document.querySelector("#codeTry");
const saveButton = document.querySelector("#saveButton");
const startButton = document.querySelector("#startButton");
const guessButton = document.querySelector("#guessButton");
const SecretCodeInputClass = document.querySelectorAll(".SecretCodeInputClass");
const itemsToGuessCode = document.querySelectorAll(".itemsToGuessCode");
const LifesValue = document.querySelector("#LifesValue");
const inputsArray = document.querySelectorAll(".inputCodeField")
const codeLengthInput = document.querySelector("#codeLengthInput")
const AIButton = document.querySelector("#AIButton")
const lettersCheckBox = document.querySelector("#lettersCheckBox")
const lifes = document.querySelector("#lifes")
const playAgainButton = document.querySelector("#playAgainButton")


const gameController=new CowsAndBullsController(playAgainButton)

let codeString = document.querySelector("#codeString");
let guessString = document.querySelector("#guessString");
let codesAlreadyWritten = document.querySelector("#codesAlreadyWritten");

inputsArray.forEach((input)=>{
  input.addEventListener("input",(event)=>{
    event.preventDefault();
    let maxLength=gameController.getGameObject().getCodeLength()
    if (input.value.length>maxLength)
    {
      input.value = input.value.slice(0,maxLength)
    }
  })
})


function changeItemsDisplay(Items,displayMode)
{
  Items.forEach((item)=>{
    item.style.display=displayMode
  })
}


saveButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const codeNumber = String(code.value);
    codeLengthInput.style.display="none"
    codeString.innerHTML = "<p>La clave secreta es: "+codeNumber + ", estas listo para empezar?" + "</p>";
    codeString.style.display="inline"
    startButton.style.display = 'inline';
  });
  
  startButton.addEventListener("click",(event)=>{
    event.preventDefault();
    changeItemsDisplay(SecretCodeInputClass,"none")
    changeItemsDisplay(itemsToGuessCode,"flex")
    const codeNumber = String(code.value);
    gameController.getGameObject().swapPlayersTurn()
    gameController.getGameObject().saveSecretCode(codeNumber)
    gameController.setLifesIfValueIsValid(lifes.value)
    gameController.updateLifesHTML(LifesValue)
    gameController.fillHTMLObjwithHistory(codesAlreadyWritten)
  })

  guessButton.addEventListener("click",(event)=>{
    event.preventDefault();
    guessString.innerHTML = gameController.getGuessAnswerHTML(String(codeTry.value))
    gameController.fillHTMLObjwithHistory(codesAlreadyWritten)
    gameController.updateLifesHTML(LifesValue)
  })
  
  AIButton.addEventListener("click",(event)=>{
    event.preventDefault();
    changeItemsDisplay(SecretCodeInputClass,"none")
    changeItemsDisplay(itemsToGuessCode,"flex")
    codeLengthInput.style.display="none"

    gameController.getGameObject().swapPlayersTurn()
    gameController.getGameObject().generateCodeRandomly()

    gameController.setLifesIfValueIsValid(lifes.value)
    gameController.updateLifesHTML(LifesValue)
    gameController.fillHTMLObjwithHistory(codesAlreadyWritten)

  })
  
  codeLengthInput.addEventListener("change",(event)=>{
    gameController.getGameObject().setCodeLength(parseInt(codeLengthInput.value))
    inputsArray.forEach((input)=>{
      input.value=""
    })
  })
  lettersCheckBox.addEventListener("change",()=>{
    let inputModes={false:"number",true:"text"}
    let useLettersBoolean=lettersCheckBox.checked
    gameController.getGameObject().setUseLetters(useLettersBoolean)
    inputsArray.forEach((input)=>{
      input.type=inputModes[useLettersBoolean]
    })
  })
  playAgainButton.addEventListener("click",(e)=>{
    e.preventDefault();
    gameController.restartGameObject()
    changeItemsDisplay(SecretCodeInputClass,"inline")
    changeItemsDisplay(itemsToGuessCode,"none")
    codeString.style.display="none"
    startButton.style.display="none"
    playAgainButton.style.display="none"
    guessString.innerHTML=""
    codesAlreadyWritten.innerHTML=""
    inputsArray.forEach((input)=>{
      input.value=""
    })
  })

  
onload = (event) => { 
  gameController.updateLifesHTML(LifesValue)
};