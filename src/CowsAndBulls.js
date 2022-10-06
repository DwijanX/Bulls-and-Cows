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
         let secretCodeString=String(this.secretCode);
         let cowsCharacters=""
         for(let index=0;index<guessingCodeString.length;index++)
         {
            if(secretCodeString.includes(guessingCodeString[index]))
            {
               cowsCharacters+="*"
               secretCodeString=secretCodeString.replace(guessingCodeString[index],"")
            }
         }
         return cowsCharacters
     }
     getBullCharacters(code)
     {
         let guessingCodeString=String(code)
         let secretCodeString=String(this.secretCode);
         let cowsCharacters=""
         for(let index=0;index<guessingCodeString.length;index++)
         {
            if(secretCodeString[index] == guessingCodeString[index])
            {
               cowsCharacters+="!"
            }
         }
         return cowsCharacters
     }

     getStringFromChars(code)
     {
         let bullChar = this.getBullCharacters(code)
         let cowChar = this.getCowsCharacters(code)
         return bullChar +  cowChar.substring(bullChar.length)
     }
}
export default CowsAndBulls