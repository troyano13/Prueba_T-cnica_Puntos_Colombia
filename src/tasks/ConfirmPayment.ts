/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Confirma el pago y valida la ejecución de la acción correspondiente al proceso de compra.
 * Versión: 1.0
 */

import { expect, Page } from "@playwright/test";
import { PaymentUI } from "../ui_interface/PaymentUI";

export class ConfirmPayment {

    constructor(
        private readonly page: Page
    ) { }

    async perform(): Promise<void> {

        const payButton = this.page.getByRole(
            "button",
            PaymentUI.PAY_NOW
        );

        await expect(payButton).toBeVisible();

        await expect(payButton).toBeEnabled();

        await payButton.click();

    }

}