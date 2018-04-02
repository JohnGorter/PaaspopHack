import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'
import './paaspop-includes.js' 


export class PaaspopApp extends PolymerElement {
    static get template() {
        return `
            <iron-media-query query="(max-width:600px)" query-matches="{{queryMatches}}"></iron-media-query>
            <template is="dom-if" if="{{queryMatches}}">
                <div><a href="/map.html">show map</a></div>
                <paaspop-control on-happy-hour="_happyHour" on-arrow-left="_arrowLeft" on-emergency-exit="_emergencyExit" 
                on-medics-needed="_medicsNeeded"
                on-thanks="_thanks"
                on-winner="_winner"
                on-security-needed="_securityNeeded"
                on-arrow-right="_arrowRight" on-close-exit="_closeExit" on-open-exit="_openExit" select-cam cams="[[cams]]"></paaspop-control>

            </template>
            <template is="dom-if" if="{{!queryMatches}}">
                <paaspop-moodboard cam="[[_getFirst(cams)]]" act="{{currentact}}" location="[[]]"></paaspop-moodboard>
            </template>
            <paaspop-moodsource id="pp_moodsource" cams="{{cams}}"></paaspop-moodsource>
            <paaspop-moodschedule localschedule="{{currentact}}" location="apollo"></paaspop-moodschedule>
        `
    }

    static get properties(){
        return {  
            message: { type:String, value:'hello world'},
            selectedCam: { type:Object },
            theme: { type:Boolean, value:true },
        }
    }
    _closeExit(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'bg-website' + (this.theme ? "-light" : "") + '.jpg',override_emoji:'cross.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

    _arrowLeft(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'bg-website' + (this.theme ? "-light" : "") + '.jpg',override_emoji:'arrow_left.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }
    _arrowRight(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'bg-website' + (this.theme ? "-light" : "") + '.jpg',override_emoji:'arrow_right.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }
    _happyHour(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'/emoji/party.gif', override_emoji:'happy_hour.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

    _openExit(e){
        let cam = e.detail;
        let override = { ...cam, override:false, override_background:'bg-website' + (this.theme ? "-light" : "") + '.jpg',override_emoji:'cross.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

     _emergencyExit(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'/emoji/exit-sign.jpg',override_emoji:'none.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

     _medicsNeeded(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'bg-website' + (this.theme ? "-light" : "") + '.jpg',override_emoji:'medics.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

    _winner(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'/emoji/winner.gif',override_emoji:'none.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

    _securityNeeded(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'bg-website' + (this.theme ? "-light" : "") + '.jpg',override_emoji:'security.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }

 _thanks(e){
        let cam = e.detail;
        let override = { ...cam, override:true, override_background:'/emoji/thanks.gif',override_emoji:'thanks.png'};
        this.$.pp_moodsource.setOverrideForCam(e.detail.camid, override);
    }


    _getFirst(){
        return this.cams[0];
    };
}

customElements.define('paaspop-app', PaaspopApp); 

