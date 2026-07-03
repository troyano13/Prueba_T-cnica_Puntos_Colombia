/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Selecciona un destino disponible dentro del listado de opciones durante el proceso de reserva.
 * Versión: 1.0
 */
import { Page, expect } from "@playwright/test";

export class SelectDestination {

    constructor(private readonly page: Page) {}

    async perform(destination: string): Promise<void> {

        //-------------------------------------------------------
        // Cerrar calendario si continúa abierto
        //-------------------------------------------------------

        const calendar = this.page.locator("[data-react-toolbox='calendar']");

        if (await calendar.isVisible().catch(() => false)) {

            console.log("Calendario abierto");

            const okButton = this.page.getByRole("button", {
                name: /^OK$/i
            });

            if (await okButton.count() > 0) {

                console.log("Botón OK encontrado");

                await okButton.first().click();

                await calendar.waitFor({
                    state: "hidden",
                    timeout: 10000
                });

                console.log("Calendario cerrado");
            }
            else {

                console.log("No existe botón OK. Cerrando con Escape");

                await this.page.keyboard.press("Escape");

                await calendar.waitFor({
                    state: "hidden",
                    timeout: 5000
                }).catch(() => {});
            }
        }

        //-------------------------------------------------------
        // Abrir dropdown Launch
        //-------------------------------------------------------

        const launchDropdown = this.page
            .locator("[data-react-toolbox='dropdown']")
            .nth(2);

        await expect(launchDropdown).toBeVisible();

        await launchDropdown.click();

        //-------------------------------------------------------
        // Seleccionar destino
        //-------------------------------------------------------

        const option = launchDropdown
            .locator("li")
            .filter({
                hasText: destination
            });

        await expect(option).toBeVisible({
            timeout: 10000
        });

        await option.click();

        console.log(`Destino seleccionado: ${destination}`);
    }
}