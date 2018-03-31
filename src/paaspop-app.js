import { PolymerElement } from '@polymer/polymer/polymer-element.js'
import './paaspop-includes.js' 


export class PaaspopApp extends PolymerElement {
    static get template() {
        return `
            <paaspop-moodboard mood="[[mood]]"></paaspop-moodboard>
            <paaspop-moodsource last-response="{{mood}}" camid="cam05"></paaspop-moodsource>
        `
    }

    static get properties(){
        return {  
            message: { type:String, value:'hello world'}  }
    }
}

customElements.define('paaspop-app', PaaspopApp); 

