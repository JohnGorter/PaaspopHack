import { PolymerElement } from '@polymer/polymer/polymer-element.js'

var mood = "";

export class PaaspopMoodSource extends PolymerElement {
    static get properties() {
        return {
            lastResponse: { type:String, value:'happy', notify:true},
            camid: { type:String }
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
        firebase.database().ref('moods/' + this.camid).on('value',(snapshot) =>{
            this.lastResponse = snapshot.val();
        });
    }
}

customElements.define('paaspop-moodsource', PaaspopMoodSource); 


var appFun = function(){
    document.getElementById("mood-id").innerHTML = mood;
     
    if(mood == "rtrsdsdstrt"){
        document.getElementById("mood-icon").src = "img/emoji/nervous.png";
    }
    else if(mood == "happy"){
        document.getElementById("mood-icon").src = "img/emoji/smiling.png";
    }
    else{
        document.getElementById("mood-id").innerHTML = "Geen mood gevonden!";
    }
}

