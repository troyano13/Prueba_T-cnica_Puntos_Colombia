/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Centraliza los elementos utilizados durante la búsqueda de viajes.
 * Versión: 1.0
 */

import { Page, Locator } from "@playwright/test";

export class SearchTripUI {

    static readonly DEPARTING = "Departing";

    static readonly RETURNING = "Returning";

    static adultsDropdown(page: Page): Locator {

        return page
            .locator("input[role='input']")
            .nth(2);

    }

    static childrenDropdown(page: Page): Locator {

        return page
            .locator("input[role='input']")
            .nth(3);

    }

    static dropdownOptions(page: Page): Locator {

        return page.locator("li");

    }

}