import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'

var mood = "";

export class PaaspopMoodSource extends PolymerElement {
    static get properties() {
        return {
            cams: { type:Array, value:[], notify:true},
        }
    }

    connectedCallback(){
        super.connectedCallback();
         // Initialize Firebase
         var config = {
            apiKey: "AIzaSyCEmS-zRpnIs3C5Wx7wGQTQjgdXjCRNBgY",
            authDomain: "votes-app.firebaseapp.com",
            databaseURL: "https://votes-app.firebaseio.com",
            projectId: "votes-app",
            storageBucket: "votes-app.appspot.com",
            messagingSenderId: "623693263456"
        };
        firebase.initializeApp(config);
        firebase.database().ref('moods').on('value',(snapshot) =>{
            this.cams = [];
            window.setTimeout(() => {
                this.cams = Object.values(snapshot.val())
            }, 10); 
        });
    }

    setOverrideForCam(camid, overridedata){
        firebase.database().ref('moods/'+ camid).set(overridedata);
    }
}

customElements.define('paaspop-moodsource', PaaspopMoodSource); 



