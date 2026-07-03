/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Centraliza las validaciones y aserciones reutilizables empleadas durante la ejecución de las pruebas automatizadas.
 * Versión: 1.0
 */

const { expect } = require("@playwright/test");

class Assertions {
  constructor(page) {
    if (!page) {
      throw new Error("Page instance is required for Assertions");
    }
    this.page = page; // Instancia de Playwright para interactuar con la página
  }

  /**
   * Valida que un elemento representado por un selector CSS sea visible en el DOM.
   * @param {string} selector - Selector CSS del elemento.
   */
  async expectElementIsVisible(selector) {
    const locator = this.page.locator(selector);
    await expect(locator).toBeVisible({
      timeout: 5000,
    });
  }

  /**
   * Valida que el texto de un elemento coincida con el texto esperado.
   * @param {string} selector - Selector CSS del elemento.
   * @param {string} expectedText - Texto esperado.
   */
  async expectElementTextToBe(selector, expectedText) {
    const locator = this.page.locator(selector);
    await expect(locator).toHaveText(expectedText, {
      timeout: 5000,
    });
  }

  /**
   * Valida que un atributo de un elemento tenga el valor esperado.
   * @param {string} selector - Selector CSS del elemento.
   * @param {string} attribute - Nombre del atributo.
   * @param {string} expectedValue - Valor esperado del atributo.
   */
  async expectElementAttributeToBe(selector, attribute, expectedValue) {
    const locator = this.page.locator(selector);
    await expect(locator).toHaveAttribute(attribute, expectedValue, {
      timeout: 5000,
    });
  }

  /**
   * Valida que un elemento no sea visible en el DOM.
   * @param {string} selector - Selector CSS del elemento.
   */
  async expectElementIsHidden(selector) {
    const locator = this.page.locator(selector);
    await expect(locator).toBeHidden({
      timeout: 5000,
    });
  }

  /**
   * Valida que el número de elementos coincida con el esperado.
   * @param {string} selector - Selector CSS del elemento.
   * @param {number} expectedCount - Cantidad esperada de elementos.
   */
  async expectElementCountToBe(selector, expectedCount) {
    const locator = this.page.locator(selector);
    await expect(locator).toHaveCount(expectedCount, {
      timeout: 5000,
    });
  }
}

module.exports = Assertions;
