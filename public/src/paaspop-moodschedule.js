import { Element as PolymerElement } from  '/node_modules/@polymer/polymer/polymer-element.js'


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
            this.localschedule = this.schedule.filter(i =>  {
                return new Date(i.startdate) < new Date(new Date().setHours(15)) && new Date(i.enddate) > new Date(new Date().setHours(15)) && i.location == location;
            }
            )[0];
        }
    }
}


customElements.define('paaspop-moodschedule', PaaspopSchedule);