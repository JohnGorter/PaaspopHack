import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';

export class PaaspopControl extends PolymerElement {
    static get template() {
        return `
            <style>
                .container {}
            </style>
            <div class="container">
                <template is="dom-repeat" items="{{cams}}">
                    <paaspop-camera selectedcam="[[selectedcam]]" cam="{{item}}"></paaspop-camera>
                </template>
            </div>
        `;
    }


    static get properties() {
        return {
            cams: { type:Array, value:[] },
            selectedcam: { type:Object }
        }
    }

  
}


customElements.define('paaspop-control', PaaspopControl); 