# Casos de Prueba
## Prueba Técnica Automatizador Web Senior

**Proyecto:** Demo Testim Booking
**Aplicación:** https://demo.testim.io/
**Framework:** Playwright + TypeScript + Cucumber + Screenplay
**Autor:** Alexandra Tr.
**Fecha:** 2026-07-03

---

# Casos Automatizados**********

## TC-001 - Reservar un destino exitosamente

### Prioridad
Alta

### Tipo
Ruta crítica

### Precondiciones

- La aplicación se encuentra disponible.
- Existe al menos un destino disponible.
- El usuario ingresa datos válidos.

### Datos de prueba

| Campo | Valor |
|--------|-------|
| Departure | Parametrizado |
| Return | Parametrizado |
| Adults | Parametrizado |
| Children | Parametrizado |
| Price | Parametrizado |
| Destination | Parametrizado |
| Promo Code | Parametrizado |

### Pasos

1. Abrir la aplicación.
2. Seleccionar fecha de salida.
3. Seleccionar fecha de regreso.
4. Seleccionar adultos.
5. Seleccionar niños.
6. Presionar Select Destination.
7. Presionar Load More.
8. Filtrar precio.
9. Seleccionar destino.
10. Completar formulario.
11. Cargar archivo.
12. Aplicar código promocional.
13. Aceptar términos.
14. Presionar Pay Now.

### Resultado esperado

El sistema debería mostrar:

Destination Booked

### Estado

Automatizado

---

## TC-002 - Reservar un segundo destino

### Prioridad

Alta

### Tipo

Ruta crítica

### Objetivo

Validar que el flujo funciona con diferentes datos parametrizados.

### Estado

Automatizado

---

# Casos No Automatizados

## TC-003 - Email inválido

### Objetivo

Validar formato de correo electrónico.

### Resultado esperado

Debe mostrar mensaje de error.

---

## TC-004 - SSN inválido

### Objetivo

Validar número de seguridad social.

### Resultado esperado

No permitir continuar.

---

## TC-005 - Teléfono sin prefijo +1787

### Objetivo

Validar regla del negocio.

### Resultado esperado

Debe impedir el pago.

---

## TC-006 - Código promocional inválido

### Resultado esperado

Mostrar mensaje de error.

---

## TC-007 - No aceptar términos

### Resultado esperado

El botón Pay Now debe permanecer deshabilitado.

---

## TC-008 - No cargar archivo

### Resultado esperado

Validar comportamiento esperado del sistema.

---

## TC-009 - Archivo no permitido

### Resultado esperado

Mostrar mensaje de archivo inválido.

---

## TC-010 - Precio sin resultados

### Resultado esperado

Mostrar mensaje:

No destinations found

---

## TC-011 - Destino inexistente

### Resultado esperado

No permitir continuar.

---

## TC-012 - Fecha de regreso menor a salida

### Resultado esperado

Mostrar mensaje de validación.

---

## TC-013 - Todos los campos vacíos

### Resultado esperado

Mostrar validaciones obligatorias.

---

## Cobertura

| Funcionalidad | Cobertura |
|---------------|-----------|
| Selección de fechas | ✔ |
| Selección de viajeros | ✔ |
| Selección destino | ✔ |
| Filtro precio | ✔ |
| Formulario | ✔ |
| Upload | ✔ |
| Promo Code | ✔ |
| Términos | ✔ |
| Pago | Parcial (Bug encontrado) |