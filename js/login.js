import LoginController from "./controllers/LoginController.js"
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', function(){

    // 1. Seleccionamos el nodo del formulario
    const form = document.querySelector('form')

    // 2. Crear una instancia del controlador con el formulario
    new LoginController(form)

    // 3. Seleccionamos el nodo para mostrar mensajes de error
    const messages = document.querySelector('.error-message')

    // 4. Crear una instancia de ErrorMessageController
    new MessageController(messages)

})
