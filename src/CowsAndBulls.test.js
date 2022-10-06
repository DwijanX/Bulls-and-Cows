import CowsAndBulls from "./CowsAndBulls.js";


describe("Pruebas de turnos", () => {
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
  it("deberia cambiar el turno de 1 a 2", () => {
    cowsAndBullsObj.swapPlayersTurn()
    expect(cowsAndBullsObj.getCurrentTurn()).toEqual(2);
  });
  it("deberia cambiar el turno de 1 a 2 y luego de 2 a 1", () => {
    cowsAndBullsObj.swapPlayersTurn()
    cowsAndBullsObj.swapPlayersTurn()
    expect(cowsAndBullsObj.getCurrentTurn()).toEqual(1);
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
    it("Prueba 1 de la cantidad de vacas que devuelve",()=>{
        cowsAndBullsObj.saveSecretCode(1236)
        expect(cowsAndBullsObj.getCowsCharacters(1425)).toEqual("**");
    })
    it("Prueba 2 de la cantidad de vacas que devuelve",()=>{
        cowsAndBullsObj.saveSecretCode(1124)
        expect(cowsAndBullsObj.getCowsCharacters(1425)).toEqual("***");
    })
    it("Probando que la cantidad de vacas sea correcta con numeros repetidos en el intento",()=>{
        expect(cowsAndBullsObj.getCowsCharacters(1125)).toEqual("***");
    })
    it("Prueba 1 de la cantidad de toros",()=>{
        cowsAndBullsObj.saveSecretCode(1236)
        expect(cowsAndBullsObj.getBullCharacters(1425)).toEqual("!");
    })
})