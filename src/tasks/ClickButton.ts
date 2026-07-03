/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Realiza el clic sobre botones parametrizados por su texto visible para reutilizar la acción en distintos escenarios.
 * Versión: 1.0
 */

import { expect, Page } from "@playwright/test";
import { ButtonsUI } from "../ui_interface/ButtonsUI";

export class ClickButton {

    constructor(private readonly page: Page) { }

    async perform(buttonText: string): Promise<void> {

        const button = this.page.getByRole(
            "button",
            ButtonsUI.byName(buttonText)
        );

        await expect(button).toBeVisible();

        await button.click();

    }

}