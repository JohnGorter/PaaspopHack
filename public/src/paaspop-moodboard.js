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
        .emoji { width:100vw;height:100vh;transform:scale(1.1);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center; }
        .emoji[level="1"] { background-image:url('/img/quite.png')}
        .emoji[level="2"] { background-image:url('/img/medium.png')}
        .emoji[level="3"] { background-image:url('/img/busy.png')}
        .override { scroll:none;background-color:white;display:flex;flex-flow:column;align-items:center;flex:1;justify-content:center;height100vh;width:100vw;border:0px solid black;}
        .override_emoji { width:70vw; height:70vh;}
        .override_emoji[src="/img/emoji/none.png"] { display:none}
        marquee { color: white;
    font-size: 32px;
    font-weight: bold;
    font-family: digital;
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin: 30px;}
        .content { display:flex;flex-flow:column;height:100vh;width:100vw;}
        </style>
        <template is="dom-if" if="cam">
        <div class="content">
            <div style=" background-color: rgba(0,0,0,0.7);display:flex;width:100vw;height:44px;justify-content:flex-end;align-items:center;">
            <img src="/img/PP2018 Logo.png" width="100" height="30" style="margin-right:20px;">
            <img src="/img/infosupport.png" height="50" style="padding-bottom:16px;margin-right:20px;">
            </div>
            <template is="dom-if" if="[[override]]">
            <div class="override" style$="background:url(/img/[[cam.override_background]]);background-size:100% 100%">
                    <img class="override_emoji" src$="/img/emoji/[[_getEmoji(cam.override_emoji)]]"></img>
            </div>
            </template>
            <template is="dom-if" if="[[!override]]">  
            <div class="container" level$="[[cam.level]]">  
                <div class="emoji" level$="[[cam.level]]"></div>
                [[cam.id]]
                [[cam.arrow]]
               <div>
            </div>
            </template>
            <div style=" background-color: rgba(0,0,0,0.7);display:flex;width:100vw;height:44px;justify-content:flex-end;align-items:center;">
             <template is="dom-if" if="[[!override]]">  
            <marquee>[[act.artist]]Kensington is now playing, 20[[timeremaining]] minutes remaining</marquee>
            </template>
             <template is="dom-if" if="[[override]]">  
            <marquee>[[cam.override_message]]</marquee>
            </template>
            </div>
        </div>
        </template>
        `
  }
  static get properties(){
      return {
          cam: { type:Object, observer:'_changeOverride'},
          act: { type:Object, observer:'_setTimeRemaining'},
          location: { type:String },
          override: { type:Boolean, value:false },
          timeremaining: { type:Number }
      }
  }

  connectedCallback() {
      super.connectedCallback(); 
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
      let ms = new Date(this.act.enddate) - new Date(new Date().setHours(15));
      this.timeremaining = Math.round(((ms % 86400000) % 3600000) / 60000); // minutes
  }

}

customElements.define('paaspop-moodboard', PaaspopMoodBoard); 


