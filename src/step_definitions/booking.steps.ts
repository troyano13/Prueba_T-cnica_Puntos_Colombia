/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Implementa las definiciones de pasos (Step Definitions) del flujo de reserva utilizando Cucumber y Playwright.
 * Versión: 1.0
 */

import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { SearchTrip } from "../tasks/SearchTrip";
import { FilterByPrice } from "../tasks/FilterByPrice";
import { SelectDestination } from "../tasks/SelectDestination";
import { CompleteBookingForm } from "../tasks/CompleteBookingForm";
import { ApplyPromoCode } from "../tasks/ApplyPromoCode";
import { AcceptTerms } from "../tasks/AcceptTerms";
import { ConfirmPayment } from "../tasks/ConfirmPayment";
import { PressButton } from "../tasks/PressButton";
import dotenv from "dotenv";



Given("the traveler opens the application", { timeout: 80000 }, async function (this: CustomWorld) {
    await this.open();
    await this.page.goto(process.env.BASE_URL!);
}
);


When("the traveler searches a trip with", { timeout: 80000 }, async function (this: CustomWorld, table: DataTable) {

    const data = table.rowsHash();
    const task = new SearchTrip(this.page);

    await task.perform({

        departure: data.departure,
        return: data.return,
        adults: Number(data.adults),
        children: Number(data.children)
    });
}
);


When("filters destinations by maximum price {string}", { timeout: 80000 }, async function (this: CustomWorld, price: string) {
    const task = new FilterByPrice(this.page);
    await task.perform(Number(price));
}

);


When("chooses destination {string}", { timeout: 80000 }, async function (this: CustomWorld, destination: string) {
    const task = new SelectDestination(this.page);
    await task.perform(destination);
}
);


When("traveler presses the button {string}", async function (button: string) {
    const task = new PressButton(this.page);
    await task.perform(button);
}
);


When("completes the booking form with", async function (table) {
    const data = table.rowsHash();
    const booking = new CompleteBookingForm(this.page);
    await booking.perform(data);
}
);


When("applies promo code {string}", { timeout: 80000 }, async function (this: CustomWorld, promo: string) {
    const task = new ApplyPromoCode(this.page);
    await task.perform(promo);
}
);


When("accepts the terms", { timeout: 80000 }, async function (this: CustomWorld) {
    const task = new AcceptTerms(this.page);
    await task.perform();
}
);


When("confirms payment", { timeout: 80000 }, async function (this: CustomWorld) {
    const task = new ConfirmPayment(this.page);
    await task.perform();
}
);


Then("the booking should be completed", { timeout: 80000 }, async function (this: CustomWorld) {
    await expect(this.page.getByText("Destination Booked")).toBeVisible();
}
);