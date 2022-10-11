import CowsAndBulls from "./CowsAndBulls.js";

class CowsAndBullsController
{
    constructor(restartButtonReference)
    {
        this.gameObject=new CowsAndBulls;
        this.restartButtonReference=restartButtonReference;
    }
    #setRestartButtonVisible()
    {
        this.restartButtonReference.style.display="flex"
    }
    getGuessAnswerHTML(guessedCode)
    {
        let AnswerHTML="";
        console.log(guessedCode);
        if(this.gameObject.guessSecretCode(guessedCode)==false)//returns true if code is correct
        {
            AnswerHTML = "<p>El codigo que ingreso no es el correcto</p>"
            AnswerHTML+= "<p>Pista obtenida:"+ this.gameObject.getHintString(guessedCode)+"</p>"
            if( this.gameObject.getLifesRemaining()<=0)
            {
                AnswerHTML+= "<p>Perdiste el juego, el codigo era: "+ this.gameObject.getSecretCode()+"</p>"
                this.#setRestartButtonVisible()
            }
        }
        else
        {
            AnswerHTML+= "<p>Lo lograste!!!, el codigo que ingresaste es el correcto<p>"
            guessButton.style.display="none"
            this.#setRestartButtonVisible()

        }
        return AnswerHTML
    }
    setLifesIfValueIsValid(lifes)
    {
        if(lifes != "")
        {
            this.gameObject.setLifesValue(lifes)
        }
    }
    updateLifesHTML(LifesBlock)
    {
        LifesBlock.innerHTML=this.gameObject.getLifesRemaining()
    }
    getGameObject()
    {
        return this.gameObject
    }
    fillHTMLObjwithHistory(Object)
    {
        Object.innerHTML=this.gameObject.getCodeHistory();
    }
    restartGameObject()
    {
        this.gameObject=new CowsAndBulls()
    }
}
export default CowsAndBullsController