import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';


export class PaaspopCamera extends GestureEventListeners(PolymerElement) {
    static get template() {
        return `
            <style>
            .selected { background-color:pink}
            </style>
            <div style="padding:20px;">
                <h2 class$="[[_isSelected(selectedcam)]]" on-tap="_selectCam">[[cam.camid]]</h2>
            <paper-button on-tap="_closeExit">Close Exit</paper-button>
            <paper-button on-tap="_openExit">Open Exit</paper-button>
            <paper-button on-tap="_emergencyExit">Emergency Exit</paper-button>
            <paper-button on-tap="_medicsNeeded">Medics needed</paper-button>
            <paper-button on-tap="_securityNeeded">Security needed</paper-button>
            <paper-button on-tap="_arrowLeft">Arrow Left</paper-button>
            <paper-button on-tap="_arrowRight">Arrow Right</paper-button>
            <paper-button on-tap="_happyHour">Happy hour</paper-button>
            <paper-button on-tap="_winner">Winner</paper-button>
            <paper-button on-tap="_thanks">Thanks</paper-button>
            <paper-input label="message" value="{{message}}"></paper-input>
           </div>
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

    _selectCam(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("select-cam", { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

    _openExit(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('open-exit', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

    _closeExit(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('close-exit', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

    _emergencyExit(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('emergency-exit', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

    _medicsNeeded(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('medics-needed', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

     _securityNeeded(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('security-needed', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

     _thanks(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('thanks', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

     _winner(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('winner', { detail: { ...this.cam, override_message:this.message || "WE HAVE A WINNER!!.....................10000TH VISITOR!!           .........................COME AND GET YOUR FREE BEER!"}, bubbles:true, composed:true}));
    }

    _arrowLeft(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('arrow-left', { detail: { ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

    _arrowRight(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('arrow-right', { detail: { ...this.cam, override_message:this.message || ""} , bubbles:true, composed:true}));
    }

    _happyHour(e){
        e.preventDefault();
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('happy-hour', { detail:{ ...this.cam, override_message:this.message || ""}, bubbles:true, composed:true}));
    }

}


customElements.define('paaspop-camera', PaaspopCamera); 