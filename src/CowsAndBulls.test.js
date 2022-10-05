import {saveSecretCode,getSecretCode,getCurrentTurn,swapPlayersTurn} from "./CowsAndBulls.js";

describe("Pruebas de turnos", () => {
  it("deberia cambiar el turno de 1 a 2", () => {
    swapPlayersTurn()
    expect(getCurrentTurn()).toEqual(2);
  });
});
describe("Pruebas del codigo secreto",()=>{
    it("Prueba para guardar el codigo secreto",()=>{
        saveSecretCode(1425)
        expect(getSecretCode()).toEqual(1425);

    })
})