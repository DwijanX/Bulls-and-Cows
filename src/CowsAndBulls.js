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
        if(code == this.secretCode)
        {
            return true
        }
        return false
     }
}
export default CowsAndBulls