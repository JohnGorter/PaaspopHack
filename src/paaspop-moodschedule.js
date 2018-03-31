import { PolymerElement } from  '@polymer/polymer/polymer-element.js'


export class PaaspopSchedule extends PolymerElement {
    static get observers() {
        return ['_getLocalSchedule(location, schedule)']
    }
    static get properties() {
        return {
            location: { type:String },
            localschedule: { type:Object, value:{}, notify:true},
            schedule: { type:Array, value:[]}
        }
    }
    connectedCallback(){
        super.connectedCallback();
          // Initialize Firebase
         
        firebase.database().ref('schedule').on('value',(snapshot) =>{
            this.schedule = snapshot.val();
        });
    }

    _getLocalSchedule(location, schedule){
        if (this.schedule){
            this.localschedule = this.schedule.filter(i => 
                new Date(i.startdate) < new Date(new Date().setHours(19)) && new Date(i.enddate) > new Date(new Date().setHours(19)) && i.location == location
            )[0];
        }
    }
}


customElements.define('paaspop-moodschedule', PaaspopSchedule);