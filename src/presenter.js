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
const inputsArray = document.querySelectorAll("input")


let maxLengthValue;
let codeString = document.querySelector("#codeString");
let guessString = document.querySelector("#guessString");


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
  const codeNumber = Number.parseInt(codeTry.value);
  let AnswerHTML = "<p>lo lograste!, el codigo que ingresaste es el correcto<p>"
  if(!cowsAndBullsObj.guessSecretCode(codeNumber))
  {
    AnswerHTML = "<p>el codigo que ingreso no es el correcto</p>"
    AnswerHTML+= "<p>Pista obtenida:"+cowsAndBullsObj.getHintString(codeNumber)+"</p>"
  }
  if(cowsAndBullsObj.getLifesRemaining()<=0)
  {
    AnswerHTML+= "<p>Perdiste el juego, el codigo era: "+cowsAndBullsObj.getSecretCode()+"</p>"
  }
  return AnswerHTML
}

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const codeNumber = Number.parseInt(code.value);

    codeString.innerHTML = "<p>la clave secreta es: "+codeNumber + ", estas listo para empezar?" + "</p>";
    startButton.style.display = 'flex';
  });
  
  startButton.addEventListener("click",(event)=>{
    event.preventDefault();
    changeItemsDisplay(SecretCodeInputClass,"none")
    changeItemsDisplay(itemsToGuessCode,"flex")

    const codeNumber = Number.parseInt(code.value);
    cowsAndBullsObj.swapPlayersTurn()
    cowsAndBullsObj.saveSecretCode(codeNumber)
  })

  guessButton.addEventListener("click",(event)=>{
    event.preventDefault();
    guessString.innerHTML = getGuessAnswerHTML();
    updateLifesHTML()
  })

onload = (event) => { 
  updateLifesHTML()
};