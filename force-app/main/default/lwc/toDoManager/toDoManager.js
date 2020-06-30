import { LightningElement } from 'lwc';

export default class ToDoManager extends LightningElement {
    time="8.15 PM";
    greeting ="Good Evening";

getTime(){
    const date=new Date()
    const hour=date.getHours();
    const min=date.getMinutes();
}
setGreeting(hour){
    if(hour<12){
        this.greeting="Good Morning";
    } else if(hour >=12 && hour <17){
        this.greeting="Good Afternoon";
    } else{
        this.greeting="Good Evening";
    }
}
}