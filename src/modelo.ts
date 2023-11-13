interface Partida {
    puntos : number;
};

export const partida : Partida = {
    puntos: 0,
};

export type Estado =
    | "MENOR_QUE_4"
    | "HA_SIDO_5"
    | "HA_SIDO_6_O_7"
    | "GANADO"
    | "PERDIDO"
    | "NINGUN_ESTADO";