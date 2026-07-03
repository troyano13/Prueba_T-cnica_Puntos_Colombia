/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Ingresa y aplica un código promocional durante el proceso de compra.
 * Versión: 1.0
 */

import { expect, Page } from "@playwright/test";
import { ApplyPromoUI } from "../ui_interface/ApplyPromoUI";

export class ApplyPromoCode {

    constructor(private readonly page: Page) { }

    async perform(code: string): Promise<void> {

        const promoInput = this.page.locator(
            ApplyPromoUI.PROMO_INPUT
        );

        await expect(promoInput).toBeVisible();

        await promoInput.fill(code);

        await expect(promoInput).toHaveValue(code);

        const applyButton = this.page.getByRole(
            "button",
            ApplyPromoUI.APPLY_BUTTON
        );

        await expect(applyButton).toBeEnabled();

        await applyButton.click();
    }

}