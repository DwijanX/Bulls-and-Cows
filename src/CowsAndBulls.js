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
        this.codeSet = new Set()
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

     getCodeHistory()
     {
         let codeString="intentos:"
         this.codeSet.forEach((code)=>{
            codeString+= ' '+ code+",";
         })
         codeString=codeString.substring(0,codeString.length-1)
         return codeString
     }

     addNewCodeToHistory(code)
     {
         this.codeSet.add(code)
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

     getLifesValue()
     {
        return this.lifes
     } 

     setLifesValue(newLifeValue)
     {
      this.lifes=newLifeValue
     }

     guessSecretCode(code)
     {
         if (!this.codeSet.has(code))
         {
            this.lifes-=1
         }
         this.addNewCodeToHistory(code)
         return code == this.secretCode
     }

     getCodeLength()
     {
         return this.codeLength
     }
     
     

     getLifesRemaining()
     {
      return this.lifes
     }

     

     getHintString(code)
     {
         let bullChar = this.getBullCharacters(code)
         let cowChar = this.getCowCharacters(code)
         let terneraChar = this.getTerneraCharacters(code)
         return bullChar +  cowChar.substring(bullChar.length) + terneraChar
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

     getTerneraCharacters(code)
     {
      let guessingCodeString=String(code)
      let secretCodeString=String(this.secretCode);
      let terneraCharacters=""
      for(let index=0;index<guessingCodeString.length;index++)
      {
         let terneraConditions = []
         terneraConditions[0] = parseInt(guessingCodeString[index]) - 1
         terneraConditions[1] = parseInt(guessingCodeString[index]) + 1

         if(terneraConditions.some(numMenorOMayorPor1 => secretCodeString.includes(numMenorOMayorPor1)))
         {
               terneraCharacters+="#"
         }
      }
      return terneraCharacters
     }

     getBisonteCharacters()
     {
      let secretCode = this.secretCode
      if(secretCode % 2 === 0 || secretCode % 3 === 0) return "%"; 
      return ""
     }
}
export default CowsAndBulls