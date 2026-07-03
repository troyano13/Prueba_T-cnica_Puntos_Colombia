/*
 * Autor: Alexandra Tr.
 * Fecha: 2026-07-03
 * Descripción: Ejecuta acciones de configuración y limpieza antes y después de cada escenario de prueba.
 * Versión: 1.0
 */

import {Before,After} from "@cucumber/cucumber";
import dotenv from "dotenv";

dotenv.config();

Before({ timeout: 80000 },async function(){

await this.open();


});

After({ timeout: 80000 },async function(){

await this.close();

});