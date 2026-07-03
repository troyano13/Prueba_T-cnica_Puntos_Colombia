# Arquitetura ScreenPlay para automatizacion de ETC Parking WebUI  

## Descripción
Este proyecto contiene pruebas automatizadas utilizando Cucumber.js y Playwright/JS bajo una arquitectura modular para validar la funcionalidad de la aplicación web.

## Incluye:

Cucumber.js para pruebas BDD.
Playwright libreria para automatizacion
Allure como generador de reportes visuales.


## Requirementos
Antes de comenzar, asegúrese de tener Node.js y npm instalados. Puede descargarlos desde el sitio web oficial de Node.js.


## Estrucutra del proyecto
El proyecto sigue la arquitectura Screenplay y se estructura de la siguiente manera:

```bash
ETC-PARKING-WEBUI
├── node_modules                # Dependencias instaladas por npm
├── src
│   ├── actor                   # Definición de actores para Screenplay
│   │   ├── actor.js
│   ├── features                # Escenarios escritos en Gherkin
│   │   ├── login
│   │   │   ├── login_general.feature
│   ├── interactions            # Interacciones con la UI
│   │   ├── example_interaction.js
│   ├── model                   # datos del negocio
│   │   ├── example_data.js
│   ├── questions               # Validaciones o aserciones
│   │   ├── example_question.js
│   ├── reports                 # Archivos relacionados con reportes
│   │   ├── allure-results      # Resultados de Allure
│   ├── resources               # Recursos estáticos o configuraciones adicionales
│   │   ├── example_resource.js
│   ├── services                # pruebas a servicios
│   │   ├── example_service.js
│   ├── step_definitions        # Definiciones de pasos para los escenarios .step
│   │   ├── login
│   │   │   ├── login.steps.js
│   ├── support                 # Archivos relacionados con soporte de la autoamtizacion
│   │   ├── hooks.js            # Gestion acciones antes y despues de la automatizacion
│   │   ├── words.js            # Contexto global para integracion de la automatizaciones
│   ├── tasks                   # Tareas a realizar deben ir presedidas de to_
│   │   ├── login
│   │   │   ├── to_do_example.js
│   ├── ui_interface            # Localizadores en el Dom deben finalizar en _page
│   │   ├── login
│   │   │   ├── example_page.js
│   ├── utils                   # Funciones y herramientas reutilizables
│   │   ├── exampleUtils.js
├── test                        # Pruebas unitarias u otros tipos de pruebas adicionales
│   ├── exampleTest.js
├── test.conf.js                # Configuración principal de herramientas usada en automatizacion
package-lock.json               # Información sobre la instalación de dependencias
package.json                    # Dependecias del proyecto
README.md                       # Informacion general del proyecto 

```


##  Instalación y requisitos

## Comprueba que Node están instalados ejecutando:
```bash
node -v
npm -v
```
## Clonar Repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd AUTOMATIONEXERCISEBBD
```

## Instalar dependencias:
```bash
npm install
```

## Run escenarios o .feature:
```bash
npx cucumber-js \
--require-module ts-node/register \
--require src/step_definitions/**/*.ts \
--require src/support/world.ts \
--require src/support/hooks.ts \
--format json:report.json \
--format allure-cucumberjs/reporter \
--format-options '{"resultsDir":"allure-results"}' \
src/features/general/booking.feature

```
```bash
```

## Run en paralelo
```bash
npx cucumber-js \
--parallel 2 \
--require-module ts-node/register \
--require src/step_definitions/**/*.ts \
--require src/support/world.ts \
--require src/support/hooks.ts \
--format json:report.json \
--format allure-cucumberjs/reporter \
--format-options '{"resultsDir":"allure-results"}' \
--tags "@critical" \
src/features/**/*.feature

```
```bash
```


## Run con tags
```bash

npx cucumber-js \
  --require-module ts-node/register \
  --require "src/step_definitions/**/*.ts" \
  --require "src/support/world.ts" \
  --require "src/support/hooks.ts" \
  --format summary \
  --format allure-cucumberjs/reporter \
  --format-options '{"resultsDir":"allure-results"}' \
  --tags "@critical" \
  "src/features/**/*.feature"s


```
```bash
o
```

## Run dry Run Playwright
```bash
npx playwright test --ui

```

## Instalar dependencias reporte global:
```bash
npm install -g allure-commandline
```

## Generar Reporte:
```bash
npx allure generate allure-results --clean -o allure-report
```

## Abrir Reporte HTML:
```bash
npx allure open allure-report

```
```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## Navegador interativo Playwright
```bash
npx playwright codegen tuPaginaWeb.com
```

## verificar instalacion Java para reporte:
```bash
java -version
```bash
o
```
```bash
echo $JAVA_HOME
```
## IMPORTANTE!!! Se requiere tener el archivo .env con las variables en root del proyecto para ejecucion exitosa

# example .env 

```bash
##############################################
# BASE URL
##############################################
BASE_URL=https://demo.example/
##############################################


```
