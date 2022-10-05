import CowsAndBulls from "./CowsAndBulls.js";

const cowsAndBullsObj = new CowsAndBulls()

const code = document.querySelector("#code");
const codeTry = document.querySelector("#codeTry");
const saveButton = document.querySelector("#saveButton");
const startButton = document.querySelector("#startButton");
const guessButton = document.querySelector("#guessButton");
const SecretCodeInputClass = document.querySelectorAll(".SecretCodeInputClass");
const itemsToGuessCode = document.querySelectorAll(".itemsToGuessCode");

let codeString = document.querySelector("#codeString");
let guessString = document.querySelector("#guessString");

function changeItemsDisplay(Items,displayMode)
{
  Items.forEach((item)=>{
    item.style.display=displayMode
  })
}
function getGuessAnswer()
{
  const codeNumber = Number.parseInt(codeTry.value);
  let guessAnswer = "<p>lo lograste!, el codigo que ingresaste es el correcto<p>"
  if(!cowsAndBullsObj.guessSecretCode(codeNumber))
  {
    let cowsStr=cowsAndBullsObj.getCowsCharacters(codeNumber)
    if (cowsStr=="")
    {
      cowsStr=="0"
    }
    guessAnswer = "<p>el codigo que ingreso no es el correcto</p>"
    guessAnswer+="<p>Obtuviste: "+cowsStr+" vacas</p>"
  }
  return guessAnswer
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
    guessString.innerHTML = getGuessAnswer();
  })