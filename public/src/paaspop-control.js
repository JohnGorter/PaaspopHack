import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';

export class PaaspopControl extends PolymerElement {
    static get template() {
        return `
            <template is="dom-repeat" items="{{cams}}">
                <paaspop-camera cam="{{item}}"></paaspop-camera>
            </template>
        `;
    }


    static get properties() {
        return {
            cams: { type:Array, value:[] }
        }
    }
}


customElements.define('paaspop-control', PaaspopControl); 