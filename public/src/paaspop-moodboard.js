import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'

export class PaaspopMoodBoard extends PolymerElement {
  static get template(){
      return `
        <style>
        .container { width:100vw;height:100vh;display:flex;align-items:center;justify-content:flex-start;flex-flow:column;}
        .score { background-color:rgba(0,0,0, 0.5);color:white;text-align:center;padding-left:20px;padding-right:20px;border-radius:10px;margin-top:10px; } 
        h1 { font-size:40px;margin-bottom:30px;}
        h2 { margin-top:-20px;font-size:32px;margin-bottom:30px;}
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
        .override { scroll:none;position:absolute;top:0px;background-color:white;display:flex;align-items:center;justify-content:center;height:90vh;width:95vw;border:0px solid black;}
        .override_container { display:flex }
        .override_emoji { width:60vw; height:60vh;}
        </style>
        <template is="dom-if" if="cam">
        <template is="dom-if" if="[[override]]">
            <div class="override" >
                <div class="override_container">
                    <img class="override_emoji" src$="/img/emoji/[[_getEmoji(cam.override_emoji)]]"></img>
                </div>
            </div>
            </template>
            <template is="dom-if" if="[[!override]]">  
            <div class="container" level$="[[cam.level]]">  
                <div class="score">
                    <h1>[[act.artist]] is now playing</h1>
                    <h2>[[timeremaining]] minutes remaining</h2>
                </div>
                <div class="emoji" level$="[[cam.level]]"></div>

                [[cam.arrow]]
               <div>
            </div>
            </template>
        </template>
        `
  }
  static get properties(){
      return {
          cam: { type:Object, observer:'_changeOverride'},
          act: { type:Object, observer:'_setTimeRemaining'},
          override: { type:Boolean, value:false },
          timeremaining: { type:Number }
      }
  }

  connectedCallback() {
      super.connectedCallback(); 

      var location = "apollo";
      var time = new Date(); 


  }

  _getEmoji(img){
      if (img) return img;
      return "cross.png";
  }
  _changeOverride(cam) {
      if (cam && cam.override){
            this.override = true;
      } else {
        this.override = false;
      }
  }

  _setTimeRemaining(){
      let ms = new Date(this.act.enddate) - new Date(new Date().setHours(19));
      this.timeremaining = Math.round(((ms % 86400000) % 3600000) / 60000); // minutes
  }

}

customElements.define('paaspop-moodboard', PaaspopMoodBoard); 


