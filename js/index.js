import ErrorMessageController from './controllers/ErrorMessageController.js'
import AdListController from './controllers/AdListController.js'

window.addEventListener('DOMContentLoaded', function () {

    const errorDiv = document.querySelector('.error-message')
    const errorMessageController = new ErrorMessageController(errorDiv)

    const adListDiv = document.querySelector('.ad-list')

    const adListController = new AdListController(adListDiv, errorMessageController)

    adListController.renderAds()

    adListController.showCreateButton()

})
