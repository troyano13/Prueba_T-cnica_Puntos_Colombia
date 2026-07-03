/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Realiza la búsqueda de viajes parametrizando fechas de salida,
 * regreso y número de viajeros.
 * Versión: 1.0
 */

import { expect, Locator, Page } from "@playwright/test";
import { DatePicker } from "../iteractions/DatePicker";
import { SearchTripUI } from "../ui_interface/SearchTripUI";

export class SearchTrip {

        constructor(
                private readonly page: Page
        ) { }

        async perform(data: any): Promise<void> {

                const calendar = new DatePicker(this.page);

                // Departure
                await calendar.selectDate(
                        SearchTripUI.DEPARTING,
                        data.departure
                );

                // Return
                await calendar.selectDate(
                        SearchTripUI.RETURNING,
                        data.return
                );

                // Cerrar calendario
                await this.closeCalendar();

                // Adults
                await this.selectDropdown(
                        SearchTripUI.adultsDropdown(this.page),
                        data.adults
                );

                // Children
                await this.selectDropdown(
                        SearchTripUI.childrenDropdown(this.page),
                        data.children
                );

        }

        /**
         * Cierra el calendario.
         */
        private async closeCalendar(): Promise<void> {

                const okButton = this.page.getByRole("button", {
                        name: /^OK$/i
                });

                if (await okButton.isVisible().catch(() => false)) {

                        await okButton.click();

                        await this.page
                                .locator("[data-react-toolbox='calendar']")
                                .waitFor({
                                        state: "hidden",
                                        timeout: 5000
                                })
                                .catch(() => { });

                }

        }

        /**
         * Selecciona una opción del dropdown.
         */
        private async selectDropdown(
                dropdown: Locator,
                value: number
        ): Promise<void> {

                await expect(dropdown).toBeVisible();

                await dropdown.scrollIntoViewIfNeeded();

                await dropdown.click();

                // Esperar que aparezca el menú visible
                const visibleOptions = this.page.locator("li:visible");

                await expect(visibleOptions.first()).toBeVisible({
                        timeout: 5000
                });

                const option = visibleOptions.filter({
                        hasText: new RegExp(`^${value}$`)
                });

                await expect(option.first()).toBeVisible({
                        timeout: 5000
                });

                await option.first().click();

        }

}