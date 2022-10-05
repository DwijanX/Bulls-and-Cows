import {getCurrentTurn,swapPlayersTurn} from "./CowsAndBulls.js";

describe("Pruebas de turnos", () => {
  it("deberia cambiar el turno de 1 a 2", () => {
    swapPlayersTurn()
    expect(getCurrentTurn()).toEqual(2);
  });
});
