import { PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'

var mood = "";

export class PaaspopMoodSource extends PolymerElement {
    static get properties() {
        return {
            lastResponse: { type:String, value:'happy', notify:true} 
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
        firebase.database().ref('mood').on('value',(snapshot) =>{
            this.lastResponse = snapshot.val().mood;
            mood = snapshot.val().mood;
            appFun();
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

