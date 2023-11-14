import { vi } from "vitest";

import { Estado, partida } from "./modelo";

import { comprobarEstadoPartida, 
        numeroAleatorio, 
        numeroCarta, 
        puntosCarta } from "./motor";

describe ("comprobarEstadoPartida", () => {

    it ("Cuando la puntuación obtenida es superior a 7.5 se pierde la partida", () => {
        // Arrange
        const puntos : number = 8;
        const estadoAComprobar: Estado = "PERDIDO";
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5)

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });

    it ("Cuando la puntuación obtenida es igual a 7.5 se gana la partida", () => {
        // Arrange
        const puntos : number = 7.5;
        const estadoAComprobar: Estado = "GANADO";
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5)

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });

    it ("Debería devolver el estado MENOR_QUE_4 cuando la puntuación sea menor que 4", () => {
        // Arrange
        const puntos : number = 3;
        const estadoAComprobar: Estado = "MENOR_QUE_4";
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5)

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });

    it ("Debería devolver el estado HA_SIDO_5 cuando la puntuación sea igual a 5", () => {
        // Arrange
        const puntos : number = 5;
        const estadoAComprobar: Estado = "HA_SIDO_5";
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5)

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });

    it ("Debería devolver el estado HA_SIDO_6_O_7 cuando la puntuación esté entre 6 y 7", () => {
        // Arrange
        const puntos : number = 6.5;
        const estadoAComprobar: Estado = "HA_SIDO_6_O_7";
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5)

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });
});

// PARTE OPCIONAL

//Función para generar número aleatorio entre 0 y 10.

describe ("numeroAleatorio", () => {
    it ("Math random lo formazos a que devuelva 0, debería devolver 1", () => {
        // Arrange
        const numeroEsperado: number = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(0);
        //Act
        const resultado: number = numeroAleatorio();
        //Assert
        expect(resultado).toBe(numeroEsperado);
    });

    it ("Math random lo formazos a que devuelva 0.999, debería devolver 10", () => {
        // Arrange
        const numeroEsperado: number = 10;
        vi.spyOn(global.Math, "random").mockReturnValue(0.999);
        //Act
        const resultado: number = numeroAleatorio();
        //Assert
        expect(resultado).toBe(numeroEsperado);
    });
});

describe ("numeroCarta", () => {
    it ("Si la carta es mayor que 7 le sumamos 2", () => {
        //Arrange
        const numeroEsperado: number = 11;
        const carta: number = 9;
        //Act
        const resultado: number = numeroCarta(carta);
        //Assert
        expect(resultado).toBe(numeroEsperado);
    });

    it ("Si la carta es menor que 7 no le sumamos 2", () => {
        //Arrange
        const numeroEsperado: number = 7;
        const carta: number = 7;
        //Act
        const resultado: number = numeroCarta(carta);
        //Assert
        expect(resultado).toBe(numeroEsperado);
    });
})

// Valor de la carta.

describe ("puntosCarta", () => {
    it ("Si la carta es mayor que 7 la puntuación es de 0.5", () => {
        //Arrange
        const puntuacionEsperada: number = 0.5;
        const carta: number = 11
        //Act
        const resultado: number = puntosCarta(carta);
        //Assert
        expect(resultado).toBe(puntuacionEsperada);
    });

    it ("Si la carta es menor o igual que 7 la puntuación es su valor real", () => {
        //Arrange
        const puntuacionEsperada: number = 4;
        const carta: number = 4
        //Act
        const resultado: number = puntosCarta(carta);
        //Assert
        expect(resultado).toBe(puntuacionEsperada);
    });
});