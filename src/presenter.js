import CowsAndBulls from "./CowsAndBulls.js";

const cowsAndBullsObj = new CowsAndBulls()

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



let codeString = document.querySelector("#codeString");
let guessString = document.querySelector("#guessString");
let codesAlreadyWritten = document.querySelector("#codesAlreadyWritten");


inputsArray.forEach((input)=>{
  input.addEventListener("input",(event)=>{
    event.preventDefault();
    let maxLength=cowsAndBullsObj.getCodeLength()
    
    if (input.value.length>maxLength)
    {
      input.value = input.value.slice(0,maxLength)
    }
  })
})

function setLifesIfValueIsAdded()
{
  if(lifes.value != null)
  {
    cowsAndBullsObj.setLifesValue(lifes.value)
  }
}

function updateLifesHTML()
{
  LifesValue.innerHTML=cowsAndBullsObj.getLifesRemaining()
}
function changeItemsDisplay(Items,displayMode)
{
  Items.forEach((item)=>{
    item.style.display=displayMode
  })
}

function getGuessAnswerHTML()
{
  const codeNumber = String(codeTry.value);
  let AnswerHTML="";
  if(!cowsAndBullsObj.guessSecretCode(codeNumber))
  {
    AnswerHTML = "<p>el codigo que ingreso no es el correcto</p>"
    AnswerHTML+= "<p>Pista obtenida:"+cowsAndBullsObj.getHintString(codeNumber)+"</p>"
    if(cowsAndBullsObj.getLifesRemaining()<=0)
    {
      AnswerHTML+= "<p>Perdiste el juego, el codigo era: "+cowsAndBullsObj.getSecretCode()+"</p>"
    }
  }
  else
  {
    AnswerHTML+= "<p>lo lograste!, el codigo que ingresaste es el correcto<p>"
    guessButton.style.display="none"
  }
  return AnswerHTML
}

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const codeNumber = String(code.value);
    codeLengthInput.style.display="none"
    codeString.innerHTML = "<p>la clave secreta es: "+codeNumber + ", estas listo para empezar?" + "</p>";
    startButton.style.display = 'flex';
  });
  
  startButton.addEventListener("click",(event)=>{
    event.preventDefault();
    changeItemsDisplay(SecretCodeInputClass,"none")
    changeItemsDisplay(itemsToGuessCode,"flex")
    const codeNumber = String(code.value);
    cowsAndBullsObj.swapPlayersTurn()
    cowsAndBullsObj.saveSecretCode(codeNumber)
    setLifesIfValueIsAdded()
    updateLifesHTML()

    codesAlreadyWritten.innerHTML = cowsAndBullsObj.getCodeList()
  })

  guessButton.addEventListener("click",(event)=>{
    event.preventDefault();
    guessString.innerHTML = getGuessAnswerHTML();
    codesAlreadyWritten.innerHTML = cowsAndBullsObj.getCodeList()
    updateLifesHTML()
  })
  
  AIButton.addEventListener("click",(event)=>{
    event.preventDefault();
    changeItemsDisplay(SecretCodeInputClass,"none")
    changeItemsDisplay(itemsToGuessCode,"flex")
    codeLengthInput.style.display="none"

    cowsAndBullsObj.swapPlayersTurn()
    cowsAndBullsObj.generateCodeRandomly()

    setLifesIfValueIsAdded()
    updateLifesHTML()

    codesAlreadyWritten.innerHTML = cowsAndBullsObj.getCodeList()
  })
  
  codeLengthInput.addEventListener("change",(event)=>{
    
    cowsAndBullsObj.setCodeLength(parseInt(codeLengthInput.value))
    inputsArray.forEach((input)=>{
      input.value=""
    })
  })
  lettersCheckBox.addEventListener("change",()=>{
    let inputModes={false:"number",true:"text"}
    let useLettersBoolean=lettersCheckBox.checked
    cowsAndBullsObj.setUseLetters(useLettersBoolean)
    inputsArray.forEach((input)=>{
      input.type=inputModes[useLettersBoolean]
    })
  })

  
onload = (event) => { 
  updateLifesHTML()
};