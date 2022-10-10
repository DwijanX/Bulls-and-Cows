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
        expect(cowsAndBullsObj.getCowCharacters(1425)).toEqual("**");
    })
    it("Prueba 2 de la cantidad de vacas que devuelve",()=>{
        cowsAndBullsObj.saveSecretCode(1124)
        expect(cowsAndBullsObj.getCowCharacters(1425)).toEqual("***");
    })
    it("Probando que la cantidad de vacas sea correcta con numeros repetidos en el intento",()=>{
        expect(cowsAndBullsObj.getCowCharacters(1125)).toEqual("***");
    })
    it("Prueba 1 de la cantidad de toros",()=>{
        cowsAndBullsObj.saveSecretCode(1236)
        expect(cowsAndBullsObj.getBullCharacters(1425)).toEqual("!");
    })
    it("Prueba 2 de la cantidad de toros que devuelve",()=>{
        cowsAndBullsObj.saveSecretCode(1124)
        expect(cowsAndBullsObj.getBullCharacters(1624)).toEqual("!!!");
    })
    it("Prueba entre vacas y toros juntos",()=>{
        cowsAndBullsObj.saveSecretCode(1324)
        expect(cowsAndBullsObj.getHintString(1623)).toEqual("!!*");
    })
    it("Prueba entre vacas y toros juntos 2",()=>{
        cowsAndBullsObj.saveSecretCode(1325)
        expect(cowsAndBullsObj.getHintString(7115)).toEqual("!*");
    })
})

describe("Pruebas de las vidas del juego",()=>{
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
    it("Obteniendo la cantidad de vidas por defecto",()=>{
        expect(cowsAndBullsObj.getLifesRemaining()).toEqual(8);
    })
    it("Reduciendo la cantidad de vidas con cada intento",()=>{
        cowsAndBullsObj.guessSecretCode(1000)
        expect(cowsAndBullsObj.getLifesRemaining()).toEqual(7);
    })
    it("viendo la cantidad de vidas que se tiene al cambiar su valor",()=>{
        cowsAndBullsObj.setLifesValue(10)
         expect(cowsAndBullsObj.getLifesValue()).toEqual(10);
    })
    it("Reduciendo la cantidad de vidas con cada intento con un valor de vidas distinto",()=>{
        cowsAndBullsObj.setLifesValue(15)
        cowsAndBullsObj.guessSecretCode(1000)
        cowsAndBullsObj.guessSecretCode(1001)
        cowsAndBullsObj.guessSecretCode(1002)
        expect(cowsAndBullsObj.getLifesRemaining()).toEqual(12);
    })
})

describe("pruebas de tamano del codigo secreto",()=>{
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
    it("devuelve el tamano de la cadena por defecto",()=>{
        expect(cowsAndBullsObj.getCodeLength()).toEqual(4);
    })
    it("permite cambio de tamanho del codigo",()=>{
        cowsAndBullsObj.setCodeLength(5)
        expect(cowsAndBullsObj.getCodeLength()).toEqual(5);
    })
})

describe("pruebas para generar codigos aleatoriamente",()=>{
    let cowsAndBullsObj;
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;  //todos los numeros random en las pruebas daran 0.5
    global.Math = mockMath;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
    it("probando generar codigo con 4 digitos",()=>{
        cowsAndBullsObj.generateCodeRandomly()
        expect(cowsAndBullsObj.getSecretCode()).toEqual("5555");
    })
    it("probando generar codigo con 5 digitos",()=>{
        cowsAndBullsObj.setCodeLength(5)
        cowsAndBullsObj.generateCodeRandomly()
        expect(cowsAndBullsObj.getSecretCode()).toEqual("55555");
    })
})
describe("pruebas usando un codigo que contiene letras",()=>{
    let cowsAndBullsObj;
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;  //todos los numeros random en las pruebas daran 0.5
    global.Math = mockMath;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
    })
    it("guardar un codigo con letras",()=>{
        cowsAndBullsObj.saveSecretCode("a13g")
        expect(cowsAndBullsObj.getSecretCode()).toEqual("a13g");
    })
    
    it("Prueba entre vacas y toros juntos usando letras",()=>{
        cowsAndBullsObj.saveSecretCode("1ga4")
        expect(cowsAndBullsObj.getHintString("2da4")).toEqual("!!");
    })
    it("Prueba para generar numeros aleatorios con letras",()=>{
        cowsAndBullsObj.setUseLetters(true)
        cowsAndBullsObj.generateCodeRandomly()
        expect(cowsAndBullsObj.getSecretCode()).toEqual("iiii");
    })
})
describe("pruebas para guardar lista de codigos anteriormente puestos",()=>{
    let cowsAndBullsObj;
    beforeEach(()=>{
        cowsAndBullsObj=new CowsAndBulls()
        cowsAndBullsObj.saveSecretCode("a13g")
        cowsAndBullsObj.addNewCodeToHistory("1111")
    })
    it("guardando un nuevo codigo",()=>{
        expect(cowsAndBullsObj.getCodeHistory()).toEqual("intentos: 1111");
    })
    it("guardando muchos codigos",()=>{
        cowsAndBullsObj.addNewCodeToHistory("2222")
        cowsAndBullsObj.addNewCodeToHistory("3333")
        expect(cowsAndBullsObj.getCodeHistory()).toEqual("intentos: 1111, 2222, 3333");
    })
    it("probando que no se guarden codigos repetidos",()=>{
        cowsAndBullsObj.addNewCodeToHistory("2222")
        cowsAndBullsObj.addNewCodeToHistory("3333")
        cowsAndBullsObj.addNewCodeToHistory("3333")
        cowsAndBullsObj.addNewCodeToHistory("3333")
        expect(cowsAndBullsObj.getCodeHistory()).toEqual("intentos: 1111, 2222, 3333");
    })
    it("probando que se guarde codigo al adivinar",()=>{
        cowsAndBullsObj.guessSecretCode("2222")
        cowsAndBullsObj.guessSecretCode("3333")
        cowsAndBullsObj.guessSecretCode("3333")
        cowsAndBullsObj.guessSecretCode("3333")
        expect(cowsAndBullsObj.getCodeHistory()).toEqual("intentos: 1111, 2222, 3333");
    })
})