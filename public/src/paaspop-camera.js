import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';

export class PaaspopCamera extends PolymerElement {
    static get template() {
        return `
            <h2>[[cam.camid]]</h2>
           <paper-button on-tap="_closeExit">Close Exit</paper-button>
           <paper-button on-tap="_openExit">Open Exit</paper-button>
           <paper-button on-tap="_arrowLeft">Arrow Left</paper-button>
           <paper-button on-tap="_arrowRight">Arrow Right</paper-button>
        `;
    }


    static get properties() {
        return {
            cam : { type:Object, value:{} }

           
        }
    }

    _openExit(){
        this.dispatchEvent(new CustomEvent('open-exit', { detail: this.cam, bubbles:true, composed:true}));
    }

    _closeExit(){
        this.dispatchEvent(new CustomEvent('close-exit', { detail: this.cam, bubbles:true, composed:true}));
    }

    _arrowLeft(){
        this.dispatchEvent(new CustomEvent('arrow-left', { detail: this.cam, bubbles:true, composed:true}));
    }

    _arrowRight(){
        this.dispatchEvent(new CustomEvent('arrow-right', { detail: this.cam, bubbles:true, composed:true}));
    }

}


customElements.define('paaspop-camera', PaaspopCamera); 