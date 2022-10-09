const valuesToGenerateSecretCode=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

class CowsAndBulls
{
     constructor()
     {
        this.currentTurn=1
        this.secretCode
        this.lifes=8
        this.codeLength=4
        this.useLetters=false
        this.codeList = []
     }
     setCodeLength(length)
     {
      this.codeLength=length
     }
     setUseLetters(value) 
     {
      this.useLetters=value
     }
     saveSecretCode(code)
     {
        this.secretCode=code
     }
     getSecretCode()
     {
        return this.secretCode
     }

     getCodeList()
     {
         let codeString=""
         for (var i = 0; i < this.codeList.length ; i++) 
         {
            codeString+= i + ' = ' + this.codeList[i];
            if(i != this.codeList.length - 1)
            {
               codeString+=','
            }
         }
         return codeString
     }

     addNewCodeToList(code)
     {
         if(!this.codeList.includes(code))
         {
            this.codeList.push(code)
         }
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
     

     generateCodeRandomly()
     {
      let randomSecretCode=""
      let numberOfValuesToGenerateCode;
      if(this.useLetters)
         numberOfValuesToGenerateCode=valuesToGenerateSecretCode.length
      else
         numberOfValuesToGenerateCode=9
      for(let it=0;it<this.codeLength;it++)
      {
         let randomIndex=Math.round( Math.random() * (numberOfValuesToGenerateCode));
         randomSecretCode+=valuesToGenerateSecretCode[randomIndex]
      }
      this.secretCode=randomSecretCode
     }
}
export default CowsAndBulls