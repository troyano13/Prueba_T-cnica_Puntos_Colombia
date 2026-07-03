# Reporte de Bugs

## Prueba Técnica Automatizador Web Senior

**Proyecto:** Demo Testim Booking

**Aplicación:** https://demo.testim.io/

**Fecha:** 2026-07-03

**Autor:** Alexandra Tr.

---

# BUG-001

## Título

El botón "Play Now" aparece habilitado, pero no ejecuta ninguna acción al hacer clic.

---

## Prioridad

Alta

---

## Severidad

Alta

---

## Ambiente

Chrome

Playwright

https://demo.testim.io/

---

## Precondiciones

Completar correctamente el formulario previo para habilitar el botón.

---

## Pasos para reproducir

1. Abrir la aplicación.
2. Completar todos los campos requeridos.
3. Esperar que el botón "Play Now" quede habilitado.
4. Hacer clic sobre el botón.

---

## Resultado esperado

El sistema debe ejecutar la acción correspondiente y continuar con el flujo.

---

## Resultado actual

El botón se encuentra habilitado visualmente pero no ejecuta ningún evento ni realiza navegación alguna.

---

## Evidencia

Adjunta.
/Prueba_T-cnica_Puntos_Colombia/src/resources/bug.png

---

# BUG-002

## Título

El botón "Pay Now" permanece deshabilitado después de completar correctamente toda la información requerida.

---

## Prioridad

Crítica

---

## Severidad

Crítica

---

## Ambiente

Chrome

Playwright

https://demo.testim.io/

---

## Precondiciones

Completar correctamente:

- Nombre
- Email
- Social Security Number
- Phone Number
- Archivo
- Código promocional
- Aceptar términos y condiciones

---

## Pasos para reproducir

1. Abrir la aplicación.
2. Buscar un destino.
3. Seleccionar un destino.
4. Completar correctamente el formulario.
5. Cargar el archivo solicitado.
6. Aplicar un código promocional válido.
7. Aceptar términos y condiciones.
8. Intentar presionar el boton "Pay now".


---

## Resultado esperado

El botón "Pay Now" debe habilitarse para permitir finalizar la reserva.

---

## Resultado actual

El botón permanece deshabilitado impidiendo continuar con el flujo de compra.

---

## Impacto

No es posible finalizar el flujo principal de negocio.

La validación final:

Destination Booked

no puede ejecutarse debido a este comportamiento.

---

## Observaciones

Durante las pruebas manuales se evidenció que el comportamiento es inconsistente. En algunos casos el botón se habilita, mientras que durante la ejecución automatizada permanece deshabilitado aun cuando todos los campos contienen información válida.

Se recomienda revisar los eventos JavaScript asociados a la validación del formulario y a la actualización del estado del botón "Pay Now".

---

# Conclusión

La automatización implementa correctamente el flujo solicitado hasta el paso de confirmación del pago. La validación final no puede completarse debido a un comportamiento observado en la aplicación, el cual fue documentado como incidencia y no corresponde a un defecto de la automatización.