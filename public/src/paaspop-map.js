import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'

export class PaaspopMap extends PolymerElement {
  static get template(){
      return `
        <style>
        .container{ z-index:99;position:absolute;top:0px;left:0px;height:930px;width:1329px;background-image:url(img/map.png);background-size:100% 100%;border:0px solid black;}
        </style>
        <img style="z-index:99;position:absolute;right:10px;top:10px;" src="./img/PP2018 Logo.png" width="120">
        <img style="z-index:99;position:absolute;right:10px;top:60px;" src="./img/info.png" width="120">
        <div class="container">
            <template is="dom-repeat" items="[[cams]]">
                <div style$="[[_getStyle(item)]]">
                    <paaspop-moodboard small cam="[[item]]"> </paaspop-moodboard>
                </div>
            </template>
        </div>
        `
  }
  static get properties(){
      return {
          cams:{type:Array, value:[]}
      }
  }

  _getStyle(item){
      if (item.camid == "cam02"){
          return 'position:absolute;display:inline;left:160px;top:300px;';
      }
      if (item.camid == "cam03"){
          return 'position:absolute;display:inline;left:160px;top:370px;';
      }
      if (item.camid == "cam04"){
          return 'position:absolute;display:inline;left:160px;top:440px;';
      }
      if (item.camid == "cam05"){
          return 'position:absolute;display:inline;left:130px;top:510px;';
      }
      if (item.camid == "cam06"){
          return 'position:absolute;display:inline;left:80px;top:510px;';
      }
      if (item.camid == "cam07"){
          return 'position:absolute;display:inline;left:425px;top:280px;';
      }
      if (item.camid == "cam08"){
          return 'position:absolute;display:inline;left:475px;top:280px;';
      }
      if (item.camid == "cam09"){
          return 'position:absolute;display:inline;left:525px;top:280px;';
      }
      if (item.camid == "cam10"){
          return 'position:absolute;display:inline;left:1140px;top:480px;';
      }
      if (item.camid == "cam11"){
          return 'position:absolute;display:inline;left:1182px;top:438px;';
      }
      
  }
}

customElements.define('paaspop-map', PaaspopMap); 


