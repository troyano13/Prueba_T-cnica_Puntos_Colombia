/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Abre la aplicación e inicializa el entorno necesario para ejecutar las pruebas automatizadas.
 * Versión: 1.0
 */
export class OpenApplication {

    page: any;

    constructor(page: any) {
        this.page = page;
    }

    async perform() {

        await this.page.goto(process.env.BASE_URL!);

    }

}