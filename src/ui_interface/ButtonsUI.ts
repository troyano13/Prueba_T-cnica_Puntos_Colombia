/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Centraliza la obtención de botones mediante su texto visible.
 * Versión: 1.0
 */

export class ButtonsUI {

    static byName(buttonName: string) {

        return {
            name: new RegExp(`^${buttonName}$`, "i")
        };

    }

}