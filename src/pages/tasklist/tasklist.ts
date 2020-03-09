import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs/Subject';

/**
 * Generated class for the TasklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-tasklist',
    templateUrl: 'tasklist.html',
})
export class TasklistPage {

    tasks: Array<any> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.tasks = [
            {title: 'Nasi Padang', status: 'open'},
            {title: 'Nasi Uduk', status: 'open'},
            {title: 'Nasi Kuning', status: 'close'}
        ]
}

    addItem() {
        let theNewTask: string = prompt("New Task");
        if(theNewTask!="") {
            this.tasks.push({title:theNewTask, status:'open'})
        }
    }

    markAsDone(slidingItem: ItemSliding, task: any) {
        task.status = 'done';
        slidingItem.close();
    }
    
    removeTask(slidingItem: ItemSliding, task: any) {
        task.status = 'remove';
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index,1)
        }
        slidingItem.close();
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad TasklistPage');
}

}
