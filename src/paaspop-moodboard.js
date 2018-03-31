import { PolymerElement } from '@polymer/polymer/polymer-element.js'

export class PaaspopMoodBoard extends PolymerElement {
  static get template(){
      return `
        <style>
        .container { width:100vw;height:100vh;display:flex;align-items:center;justify-content:flex-start;flex-flow:column;}
        h1 { font-size:40px;margin-bottom:30px;background-color:rgba(0,0,0, 0.5);color:white;}
        .container[level="1"] { background:url('/img/bg-website-green.jpg')}
        .container[level="2"] { background:url('/img/bg-website-yellow.jpg')}
        .container[level="3"] { background:url('/img/bg-website-red.jpg')}
        .emoji { width:60vw;height:60vh;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center; }
        .emoji[level="1"] { background-image:url('/img/emoji/smiling.png')}
        .emoji[level="2"] { background-image:url('/img/emoji/crowd.png')}
        .emoji[level="3"] { background-image:url('/img/emoji/nervous.png')}
        </style>
        <div class="container" level$="[[mood.level]]">
            <h1>NOW PLAYING: [[mood.artist]] </h1>
            <div class="emoji" level$="[[mood.level]]"></div>

            [[mood.arrow]]
        <div>`
  }
  static get properties(){
      return {
          mood: { type:Object }
      }
  }

}

customElements.define('paaspop-moodboard', PaaspopMoodBoard); 


