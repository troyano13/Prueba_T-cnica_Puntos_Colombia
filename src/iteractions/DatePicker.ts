/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Gestiona la interacción con los calendarios para seleccionar las fechas requeridas en la búsqueda de viajes.
 * Versión: 1.0
 */
import { Locator, Page, expect } from "@playwright/test";

export class DatePicker {

    private readonly calendar: Locator;
    private readonly nextButton: Locator;

    constructor(private readonly page: Page) {

        this.calendar = page.locator("[data-react-toolbox='calendar']");
        this.nextButton = page.locator("#right");
    }

    async selectDate(field: "Departing" | "Returning", date: string): Promise<void> {

        const target = new Date(date);

        await this.open(field);

        await this.goToMonth(target);

        await this.selectDay(target.getDate());
    }

    private async open(field: string): Promise<void> {

        await this.page
            .locator("div[data-react-toolbox='input']")
            .filter({
                has: this.page.locator("label", {
                    hasText: field
                })
            })
            .locator("input")
            .click({ force: true });

        await expect(this.calendar).toBeVisible();
    }

    private async goToMonth(target: Date): Promise<void> {

        const targetMonth =
            target.toLocaleString("en-US", { month: "long" });

        const targetYear = target.getFullYear().toString();

        for (let i = 0; i < 24; i++) {

            const titles = await this.calendar
                .locator("[data-react-toolbox='month'] .theme__title___2Ue3-")
                .allTextContents();

            console.log("Visible months:", titles);

            const found = titles.some(title =>
                title.includes(targetMonth) &&
                title.includes(targetYear)
            );

            if (found)
                return;

            await this.nextButton.click();

            await this.page.waitForTimeout(250);
        }

        throw new Error(
            `Month ${targetMonth} ${targetYear} not found`
        );
    }

    private async selectDay(day: number): Promise<void> {

        const monthPanels =
            this.calendar.locator("[data-react-toolbox='month']");

        const count = await monthPanels.count();

        for (let i = 0; i < count; i++) {

            const panel = monthPanels.nth(i);

            const candidate = panel
                .locator("[data-react-toolbox='day']")
                .filter({
                    has: this.page.locator("span", {
                        hasText: String(day)
                    })
                })
                .first();

            if (await candidate.count()) {

                await candidate.click();

                return;
            }
        }

        throw new Error(`Day ${day} not found`);
    }

}