import { PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'
import './paaspop-includes.js' 

export class PaaspopApp extends PolymerElement {
    static get template() {
        return `
            <paaspop-moodboard mood="[[mood]]"></paaspop-moodboard>
            <paaspop-moodsource last-response="{{mood}}"></paaspop-moodsource>
        `
    }

    static get properties(){
        return {
            message: { type:String, value:'hello world'}
        }
    }

    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
        console.log('connectedCallback');
    }
}

customElements.define('paaspop-app', PaaspopApp); 

