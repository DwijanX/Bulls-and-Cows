import CowsAndBulls from "./CowsAndBulls";


describe("Pruebas de turnos", () => {
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
  it("deberia cambiar el turno de 1 a 2", () => {
    cowsAndBullsObj.swapPlayersTurn()
    expect(cowsAndBullsObj.getCurrentTurn()).toEqual(2);
  });
});
describe("Pruebas del codigo secreto",()=>{
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
    it("Prueba para guardar el codigo secreto",()=>{
        cowsAndBullsObj.saveSecretCode(1425)
        expect(cowsAndBullsObj.getSecretCode()).toEqual(1425);

    })
})

describe("Pruebas de respuesta tras adivinar",()=>{
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
        cowsAndBullsObj.saveSecretCode(1425)
    })
    it("Prueba si el codigo es incorrecto",()=>{
        expect(cowsAndBullsObj.guessSecretCode(1000)).toEqual(false);
    })
    it("Prueba si el codigo es correcto",()=>{
        expect(cowsAndBullsObj.guessSecretCode(1425)).toEqual(true);
    })
})