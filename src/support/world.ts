/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Define el contexto compartido (Custom World) utilizado durante la ejecución de los escenarios de Cucumber.
 * Versión: 1.0
 */

import { setWorldConstructor } from "@cucumber/cucumber";
import { chromium, Browser,BrowserContext, Page } from "playwright";

let browser: Browser;

export class CustomWorld {

    page!: Page;
    context!: BrowserContext;

    async open() {
        if (!browser) {
            browser = await chromium.launch({
                headless: false
            });
        }
        this.page = await browser.newPage();
    }


    async close() {

        if (this.page) {

            await this.page.close();

        }

        if (this.context) {

            await this.context.close();

        }

    }
}
setWorldConstructor(CustomWorld);