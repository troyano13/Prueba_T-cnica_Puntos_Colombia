/*
 * Clase User (Actor)
 * Autor: Alexandra Tr.
 * Fecha: 2024-11-28
 * Descripción: Representa a un usuario que realiza tareas en la aplicación.
 */

class User {
  constructor(page) {
    if (!page) {
      throw new Error('Page instance is required for User');
    }
    this.page = page; // Instancia de Playwright para interactuar con la página
  }

  /**
   * Intenta realizar una tarea proporcionada.
   * @param {Function} task - La tarea que el usuario intentará realizar.
   */
  async attemptsTo(task) {
    await task(); // Ejecuta la tarea proporcionada
  }
}

module.exports = User;
