/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-01
 * Descripción: Configuración centralizada para Playwright, Cucumber y ESLint
 * Versión: 2.0
 */

import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import globals from "globals";
import js from "@eslint/js";

dotenv.config();

console.log("URL:", process.env.BASE_URL);

//==================================================
// CONFIG GENERAL
//==================================================

const config = {

  env: {

    BASE_URL: process.env.BASE_URL,
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD

  },

  allure: {
    resultsDir: "allure-results"
  }

};

//==================================================
// CUCUMBER
//==================================================

const cucumberConfig = {
  paths: [
    "src/features/**/*.feature"
  ],
  requireModule: [
    "ts-node/register"
  ],

  require: [
    "src/step_definitions/*.ts",
    "src/support/world.ts",
    "src/support/hooks.ts"

  ],

  language: "en",
  defaultTimeout: 60 * 1000,
  publishQuiet: true,
  parallel: 2,
  format: [
    "summary",
    "progress-bar",
    "allure-cucumberjs/reporter"
  ],

  formatOptions: {
    resultsDir: "allure-results"
  },
  tags: "@critical"
};

//==================================================
// PLAYWRIGHT
//==================================================

const playwrightConfig = defineConfig({
  timeout: 70000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["html"],
    ["list"]
  ],

  use: {

    baseURL: process.env.BASE_URL,
    headless: process.env.CI ? true : false,
    trace: process.env.CI
      ? "retain-on-failure"
      : "on-first-retry",

    screenshot: "only-on-failure",
    video: "retain-on-failure"

  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"]
      }
    }
  ]
});

//==================================================
// ESLINT
//==================================================

const eslintConfig = [

  {

    files: [
      "**/*.ts"
    ],

    languageOptions: {
      sourceType: "module",
      globals: globals.node

    },
    rules: {
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0
        }
      ]
    }
  },

  js.configs.recommended

];

//==================================================

export {

  config,

  cucumberConfig,

  playwrightConfig,

  eslintConfig

};