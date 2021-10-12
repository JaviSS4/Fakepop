import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class AdFormController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                const data = new FormData(this.element)
                const name = data.get('name')
                const price = parseFloat(data.get('price'))
                const status = data.get('buy_sell')
                try {
                    const result = await DataService.createAd(name, price, status)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, '¡Anuncio creado!')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }

}
