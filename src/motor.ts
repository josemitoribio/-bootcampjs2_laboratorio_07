import {
    partida,
    Estado
} from "./modelo";

export const numeroAleatorio = () : number =>  Math.floor(Math.random() * 10) + 1;

export const numeroCarta = (carta: number) : number => carta > 7 ? carta + 2 : carta;

export const puntosCarta = (carta: number) : number  => carta <= 7 ? carta : 0.5;    

export const sumarPuntuacion = (carta: number) => partida.puntos += carta;

export const comprobarEstadoPartida = (puntos: number) : Estado => {
    if (puntos < 4) {
        return "MENOR_QUE_4";
    }
    if (puntos === 5 ) {
        return "HA_SIDO_5";
    }
    if (puntos >= 6 && puntos <= 7) {
        return "HA_SIDO_6_O_7";
    }
    if (puntos === 7.5) {
        return "GANADO";
    }
    if (puntos > 7.5) {
        return "PERDIDO";
    }
    return "NINGUN_ESTADO";
};