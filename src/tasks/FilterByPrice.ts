/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Ajusta el control deslizante para filtrar los destinos por un precio máximo parametrizado.
 * Versión: 1.0
 */
import { Page, expect } from "@playwright/test";

export class FilterByPrice {

    constructor(private page: Page) {}

    async perform(price: number): Promise<void> {

        const MIN = 100;
        const MAX = 1800;

        const track = this.page.locator(".theme__progress___xkm0P");
        await expect(track).toBeVisible();

        const box = await track.boundingBox();

        if (!box) {
            throw new Error("No se encontró el slider.");
        }

        const percentage = (price - MIN) / (MAX - MIN);

        let x = box.x + (box.width * percentage);
        const y = box.y + (box.height / 2);

        // Primer click
        await this.page.mouse.click(x, y);
        await this.page.waitForTimeout(150);

        let current = Number(
            await this.page
                .locator("[data-react-toolbox='progress-bar']")
                .getAttribute("aria-valuenow")
        );

        console.log(`Inicial -> ${current}`);

        // Ajuste fino (máximo 15 intentos)
        let attempts = 0;

        while (current !== price && attempts < 15) {

            if (current < price) {
                x += 1;
            } else {
                x -= 1;
            }

            await this.page.mouse.click(x, y);
            await this.page.waitForTimeout(80);

            current = Number(
                await this.page
                    .locator("[data-react-toolbox='progress-bar']")
                    .getAttribute("aria-valuenow")
            );

            console.log(`Intento ${attempts + 1}: ${current}`);

            attempts++;
        }

        expect(current).toBe(price);
    }
}