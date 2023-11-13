import { vi } from "vitest";

import { Estado, partida } from "./modelo";

import { comprobarEstadoPartida, 
        numeroAleatorio, 
        numeroCarta, 
        puntosCarta } from "./motor";

describe ("comprobarEstadoPartida", () => {
    beforeEach(() => {
    vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5)
    });

    it ("Cuando la puntuación obtenida es superior a 7.5 se pierde la partida", () => {
        // Arrange
        const puntos : number = 8;
        const estadoAComprobar: Estado = "PERDIDO";

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });

    it ("Cuando la puntuación obtenida es igual a 7.5 se gana la partida", () => {
        // Arrange
        const puntos : number = 7.5;
        const estadoAComprobar: Estado = "GANADO";

        // Act
        const resultado = comprobarEstadoPartida(puntos);

        // Assert 
        expect(resultado).toBe(estadoAComprobar);
    });
});

// PARTE OPCIONAL

//Función para generar número aleatorio entre 0 y 10.

describe ("numeroAleatorio", () => {
    it ("Que el número devuelto sea entre 1 y 10", () => {
        // Arrange
        const numeroEsperado: number = 10;
        vi.spyOn(global.Math, "floor").mockReturnValue(9);
        //Act
        const resultado: number = numeroAleatorio();
        //Assert
        expect(resultado).toBe(numeroEsperado);
    });
});

describe ("numeroCarta", () => {
    it ("Si la carta sale 9 le sumamos 2 para que sea la carta 11", () => {
        //Arrange
        const numeroEsperado: number = 11;
        const carta: number = 9;
        //Act
        const resultado: number = numeroCarta(carta);
        //Assert
        expect(resultado).toBe(numeroEsperado);
    });
})

// Valor de la carta.

describe ("puntosCarta", () => {
    it ("Forzamos a que si obtenemos la carta 11 el valor sea 0.5", () => {
        //Arrange
        const puntuacionEsperada: number = 0.5;
        const carta: number = 11
        //Act
        const resultado: number = puntosCarta(carta);
        //Assert
        expect(resultado).toBe(puntuacionEsperada);
    });
});