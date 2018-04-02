import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';


export class PaaspopCamera extends GestureEventListeners(PolymerElement) {
    static get template() {
        return `
            <style>
            .selected { background-color:pink}
            </style>
            <h2 class$="[[_isSelected(selectedcam)]]" on-tap="_selectCam">[[cam.camid]]</h2>
           <paper-button on-tap="_closeExit">Close Exit</paper-button>
           <paper-button on-tap="_openExit">Open Exit</paper-button>
           <paper-button on-tap="_arrowLeft">Arrow Left</paper-button>
           <paper-button on-tap="_arrowRight">Arrow Right</paper-button>
        `;
    }


    static get properties() {
        return {
            cam : { type:Object, value:{} },
            selectedcam : { type:Object }
           
        }
    }

    _isSelected(sel){
        return this.cam == sel ? "selected" : "";
    }

    _selectCam(e) {
        this.dispatchEvent(new CustomEvent("select-cam", { detail: this.cam, bubbles:true, composed:true}));
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