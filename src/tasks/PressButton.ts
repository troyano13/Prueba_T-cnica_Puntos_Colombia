/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Ejecuta la acción de presionar un botón identificado por su nombre visible en la interfaz.
 * Versión: 1.0
 */

import { Page, expect } from "@playwright/test";
import { ButtonsUI } from "../ui_interface/ButtonsUI";

export class PressButton {

    constructor(private readonly page: Page) { }

    async perform(buttonName: string): Promise<void> {

        const button = this.page.getByRole(
            "button",
            ButtonsUI.byName(buttonName)
        );

        await button.scrollIntoViewIfNeeded();

        await expect(button).toBeVisible();

        await button.click();

    }

}