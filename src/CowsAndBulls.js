class CowsAndBulls
{
     constructor()
     {
        this.currentTurn=1
        this.secretCode
     }
     saveSecretCode(code)
     {
        this.secretCode=code
     }
     getSecretCode()
     {
        return this.secretCode
     }
     swapPlayersTurn()
     {
        if(this.currentTurn==1) this.currentTurn=2
        else this.currentTurn=1
     }
     getCurrentTurn()
     {
        return this.currentTurn
     }
     guessSecretCode(code)
     {
        return code == this.secretCode
     }
     getCowsCharacters(code)
     {
         let guessingCodeString=String(code)
         let secretCodeArray=String(this.secretCode);
         let cowsCharacters=""
         for(let index=0;index<guessingCodeString.length;index++)
         {
            if(secretCodeArray.includes(guessingCodeString[index]))
            {
               cowsCharacters+="!"
            }
         }
         return cowsCharacters
     }
}
export default CowsAndBulls