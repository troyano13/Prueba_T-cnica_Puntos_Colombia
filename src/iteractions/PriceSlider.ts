/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Contiene las operaciones relacionadas con la manipulación del control deslizante de precios.
 * Versión: 1.0
 */

import { Page, expect } from "@playwright/test";


export class PriceSlider {

    constructor(private readonly page: Page) {}

    /**
     * Selecciona el precio indicado.
     * @param value Precio deseado.
     */
    async setPrice(value: number): Promise<void> {

        const slider = this.page.locator(
            "[data-react-toolbox='progress-bar']"
        );

        await expect(slider).toBeVisible();

        const box = await slider.boundingBox();

        if (!box) {
            throw new Error("No fue posible obtener el tamaño del slider.");
        }

        const min = Number(await slider.getAttribute("aria-valuemin"));
        const max = Number(await slider.getAttribute("aria-valuemax"));

        const percentage = (value - min) / (max - min);

        const x = box.x + (box.width * percentage);
        const y = box.y + (box.height / 2);

        await this.page.mouse.move(box.x + 2, y);
        await this.page.mouse.down();

        await this.page.mouse.move(x, y, {
            steps: 20
        });

        await this.page.mouse.up();

        // Verificar el valor seleccionado
        await expect(slider).toHaveAttribute(
            "aria-valuenow",
            value.toString()
        );
    }
}