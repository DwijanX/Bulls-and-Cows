class CowsAndBulls
{
     constructor()
     {
        this.currentTurn=1
        this.secretCode
        this.lifes=8
        this.codeLength=4
     }
     setCodeLength(length)
     {
      this.codeLength=length
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
         this.lifes-=1
         return code == this.secretCode
     }
     getCodeLength()
     {
         return this.codeLength
     }
     getCowCharacters(code)
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
     getLifesRemaining()
     {
      return this.lifes
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

     getHintString(code)
     {
         let bullChar = this.getBullCharacters(code)
         let cowChar = this.getCowCharacters(code)
         return bullChar +  cowChar.substring(bullChar.length)
     }
}
export default CowsAndBulls