/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Diligencia el formulario de reserva con la información del cliente y realiza la carga del archivo requerido.
 * Versión: 1.0
 */

import { expect, Page } from "@playwright/test";
import path from "path";
import { BookingFormUI } from "../ui_interface/BookingFormUI";

export class CompleteBookingForm {

    constructor(private readonly page: Page) { }

    async perform(data: any): Promise<void> {

        await this.fillField(
            BookingFormUI.NAME,
            data.name
        );

        await this.fillField(
            BookingFormUI.EMAIL,
            data.email
        );

        await this.fillField(
            BookingFormUI.SSN,
            data.ssn
        );

        await this.fillField(
            BookingFormUI.PHONE,
            data.phone
        );

        // salir completamente del formulario para disparar blur/change
        await this.page.keyboard.press("Tab");
        await this.page.keyboard.press("Tab");

        // esperar a que React procese las validaciones
        await this.page.waitForTimeout(500);

        // Upload

        const fileInput = this.page.locator(
            BookingFormUI.FILE_INPUT
        );

        await expect(fileInput).toBeAttached();

        await fileInput.setInputFiles(
            path.resolve(data.file)
        );

        console.log("Formulario diligenciado correctamente.");
    }

    private async fillField(
        label: string,
        value: string
    ): Promise<void> {

        const input = this.page
            .locator(BookingFormUI.INPUT_CONTAINER)
            .filter({
                hasText: label
            })
            .locator("input");

        await expect(input).toBeVisible();

        await input.click();

        await input.clear();

        await input.pressSequentially(
            value,
            {
                delay: 50
            }
        );

        await expect(input).toHaveValue(value);

        await input.dispatchEvent("input");

        await input.dispatchEvent("change");

        await input.blur();

        console.log(
            `${label}: ${await input.inputValue()}`
        );
    }

}