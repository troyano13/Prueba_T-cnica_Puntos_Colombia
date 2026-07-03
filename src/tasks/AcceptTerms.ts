/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Acepta los términos y condiciones requeridos para habilitar el proceso de pago.
 * Versión: 1.0
 */

import { Page, expect } from "@playwright/test";
import { AcceptTermsUI } from "../ui_interface/AcceptTermsUI";

export class AcceptTerms {

    constructor(private readonly page: Page) { }

    async perform(): Promise<void> {

        const label = this.page.locator(
            AcceptTermsUI.LABEL
        );

        await expect(label).toBeVisible();

        await label.scrollIntoViewIfNeeded();

        await label.click();

        await expect(
            this.page.locator(
                AcceptTermsUI.CHECKBOX
            )
        ).toBeChecked();

        console.log("Terms accepted.");
    }

}