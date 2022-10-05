let turno=1
let secretCode
function saveSecretCode(code)
{
    secretCode=code
}
function getSecretCode()
{
    return secretCode
}
function swapPlayersTurn()
{
    if(turno==1)
    {
        turno=2
    }
    else
    {
        turno=1
    }
}
function getCurrentTurn()
{
    return turno
}
export {saveSecretCode,getSecretCode,getCurrentTurn,swapPlayersTurn}
