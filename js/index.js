import ErrorMessageController from './controllers/ErrorMessageController.js'
import AdListController from './controllers/AdListController.js'

window.addEventListener('DOMContentLoaded', function () {

    // controlador de mensajes de error
    const errorDiv = document.querySelector('.error-message')
    const errorMessageController = new ErrorMessageController(errorDiv)

    // coger el elemento del DOM (HTML) donde quiero cargar los ads
    const adListDiv = document.querySelector('.ad-list')

    // crear un controlador pasándole el elemento del DOM donde cargar los ads
    const adListController = new AdListController(adListDiv, errorMessageController)

    // decir al controlador que pinte los ads
    adListController.renderAds()

    adListController.showCreateButton()

})
