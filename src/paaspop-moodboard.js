import { PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'

export class PaaspopMoodBoard extends PolymerElement {
  static get template(){
      return `[[mood]]`
  }
  static get properties(){
      return {
          mood: { type:String, value:'sad'}
      }
  }

}

customElements.define('paaspop-moodboard', PaaspopMoodBoard); 


