import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'
import './paaspop-includes.js' 


export class PaaspopApp extends PolymerElement {
    static get template() {
        return `
            <iron-media-query query="(max-width:600px)" query-matches="{{queryMatches}}"></iron-media-query>
            <template is="dom-if" if="{{queryMatches}}">
                <paaspop-control on-arrow-left="_arrowLeft" on-arrow-right="_arrowRight" on-close-exit="_closeExit" on-open-exit="_openExit" cams="[[cams]]"></paaspop-control>
            </template>
            <template is="dom-if" if="{{!queryMatches}}">
                <paaspop-moodboard cam="[[_getFirst(cams)]]" act="{{currentact}}"></paaspop-moodboard>
            </template>
            <paaspop-moodsource id="pp_moodsource" cams="{{cams}}"></paaspop-moodsource>
            <paaspop-moodschedule localschedule="{{currentact}}" location="apollo"></paaspop-moodschedule>
        `
    }

    static get properties(){
        return {  
            message: { type:String, value:'hello world'}  }
    }

    _closeExit(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_emoji:'cross.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

    _arrowLeft(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_emoji:'arrow_left.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }
    _arrowRight(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_emoji:'arrow_right.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

    _openExit(e){
        let cam = e.detail;
        let override = { ...cam, override:false, override_emoji:'cross.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }
    _getFirst(){
        return this.cams[0];
    };
}

customElements.define('paaspop-app', PaaspopApp); 

