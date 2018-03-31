import { PolymerElement } from '@polymer/polymer/polymer-element.js'
import './paaspop-includes.js' 


export class PaaspopApp extends PolymerElement {
    static get template() {
        return `
            <paaspop-moodboard act="[[currentact]]" mood="[[mood]]"></paaspop-moodboard>
            <paaspop-moodsource last-response="{{mood}}" camid="cam05"></paaspop-moodsource>
            <paaspop-moodschedule localschedule="{{currentact}}" location="apollo"></paaspop-moodschedule>
        `
    }

    static get properties(){
        return {  
            message: { type:String, value:'hello world'}  }
    }
}

customElements.define('paaspop-app', PaaspopApp); 

